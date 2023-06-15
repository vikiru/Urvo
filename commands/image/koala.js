const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Create an embed containing information about the random koala
 * @param {*} interaction
 * @param {*} randomKoala
 * @returns An embed containing information about the random koala
 */
function createEmbed(interaction, randomKoala) {
	const title = '🐨 Random Koala!';
	const description = quote(randomKoala.fact);
	const image = randomKoala.image;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const koalaEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(image)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return koalaEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('koala').setDescription('Send a random image of a koala'),
	guildOnly: true,
	/**
	 * Fetch a random koala and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomKoala = await fetchData('https://some-random-api.com/animal/koala');
		const koalaEmbed = createEmbed(interaction, randomKoala);
		interaction.reply({ embeds: [koalaEmbed] });
	},
};
