const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Create an embed containing information about the random sonnet
 * @param {*} interaction
 * @param {*} randomSonnet
 * @returns An embed containing information about the random sonnet
 */
function createEmbed(interaction, randomSonnet) {
  const sonnetTitle = randomSonnet[0].title;
  const lines = randomSonnet[0].lines.join('\n');

  const title = `✍️ ${sonnetTitle}`;

  const username = interaction.user.username;
  const avatarURL = interaction.user.displayAvatarURL();
  const sonnetEmbed = new EmbedBuilder()
    .setTitle(title)
    .setColor(client.embedColour)
    .setTimestamp()
    .addFields({ name: 'Lines', value: lines })
    .setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
  return sonnetEmbed;
}
module.exports = {
  data: new SlashCommandBuilder()
    .setName('shakespeare')
    .setDescription('Send a random sonnet written by William Shakespeare'),
  guildOnly: true,
  cooldowns: 10,
  /**
   * Fetch a random sonnet written by William Shakespeare and send it as an embed into the chat.
   * @param {*} interaction
   */
  async execute(interaction) {
    const randomSonnet = await fetchData('https://poetrydb.org/author,title,random/Shakespeare;Sonnet;1');
    const sonnetEmbed = createEmbed(interaction, randomSonnet);
    interaction.reply({ embeds: [sonnetEmbed] });
  },
};
