const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Creates an embed containing information about a random cat
 * @param {*} interaction
 * @param {*} randomCat
 * @returns An embed containing information about a random cat
 */
function createEmbed(interaction, randomCat) {
  const title = '🙀 Random Cat!';

  const image = randomCat.image;
  const fact = quote(randomCat.fact);

  const username = interaction.user.username;
  const avatarURL = interaction.user.displayAvatarURL();

  const catEmbed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(fact)
    .setColor(client.embedColour)
    .setTimestamp()
    .setImage(image)
    .setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
  return catEmbed;
}
module.exports = {
  data: new SlashCommandBuilder().setName('cat').setDescription('Send a random image of a cat'),
  guildOnly: true,
  cooldown: 10,
  /**
   * Fetch a random cat and send into the chat via an embed
   * @param {*} interaction
   */
  async execute(interaction) {
    const randomCat = await fetchData('https://some-random-api.com/animal/cat');
    const catEmbed = createEmbed(interaction, randomCat);
    interaction.reply({ embeds: [catEmbed] });
  },
};
