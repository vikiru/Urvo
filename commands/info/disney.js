const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Given an array of data, return a formatted string of that data
 * @param {*} data
 * @param {*} limit
 * @returns A formatted string of an array of data
 */
function formatData(data, limit) {
	return data.length == 0 ? 'N/A' : data.slice(0, limit - 1).join('\n') + '\nand more...';
}

/**
 * Given the data of a disney character, clean all of the required data used in embed creation
 * @param {*} disneyData
 * @returns A JSON object containing all the data used in embed creation
 */
function cleanAllData(disneyData) {
	return {
		name: disneyData.name,
		films: formatData(disneyData.films, 5),
		tvShows: formatData(disneyData.tvShows, 5),
		videoGames: formatData(disneyData.videoGames, 5),
		parkAttractions: formatData(disneyData.parkAttractions, 5),
		sourceUrl: disneyData.sourceUrl,
		image: disneyData.imageUrl,
	};
}

/**
 * Simple helper function to find the disney character given a name, if not successful returns the first character
 * @param {*} searchData
 * @param {*} name
 * @returns The disney character entry corresponding to a given name
 */
function findEntry(searchData, name) {
	const index = searchData.findIndex((entry) => entry.name.toLowerCase() === name);
	return index === -1 ? searchData[0] : searchData[index];
}

/**
 * Create an embed containing information about the disney character
 * @param {*} interaction
 * @param {*} data
 * @returns An embed containing information about the disney character
 */
function createEmbed(interaction, data) {
	const title = data.name;
	const films = data.films;
	const shows = data.tvShows;
	const games = data.videoGames;
	const attractions = data.parkAttractions;
	const sourceUrl = data.sourceUrl;
	const image = data.image;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const disneyEmbed = new EmbedBuilder()
		.setTitle(title)
		.setColor(client.embedColour)
		.setTimestamp()
		.setURL(sourceUrl)
		.setImage(image)
		.addFields(
			{
				name: 'Films',
				value: films,
				inline: true,
			},
			{
				name: 'Shows',
				value: shows,
				inline: true,
			},
			{
				name: 'Games',
				value: games,
				inline: true,
			},
			{
				name: 'Attractions',
				value: attractions,
				inline: true,
			},
		)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return disneyEmbed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('disney')
		.setDescription('Retrieve information about a specified disney character')
		.addStringOption((option) =>
			option.setName('name').setDescription('The name of the Disney character').setRequired(true),
		),
	guildOnly: true,
	cooldown: 10,
	/**
	 * Allows a user to search for a Disney character and returns information about that character, if it exists.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const desiredCharacter = interaction.options.getString('name');
		const query = new URLSearchParams([['name', desiredCharacter]]);
		const searchResult = await fetchData(`https://api.disneyapi.dev/character?${query}`);
		const count = searchResult.info.count;

		let disneyCharacter = {};
		if (count === 0) {
			interaction.reply({
				content: 'Sorry, there does not seem to be a character with that name. Please try again with a different name',
				ephemeral: true,
			});
		} else {
			disneyCharacter = count === 1 ? searchResult.data : findEntry(searchResult.data, desiredCharacter);
			const disneyData = cleanAllData(disneyCharacter);
			const disneyEmbed = createEmbed(interaction, disneyData);
			interaction.reply({ embeds: [disneyEmbed] });
		}
	},
};
