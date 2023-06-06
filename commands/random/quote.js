const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Create an embed containing information about the random quote
 * @param {*} interaction
 * @param {*} randomQuote
 * @returns An embed containing information about the random quote
 */
function createEmbed(interaction, randomQuote) {
	const title = '💬 Random Quote!';

	const quoteMsg = quote(`"${randomQuote.quote}"`);
	const link = quote.quoteLink;
	const author = randomQuote.author;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const quoteEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(quoteMsg)
		.setColor(client.embedColour)
		.setTimestamp()
		.setURL(link)
		.addFields({ name: 'Author', value: author })
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

	return quoteEmbed;
}
module.exports = {
	data: new SlashCommandBuilder().setName('quote').setDescription('Send a random quote'),
	guildOnly: true,
	/**
	 * Fetch a random quote and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomQuote = await fetchData('https://dummyjson.com/quotes/random');
		const quoteEmbed = createEmbed(interaction, randomQuote);
		interaction.reply({ embeds: [quoteEmbed] });
	},
};
