const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

/**
 * Helper function to make the first character of a string uppercase
 * @param {*} str
 */
function properCase(str) {
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
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

		const ageResult = await fetch(`https://api.agify.io/?name=${name}`).then((response) => response.json());
		const genderResult = await fetch(`https://api.genderize.io?name=${name}`).then((response) => response.json());
		const nationality = await fetch(`https://api.nationalize.io?name=${name}`).then((response) => response.json());

		const userEmbed = new EmbedBuilder()
			.setTitle(`Who are you, ${properCase(name)}?`)
			.setColor('#b35843')
			.setTimestamp()
			.addFields(
				{ name: 'Age', value: ageResult.age.toString() },
				{ name: 'Gender', value: properCase(genderResult.gender) },
				{ name: 'Nationality', value: nationality.country[0].country_id.toString() },
			)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [userEmbed] });
	},
};
