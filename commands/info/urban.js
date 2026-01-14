const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Iterate through the results of a given term and return the most voted answer.
 * @param {*} results
 * @returns The most voted answer
 */
function returnMostVotedAnswer(results) {
  let max = 0;
  let index = 0;
  if (results.length > 1) {
    for (let i = 0; i < results.length; i++) {
      const thumbsUpCount = results[i].thumbs_up;
      if (thumbsUpCount > max) {
        max = thumbsUpCount;
        index = i;
      }
    }
  }
  return results[index];
}

/**
 * Create an embed containing information about the requested term from Urban Dictionary
 * @param {*} interaction
 * @param {*} result
 * @returns An embed containing information about the requested term from Urban Dictionary
 */
function createEmbed(interaction, result) {
  const author = result.author;
  const definition = result.definition;
  const example = result.example;
  const permalink = result.permalink;
  const thumbsUp = result.thumbs_up.toString();
  const thumbsDown = result.thumbs_down.toString();
  const term = result.word;
  const writtenOn = result.written_on.split('T')[0];

  const title = `Definition for ${term}`;

  const username = interaction.user.username;
  const avatarURL = interaction.user.displayAvatarURL();

  const urbanEmbed = new EmbedBuilder()
    .setTitle(title)
    .setURL(permalink)
    .setDescription(definition)
    .setColor(client.embedColour)
    .setTimestamp()
    .addFields(
      { name: 'Example', value: example },
      { name: 'Author', value: author, inline: true },
      { name: 'Written On', value: writtenOn, inline: true },
      {
        name: 'Rating',
        value: `👍${thumbsUp} 👎${thumbsDown}`,
        inline: true,
      },
    )
    .setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

  return urbanEmbed;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('urban')
    .setDescription('Provides the definition for a given term from Urban Dictionary')
    .addStringOption((option) => option.setName('term').setDescription('The term to define').setRequired(true)),
  guildOnly: true,
  cooldown: 10,
  /**
   * Provide the definition for a given term from Urban Dictionary.
   * @param {*} interaction
   */
  async execute(interaction) {
    const term = interaction.options.getString('term');
    const termResults = await fetchData(`https://api.urbandictionary.com/v0/define?term=${term}`);
    if (termResults.list.length == 0) {
      interaction.reply({
        content: 'Sorry, there are no definitions for the provided term. Please try again with a different term',
        ephemeral: true,
      });
    } else {
      const result = returnMostVotedAnswer(termResults.list);
      const urbanEmbed = createEmbed(interaction, result);
      interaction.reply({ embeds: [urbanEmbed] });
    }
  },
};
