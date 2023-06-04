const { EmbedBuilder, SlashCommandBuilder, codeBlock, inlineCode, hyperlink } = require('discord.js');
const { URLSearchParams } = require('url');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

function formatAnime(data) {
	const title = data.title.replaceAll('"', '');
	const malURL = data.url;
	let trailerURL = data.trailer.url;
	let score = data.score;
	let episodeCount = data.episodes;

	if (episodeCount === null) {
		episodeCount = 0;
	}
	if (score === null) {
		score = 0;
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

		const results = await fetch(`https://api.jikan.moe/v4/top/anime?${query}`).then((response) => response.json());
		const topAnime = results.data;

		let titleStatusText = status === 'airing' ? 'Airing' : 'All Time';
		const topAnimeEmbed = new EmbedBuilder()
			.setTitle(`Top 10 ${titleStatusText} Anime!`)
			.setColor(client.embedColour)
			.setTimestamp()
			.addFields(
				{ name: '1.', value: formatAnime(topAnime[0]), inline: true },
				{ name: '2.', value: formatAnime(topAnime[1]), inline: true },
				{ name: '3.', value: formatAnime(topAnime[2]), inline: true },
				{ name: '4.', value: formatAnime(topAnime[3]), inline: true },
				{ name: '5.', value: formatAnime(topAnime[4]), inline: true },
				{ name: '6.', value: formatAnime(topAnime[5]), inline: true },
				{ name: '7.', value: formatAnime(topAnime[6]), inline: true },
				{ name: '8.', value: formatAnime(topAnime[7]), inline: true },
				{ name: '9.', value: formatAnime(topAnime[8]), inline: true },
				{ name: '10.', value: formatAnime(topAnime[8]), inline: true },
			)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [topAnimeEmbed] });
	},
};
