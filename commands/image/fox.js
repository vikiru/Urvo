const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Create an embed containing information about a random fox
 * @param {*} interaction
 * @param {*} randomFox
 * @returns An embed containing information about the random fox
 */
function createEmbed(interaction, randomFox) {
  const title = '🦊 Random Fox!';
  const description = quote(randomFox.fact);
  const image = randomFox.image;

  const username = interaction.user.username;
  const avatarURL = interaction.user.displayAvatarURL();

  const foxEmbed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setColor(client.embedColour)
    .setTimestamp()
    .setImage(image)
    .setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
  interaction.reply({ embeds: [foxEmbed] });
  return foxEmbed;
}

module.exports = {
  data: new SlashCommandBuilder().setName('fox').setDescription('Send a random picture of a fox'),
  guildOnly: true,
  cooldown: 10,
  /**
   * Fetch a random fox and send into the chat via an embed
   * @param {*} interaction
   */
  async execute(interaction) {
    const randomFox = await fetchData('https://some-random-api.com/animal/fox');
    const foxEmbed = createEmbed(interaction, randomFox);
    interaction.reply({ embeds: [foxEmbed] });
  },
};
