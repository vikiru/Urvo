const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Create the embed containing information about the random affirmation
 * @param {*} interaction
 * @param {*} randomAffirmation
 * @returns An embed containing information about the random affirmation
 */
function createEmbed(interaction, randomAffirmation) {
	const title = '☀️ Random Affirmation!';
	const affirmation = randomAffirmation.affirmation;
	const image = 'https://cdn.pixabay.com/photo/2014/04/21/07/00/field-328962_1280.jpg';

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const affirmationEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(affirmation)
		.setColor(client.embedColour)
		.setImage(image)
		.setTimestamp()
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return affirmationEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('affirmation').setDescription('Send a random affirmation'),
	guildOnly: true,
	/**
	 * Fetch a random affirmation and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomAffirmation = await fetchData('https://www.affirmations.dev');
		const affirmationEmbed = createEmbed(interaction, randomAffirmation);
		interaction.reply({ embeds: [affirmationEmbed] });
	},
};
