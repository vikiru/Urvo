const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Create the embed containing information about the random advice
 * @param {*} interaction
 * @param {*} randomAdvice
 * @returns An embed containing information about the random advice
 */
function createEmbed(interaction, randomAdvice) {
	const title = 'Random Advice!';
	const description = randomAdvice.slip.advice;

	const image = 'https://cdn.pixabay.com/photo/2013/07/12/14/48/dialog-148815_1280.png';

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const adviceEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(client.embedColour)
		.setTimestamp()
		.setThumbnail(image)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

	return adviceEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('advice').setDescription('Send a random piece of advice'),
	guildOnly: true,
	cooldowns: 10,
	/**
	 * Fetch random advice and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomAdvice = await fetchData('https://api.adviceslip.com/advice');
		const adviceEmbed = createEmbed(interaction, randomAdvice);
		interaction.reply({ embeds: [adviceEmbed] });
	},
};
