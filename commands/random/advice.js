const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

/**
 * Fetch data from the advice API and return the data as an object
 * @returns An object containing advice data
 */
async function fetchData() {
	try {
		const randomAdvice = await fetch('https://api.adviceslip.com/advice').then((response) => response.json());
		return randomAdvice;
	} catch (error) {
		console.log(error);
	}
}

/**
 * Create the embed containing information about the random advice
 * @param {*} interaction
 * @param {*} randomAdvice
 * @returns An embed containing information about the random advice
 */
function createEmbed(interaction, randomAdvice) {
	const title = 'Random Advice!';
	console.log(randomAdvice);
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
	/**
	 * Fetch random advice and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomAdvice = await fetchData();

		const adviceEmbed = createEmbed(interaction, randomAdvice);

		interaction.reply({ embeds: [adviceEmbed] });
	},
};
