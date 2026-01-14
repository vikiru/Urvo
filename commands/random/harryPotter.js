const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Retrieve information about a random Harry Potter character
 * @returns A JSON object containing information about the character
 */
async function retrieveRandomPotter() {
  const potterData = await fetchData('https://hp-api.onrender.com/api/characters');
  const maxNum = potterData.length ?? 402;
  const random = Math.floor(Math.random() * maxNum);
  const randomPotter = potterData[random];
  return randomPotter;
}

/**
 * Create an embed containing information about the random Harry Potter character
 * @param {*} interaction
 * @param {*} randomPotter
 * @returns An embed containing information about the random Harry Potter character
 */
function createEmbed(interaction, randomPotter) {
  const title = randomPotter.name;
  const defaultValue = 'N/A';

  const ancestry = randomPotter.ancestry !== '' ? randomPotter.ancestry : defaultValue;
  const gender = randomPotter.gender !== '' ? randomPotter.gender : defaultValue;
  const house = randomPotter.house !== '' ? randomPotter.house : defaultValue;
  const patronus = randomPotter.patronus !== '' ? randomPotter.patronus : defaultValue;
  const species = randomPotter.species !== '' ? randomPotter.species : defaultValue;

  const username = interaction.user.username;
  const avatarURL = interaction.user.displayAvatarURL();

  const potterEmbed = new EmbedBuilder()
    .setTitle(title)
    .setColor(client.embedColour)
    .setTimestamp()
    .addFields(
      { name: 'Species', value: species, inline: true },
      { name: 'Gender', value: gender, inline: true },
      { name: 'House', value: house, inline: true },
      { name: 'Ancestry', value: ancestry, inline: true },
      { name: 'Patronus', value: patronus, inline: true },
    )
    .setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

  if (randomPotter.image) {
    potterEmbed.setImage(randomPotter.image);
  }

  return potterEmbed;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('potter')
    .setDescription('Get information about a random Harry Potter character'),
  guildOnly: true,
  cooldowns: 10,
  /**
   * Fetch a random Harry Potter character and send it as an embed into the chat.
   * @param {*} interaction
   */
  async execute(interaction) {
    const randomPotter = await retrieveRandomPotter();
    const potterEmbed = createEmbed(interaction, randomPotter);
    interaction.reply({ embeds: [potterEmbed] });
  },
};
