const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Create an embed containing information about the random panda
 * @param {*} interaction
 * @param {*} randomPanda
 * @returns An embed containing information about the random panda
 */
function createEmbed(interaction, randomPanda) {
  const title = '🐼 Random Panda!';
  const description = quote(randomPanda.fact);
  const image = randomPanda.image;

  const username = interaction.user.username;
  const avatarURL = interaction.user.displayAvatarURL();

  const pandaEmbed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setColor(client.embedColour)
    .setTimestamp()
    .setImage(image)
    .setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
  return pandaEmbed;
}

module.exports = {
  data: new SlashCommandBuilder().setName('panda').setDescription('Send a random image of a panda'),
  guildOnly: true,
  cooldown: 10,
  /**
   * Fetch a random panda and send into the chat via an embed
   * @param {*} interaction
   */
  async execute(interaction) {
    const randomPanda = await fetchData('https://some-random-api.com/animal/panda');
    const pandaEmbed = createEmbed(interaction, randomPanda);
    interaction.reply({ embeds: [pandaEmbed] });
  },
};
