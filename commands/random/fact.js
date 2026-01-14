const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Create an embed containing information about a random fact
 * @param {*} interaction
 * @param {*} randomFact
 * @returns An embed containing information about the random fact
 */
function createEmbed(interaction, randomFact) {
  const title = 'Random Fact!';
  const description = randomFact.text;
  const image = 'https://cdn.pixabay.com/photo/2019/11/09/06/00/question-4612922_1280.jpg';

  const username = interaction.user.username;
  const avatarURL = interaction.user.displayAvatarURL();

  const factEmbed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setColor(client.embedColour)
    .setTimestamp()
    .setThumbnail(image)
    .setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
  return factEmbed;
}

module.exports = {
  data: new SlashCommandBuilder().setName('fact').setDescription('Send a random fact'),
  guildOnly: true,
  cooldowns: 10,
  /**
   * Fetch a random fact and send it as an embed into the chat.
   * @param {*} interaction
   */
  async execute(interaction) {
    const randomFact = await fetchData('https://uselessfacts.jsph.pl/api/v2/facts/random');
    const factEmbed = createEmbed(interaction, randomFact);
    interaction.reply({ embeds: [factEmbed] });
  },
};
