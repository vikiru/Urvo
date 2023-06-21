const { EmbedBuilder, SlashCommandBuilder, codeBlock, inlineCode, hyperlink } = require('discord.js');
const { URLSearchParams } = require('url');
const { fetchData } = require('../../utils/fetchData');

/**
 * Format each anime within the top 10 and display them as a field within the created embed
 * @param {*} data
 * @returns A string representing the formatted data of each anime
 */
function formatAnime(data) {
	const title = data.title.replaceAll('"', '');
	const malURL = data.url;
	const trailerURL = data.trailer.url;
	let score = data.score;
	let episodeCount = data.episodes;

	if (episodeCount === null) {
		episodeCount = 'NA';
	}
	if (score === null) {
		score = 'NA';
	}

	let formattedString = codeBlock(title) + '\n';
	formattedString += inlineCode('MAL') + ': ' + hyperlink('link', malURL) + '\n';

	if (trailerURL !== null) {
		formattedString += inlineCode('Trailer') + ': ' + hyperlink('link', trailerURL) + '\n';
	} else {
		formattedString += inlineCode('Trailer') + ': ' + 'N/A' + '\n';
	}

	formattedString += inlineCode('Score') + ': ' + score + '\n';
	formattedString += inlineCode('Episodes') + ': ' + episodeCount;
	return formattedString;
}

/**
 * Create an embed containing information about the top 10 anime (airing or all time)
 * @param {*} interaction
 * @param {*} status
 * @param {*} topAnimeData
 * @returns An embed containing information about the top 10 anime (airing or all time)
 */
function createEmbed(interaction, status, topAnimeData) {
	const title = status === 'airing' ? 'Airing' : 'All Time';
	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const topAnimeEmbed = new EmbedBuilder()
		.setTitle(`Top 10 ${title} Anime!`)
		.setColor(client.embedColour)
		.setTimestamp()
		.addFields(
			{ name: '1.', value: formatAnime(topAnimeData[0]), inline: true },
			{ name: '2.', value: formatAnime(topAnimeData[1]), inline: true },
			{ name: '3.', value: formatAnime(topAnimeData[2]), inline: true },
			{ name: '4.', value: formatAnime(topAnimeData[3]), inline: true },
			{ name: '5.', value: formatAnime(topAnimeData[4]), inline: true },
			{ name: '6.', value: formatAnime(topAnimeData[5]), inline: true },
			{ name: '7.', value: formatAnime(topAnimeData[6]), inline: true },
			{ name: '8.', value: formatAnime(topAnimeData[7]), inline: true },
			{ name: '9.', value: formatAnime(topAnimeData[8]), inline: true },
			{ name: '10.', value: formatAnime(topAnimeData[9]), inline: true },
		)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

	return topAnimeEmbed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('top_anime')
		.setDescription('Sends the user information about the top 10 anime (all time or airing), obtained from MAL')
		.addStringOption((option) =>
			option
				.setName('status')
				.setDescription('The airing status of the top 10 anime (airing or finished)')
				.addChoices({ name: 'Airing', value: 'airing' }, { name: 'Finished', value: "''" }),
		),
	guildOnly: true,
	async execute(interaction) {
		const status = interaction.options.getString('status');
		const limit = 10;
		const query = new URLSearchParams([
			['filter', status],
			['type', 'tv'],
			['limit', limit],
		]);
		if (status !== 'airing') {
			query.delete('filter');
		}
		const results = await fetchData(`https://api.jikan.moe/v4/top/anime?${query}`);
		const topAnime = results.data;
		const topAnimeEmbed = createEmbed(interaction, status, topAnime);
		interaction.reply({ embeds: [topAnimeEmbed] });
	},
};
