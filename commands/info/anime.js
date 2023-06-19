const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { URLSearchParams } = require('url');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

/**
 * Iterates through the search result data to find the first anime matching the desired anime title
 * @param {*} data
 * @param {*} desiredAnime
 * @returns The data corresponding to the desired anime
 */
function findAnime(data, desiredAnime) {
	let index = 0;
	const animeTitle = desiredAnime.toLowerCase();
	for (const currentData of data) {
		const searchIndex = currentData.titles.findIndex(
			(titleEntry) =>
				titleEntry.title.toLowerCase() === animeTitle || titleEntry.title.toLowerCase().includes(animeTitle),
		);
		if (searchIndex !== -1) {
			index = data.indexOf(currentData);
			break;
		}
	}
	return data[index];
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('anime')
		.setDescription('Sends the user information about a queried anime, obtained from MAL')
		.addStringOption((option) =>
			option.setName('query').setDescription('The name of the anime you wish to search for').setRequired(true),
		),
	guildOnly: true,
	/**
	 * Fetch information pertaining to a queried anime and send the response back as an embed.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const desiredAnime = interaction.options.getString('query');
		const query = new URLSearchParams([
			['q', `${desiredAnime}`],
			['type', 'tv'],
		]);

		const animeSearch = await fetch(`https://api.jikan.moe/v4/anime?${query}`).then((response) => response.json());

		if (!animeSearch.data.length) {
			interaction.reply('Sorry, this anime does not seem to exist or it was incorrectly typed. Please try again.');
		} else {
			const animeResult = findAnime(animeSearch.data, desiredAnime) ?? animeSearch.data[0];

			const imageUrl = animeResult.images.jpg.image_url;

			let episodeCount = 'N/A';
			if (animeResult.episodes) {
				episodeCount = animeResult.episodes.toString();
			}

			let score = '0';
			if (animeResult.score) {
				score = animeResult.score.toString();
			}
			const trimmedSynopsis = trim(animeResult.synopsis, 1024).toString();

			const animeEmbed = new EmbedBuilder()
				.setTitle(animeResult.title)
				.setColor('#b35843')
				.setTimestamp()
				.setURL(animeResult.url)
				.setThumbnail(imageUrl)
				.addFields(
					{ name: 'Type', value: animeResult.type ?? 'N/A', inline: true },
					{ name: 'Episode Count', value: episodeCount, inline: true },
					{ name: 'Score', value: score, inline: true },
					{ name: 'Synopsis', value: trimmedSynopsis, inline: false },
				)
				.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

			interaction.reply({ embeds: [animeEmbed] });
		}
	},
};
