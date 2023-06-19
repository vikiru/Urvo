const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Helper function to make the first character of a string uppercase
 * @param {*} str
 * @returns A properly formatted string with the first character uppercase
 */
function properCase(str) {
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

/**
 * Retrieve the predicted age, gender, nationality given a name from 3 different APIs
 * @param {*} name
 * @returns A JSON object representing the retrieved age, gender and nationality information
 */
async function retrieveAllData(name) {
	const ageResult = await fetchData(`https://api.agify.io/?name=${name}`);
	const genderResult = await fetchData(`https://api.genderize.io/?name=${name}`);
	const nationalityResult = await fetchData(`https://api.nationalize.io/?name=${name}`);
	return {
		age: ageResult.age.toString(),
		gender: properCase(genderResult.gender),
		nationality: nationalityResult.country[0].country_id.toString(),
	};
}

/**
 * Create an embed containing information about the specified name (age, gender, nationality)
 * @param {*} interaction
 * @param {*} name
 * @param {*} data
 * @returns An embed containing information about the specified name (age, gender, nationality)
 */
function createEmbed(interaction, name, data) {
	const title = `Who are you, ${properCase(name)}?`;

	const age = data.age;
	const gender = data.gender;
	const nationality = data.nationality;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const userEmbed = new EmbedBuilder()
		.setTitle(title)
		.setColor(client.embedColour)
		.setTimestamp()
		.addFields(
			{ name: 'Age', value: age },
			{ name: 'Gender', value: gender },
			{ name: 'Nationality', value: nationality },
		)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return userEmbed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('guess_user')
		.setDescription('Determine the age, gender, and nationality of a user based on their name')
		.addStringOption((option) =>
			option.setName('name').setDescription('The name that you wish to provide').setRequired(true),
		),
	guildOnly: true,
	/**
	 * Determine the ageResult, genderResult, and nationality of a user based on provided name. Send result as an embed.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const name = interaction.options.getString('name');
		const data = await retrieveAllData(name);
		const userEmbed = createEmbed(interaction, name, data);
		interaction.reply({ embeds: [userEmbed] });
	},
};
