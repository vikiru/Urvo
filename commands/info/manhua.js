const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { URLSearchParams } = require('url');
const { fetchData } = require('../../utils/fetchData.js');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
const { findEntry } = require('../../utils/findEntry.js');
const { createConfirmationRow, createSelectConfirmRow } = require('../../utils/createConfirmationRow.js');
const { createResultsEmbed } = require('../../utils/createResultsEmbed.js');

/**
 * Create an embed containing information about a queried manhua
 * @param {*} interaction
 * @param {*} manhuaResult
 * @returns An embed containing information about the queried manhua
 */
function createEmbed(interaction, manhuaResult) {
  const title = manhuaResult.title;
  const url = manhuaResult.url;
  const imageUrl = manhuaResult.images.jpg.image_url;
  let type = 'N/A';
  if (manhuaResult.type) {
    type = manhuaResult.type;
  }

  let chapters = 'N/A';
  if (manhuaResult.chapters) {
    chapters = manhuaResult.chapters.toString();
  }

  let score = 'N/A';
  if (manhuaResult.score) {
    score = manhuaResult.score.toString();
  }

  const synopsis = manhuaResult.synopsis ?? 'N/A';
  const trimmedSynopsis = trim(synopsis, 1024).toString();

  const username = interaction.user.username;
  const avatarURL = interaction.user.displayAvatarURL();

  const manhuaEmbed = new EmbedBuilder()
    .setTitle(title)
    .setColor(client.embedColour)
    .setTimestamp()
    .setURL(url)
    .setThumbnail(imageUrl)
    .addFields(
      { name: 'Type', value: type, inline: true },
      { name: 'Chapter Count', value: chapters, inline: true },
      { name: 'Score', value: score, inline: true },
      { name: 'Synopsis', value: trimmedSynopsis, inline: false },
    )
    .setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
  return manhuaEmbed;
}
module.exports = {
  data: new SlashCommandBuilder()
    .setName('manhua')
    .setDescription('Sends the user information about a queried manhua, obtained from MAL')
    .addStringOption((option) =>
      option.setName('query').setDescription('The name of the manhua you wish to search for').setRequired(true),
    ),
  guildOnly: true,
  cooldown: 10,
  /**
   * Allows a user to search for a manhua and return information about that manhua, if it exists.
   * @param {*} interaction
   */
  async execute(interaction) {
    const desiredManhua = interaction.options.getString('query');
    const query = new URLSearchParams([['q', `${desiredManhua}`]]);
    const manhuaSearch = await fetchData(`https://api.jikan.moe/v4/manga?${query}`);
    const resultLength = manhuaSearch.data.length;

    if (!resultLength) {
      interaction.reply({
        content: 'Sorry, this manhua does not seem to exist or it was incorrectly typed. Please try again.',
        ephemeral: true,
      });
    } else {
      let manhuaEmbed = new EmbedBuilder();
      if (resultLength === 1) {
        manhuaEmbed = createEmbed(interaction, manhuaSearch.data[0]);
        interaction.reply({
          embeds: [manhuaEmbed],
        });
      } else {
        const indexes = findEntry(manhuaSearch.data, desiredManhua, 'Manhua');
        if (indexes.length != 0 && indexes.length > 1) {
          const resultsEmbed = createResultsEmbed(interaction, indexes, 'Manhua Search Results', 'manhua');
          const row =
            indexes.length <= 5 ? createConfirmationRow(indexes.length) : createSelectConfirmRow(indexes.length);
          const response = await interaction.reply({
            embeds: [resultsEmbed],
            components: [row],
          });
          const filter = (i) => i.user.id === interaction.user.id;
          try {
            const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
            const confirmId = confirmation.customId;
            const index = isNaN(confirmId) ? parseInt(confirmation.values[0]) : parseInt(confirmId);
            manhuaEmbed = createEmbed(interaction, indexes[index]);
            await interaction.editReply({
              embeds: [manhuaEmbed],
              components: [],
            });
          } catch (error) {
            await interaction.editReply({
              content: `Confirmation was not received within 1 minute. Aborting command execution.`,
              components: [],
            });
          }
        } else if (indexes.length === 1) {
          manhuaEmbed = createEmbed(interaction, indexes[0]);
          interaction.reply({
            embeds: [manhuaEmbed],
          });
        } else {
          interaction.reply({
            content: 'Sorry, this manhua does not seem to exist or it was incorrectly typed. Please try again.',
            ephemeral: true,
          });
        }
      }
    }
  },
};
