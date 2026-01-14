const { EmbedBuilder, SlashCommandBuilder, codeBlock, inlineCode, hyperlink } = require('discord.js');
const { URLSearchParams } = require('url');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Format each manga within the top 10 and display them as a field within the created embed
 * @param {*} data
 * @returns A string representing the formatted data of each manga
 */
function formatManga(data) {
  const title = data.title.replaceAll('"', '');
  const malURL = data.url;
  let score = data.score;
  let chapters = data.chapters;

  if (chapters === null) {
    chapters = 'N/A';
  }

  if (score === null) {
    score = 'NA';
  }

  let formattedString = codeBlock(title) + '\n';
  formattedString += inlineCode('MAL') + ': ' + hyperlink('link', malURL) + '\n';
  formattedString += inlineCode('Score') + ': ' + score + '\n';
  formattedString += inlineCode('Chapters') + ': ' + chapters;
  return formattedString;
}

/**
 * Create an embed containing information about the top 10 manga (publishing or all time)
 * @param {*} interaction
 * @param {*} status
 * @param {*} topMangaData
 * @returns An embed containing information about the top 10 manga (publishing or all time)
 */
function createEmbed(interaction, status, topMangaData) {
  const title = status === 'publishing' ? 'Publishing' : 'All Time';
  const username = interaction.user.username;
  const avatarURL = interaction.user.displayAvatarURL();

  const topMangaEmbed = new EmbedBuilder()
    .setTitle(`Top 10 ${title} Manga!`)
    .setColor(client.embedColour)
    .setTimestamp()
    .addFields(
      { name: '1.', value: formatManga(topMangaData[0]), inline: true },
      { name: '2.', value: formatManga(topMangaData[1]), inline: true },
      { name: '3.', value: formatManga(topMangaData[2]), inline: true },
      { name: '4.', value: formatManga(topMangaData[3]), inline: true },
      { name: '5.', value: formatManga(topMangaData[4]), inline: true },
      { name: '6.', value: formatManga(topMangaData[5]), inline: true },
      { name: '7.', value: formatManga(topMangaData[6]), inline: true },
      { name: '8.', value: formatManga(topMangaData[7]), inline: true },
      { name: '9.', value: formatManga(topMangaData[8]), inline: true },
      { name: '10.', value: formatManga(topMangaData[9]), inline: true },
    )
    .setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

  return topMangaEmbed;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('top_manga')
    .setDescription('Sends the user information about the top 10 manga (all time or publishing), obtained from MAL')
    .addStringOption((option) =>
      option
        .setName('status')
        .setDescription('The publishing status of the top 10 manga (publishing or finished)')
        .addChoices({ name: 'Publishing', value: 'publishing' }, { name: 'Finished', value: '""' }),
    ),
  guildOnly: true,
  cooldown: 10,
  /**
   * Allows a user to see the top 10 (publishing or published) manga from MAL.
   * @param {*} interaction
   */
  async execute(interaction) {
    const status = interaction.options.getString('status');
    const limit = 10;
    const query = new URLSearchParams([
      ['filter', status],
      ['limit', limit],
    ]);
    if (status !== 'publishing') {
      query.delete('filter');
    }
    const results = await fetchData(`https://api.jikan.moe/v4/top/manga?${query}`);
    const topManga = results.data;
    const topMangaEmbed = createEmbed(interaction, status, topManga);
    interaction.reply({ embeds: [topMangaEmbed] });
  },
};
