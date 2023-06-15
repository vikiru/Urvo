const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Create an embed containing information about a random coffee
 * @param {*} interaction
 * @param {*} randomCoffee
 * @returns An embed containing information about a random coffee
 */
function createEmbed(interaction, randomCoffee) {
	const title = '☕ Random Coffee!';
	const file = randomCoffee.file;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const coffeeEmbed = new EmbedBuilder()
		.setTitle(title)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(file)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return coffeeEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('coffee').setDescription('Send a random image of coffee'),
	guildOnly: true,
	/**
	 * Fetch a random coffee image and send it into the chat via an embed.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomCoffee = await fetchData('https://coffee.alexflipnote.dev/random.json');
		const coffeeEmbed = createEmbed(interaction, randomCoffee);
		interaction.reply({ embeds: [coffeeEmbed] });
	},
};
