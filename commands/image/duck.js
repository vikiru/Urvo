const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Create an embed containing information about the random duck
 * @param {*} interaction
 * @param {*} randomDuck
 * @returns An embed containing information about the random duck
 */
function createEmbed(interaction, randomDuck) {
	const title = '🦆 Random Duck!';
	const image = randomDuck.url;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const duckEmbed = new EmbedBuilder()
		.setTitle(title)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(image)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return duckEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('duck').setDescription('Send a random image of a duck'),
	guildOnly: true,
	/**
	 * Fetch a random duck and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomDuck = await fetchData('https://random-d.uk/api/v2/random');
		const duckEmbed = createEmbed(interaction, randomDuck);
		interaction.reply({ embeds: [duckEmbed] });
	},
};
