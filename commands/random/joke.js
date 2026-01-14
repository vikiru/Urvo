const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Create an embed containing information about the random joke
 * @param {*} interaction
 * @param {*} randomJoke
 * @returns An embed containing information about the random joke
 */
function createEmbed(interaction, randomJoke) {
  const title = '😂 Random Joke!';
  const image = 'https://logos.textgiraffe.com/logos/logo-name/Joke-designstyle-summer-m.png';

  const text = randomJoke.setup + '\n' + randomJoke.punchline;

  const username = interaction.user.username;
  const avatarURL = interaction.user.displayAvatarURL();

  const jokeEmbed = new EmbedBuilder()
    .setTitle(title)
    .setColor(client.embedColour)
    .setTimestamp()
    .setThumbnail(image)
    .setDescription(text)
    .setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
  return jokeEmbed;
}

module.exports = {
  data: new SlashCommandBuilder().setName('joke').setDescription('Receive a random joke'),
  guildOnly: true,
  cooldowns: 10,
  /**
   * Fetch a random joke and send into the chat via an embed
   * @param {*} interaction
   */
  async execute(interaction) {
    const randomJoke = await fetchData('https://official-joke-api.appspot.com/jokes/random');
    const jokeEmbed = createEmbed(interaction, randomJoke);
    interaction.reply({ embeds: [jokeEmbed] });
  },
};
