const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Create an embed containing information about the random whale
 * @param {*} interaction
 * @param {*} randomWhale
 * @returns An embed containing information about the random whale
 */
function createEmbed(interaction, randomWhale) {
  const title = '🐋 Random Whale!';
  const image = randomWhale.link;

  const username = interaction.user.username;
  const avatarURL = interaction.user.displayAvatarURL();

  const whaleEmbed = new EmbedBuilder()
    .setTitle(title)
    .setColor(client.embedColour)
    .setTimestamp()
    .setImage(image)
    .setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
  return whaleEmbed;
}

module.exports = {
  data: new SlashCommandBuilder().setName('whale').setDescription('Send a random image of a whale'),
  guildOnly: true,
  cooldown: 10,
  /**
   * Fetch a random whale and send into the chat via an embed
   * @param {*} interaction
   */
  async execute(interaction) {
    const randomWhale = await fetchData('https://some-random-api.com/img/whale');
    const whaleEmbed = createEmbed(interaction, randomWhale);
    interaction.reply({ embeds: [whaleEmbed] });
  },
};
