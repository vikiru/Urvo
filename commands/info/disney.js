const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder()
		.setName('disney')
		.setDescription('Retrieve information about a specified disney character')
		.addStringOption((option) =>
			option.setName('name').setDescription('The name of the Disney character').setRequired(true),
		),
	guildOnly: true,
	async execute(interaction) {
		const desiredCharacter = interaction.options.getString('name');
		const query = new URLSearchParams([['name', desiredCharacter]]);

		const searchResult = await fetch(`https://api.disneyapi.dev/character?${query}`).then((response) =>
			response.json(),
		);
		console.log(searchResult);

		let disneyCharacter = {};
		if (searchResult.info.count === 1) {
			disneyCharacter = searchResult.data;
		} else {
			disneyCharacter = searchResult.data[0];
		}

		const name = disneyCharacter.name;
		const films = disneyCharacter.films;
		const shows = disneyCharacter.tvShows;
		const games = disneyCharacter.videoGames;
		const attractions = disneyCharacter.parkAttractions;
		const sourceUrl = disneyCharacter.sourceUrl;
		const image = disneyCharacter.imageUrl;

		const disneyEmbed = new EmbedBuilder()
			.setTitle(name)
			.setColor(client.embedColour)
			.setTimestamp()
			.setURL(sourceUrl)
			.setImage(image)
			.addFields(
				{
					name: 'Films',
					value: films.join('\n'),
					inline: true,
				},
				{
					name: 'Shows',
					value: shows.join('\n'),
					inline: true,
				},
				{
					name: 'Games',
					value: games.join('\n'),
					inline: true,
				},
				{
					name: 'Attractions',
					value: attractions.join('\n'),
					inline: true,
				},
			)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [disneyEmbed] });
	},
};
