const { MessageEmbed, SlashCommandBuilder } = require('discord.js');
const { URLSearchParams } = require('url');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Fetch the MAL listing of an anime given by the user's args
// and display its respective info
async function retrieveAnime(message, args) {
	try {
		const query = new URLSearchParams({ query: args.join(' ') });

		const { results } = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}`).then((response) =>
			response.json(),
		);
		const animeInfo = results[0];

		const animeEmbed = new MessageEmbed()
			.setTitle(animeInfo.title)
			.setColor('#EFFF00')
			.setURL(animeInfo.url)
			.setThumbnail(animeInfo.image_url)
			.addFields(
				{ name: 'Rating', value: animeInfo.rated, inline: true },
				{ name: 'Type', value: animeInfo.type, inline: true },
				{ name: 'Score', value: animeInfo.score.toString(), inline: true },
				{ name: 'Episodes', value: animeInfo.episodes.toString(), inline: true },
				{
					name: 'Start Date',
					value: animeInfo.start_date.split('T')[0],
					inline: true,
				},
				{
					name: 'End Date',
					value: animeInfo.end_date.split('T')[0],
					inline: true,
				},
				{ name: 'Description', value: animeInfo.synopsis },
			);

		message.channel.send({ embeds: [animeEmbed] });
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('anime')
		.setDescription('Sends the user information about a queried anime, obtained from MA'),
	guildOnly: true,
	execute(message, args) {
		retrieveAnime(message, args);
	},
};
