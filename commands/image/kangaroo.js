const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Create an embed containing information about a random kangaroo
 * @param {*} interaction
 * @param {*} randomKangaroo
 * @returns An embed containing information about the random kangaroo
 */
function createEmbed(interaction, randomKangaroo) {
	const title = '🦘Random Kangaroo!';
	const description = quote(randomKangaroo.fact);
	const image = randomKangaroo.image;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarUrl();

	const kangarooEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(image)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return kangarooEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('kangaroo').setDescription('Send a random picture of a kangaroo'),
	guildOnly: true,
	/**
	 * Fetch a random kangaroo and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomKangaroo = await fetchData('https://some-random-api.com/animal/kangaroo');
		const kangarooEmbed = createEmbed(interaction, randomKangaroo);
		interaction.reply({ embeds: [kangarooEmbed] });
	},
};
