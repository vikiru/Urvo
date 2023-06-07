const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Create an embed containing information about the random red panda
 * @param {*} interaction
 * @param {*} randomRedPanda
 * @returns An embed containing information about the random red panda
 */
function createEmbed(interaction, randomRedPanda) {
	const title = 'Random Red Panda!';
	const description = quote(randomRedPanda.fact);
	const image = randomRedPanda.image;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarUrl();

	const redPandaEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(image)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return redPandaEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('red_panda').setDescription('Send a random image of a red panda'),
	guildOnly: true,
	/**
	 * Fetch a random red panda and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomRedPanda = await fetchData('https://some-random-api.com/animal/red_panda');
		const redPandaEmbed = createEmbed(interaction, randomRedPanda);
		interaction.reply({ embeds: [redPandaEmbed] });
	},
};
