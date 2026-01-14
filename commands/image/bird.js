const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Create an embed containing information about a random bird
 * @param {*} interaction
 * @param {*} randomBird
 * @returns An embed containing information about a random bird
 */
function createEmbed(interaction, randomBird) {
  const title = '🐦 Random Bird!';

  const image = randomBird.image;
  const fact = quote(randomBird.fact);

  const username = interaction.user.username;
  const avatarURL = interaction.user.displayAvatarURL();

  const birdEmbed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(fact)
    .setColor(client.embedColour)
    .setTimestamp()
    .setImage(image)
    .setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
  return birdEmbed;
}

module.exports = {
  data: new SlashCommandBuilder().setName('bird').setDescription('Send a random image of a bird'),
  guildOnly: true,
  cooldown: 10,
  /**
   * Fetch a random bird and send into the chat via an embed
   * @param {*} interaction
   */
  async execute(interaction) {
    const randomBird = await fetchData('https://some-random-api.com/animal/bird');
    const birdEmbed = createEmbed(interaction, randomBird);
    interaction.reply({ embeds: [birdEmbed] });
  },
};
