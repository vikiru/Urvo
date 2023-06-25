const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Create the anime quote embed
 * @param {*} interaction
 * @param {*} quoteData
 * @returns An embed containing all the information about the quote
 */
function createEmbed(interaction, quoteData) {
	const animeQuote = quote('"' + quoteData.quote + '"');
	const title = `💬 Random Quote from ${quoteData.anime}`;
	const character = quoteData.character;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const quoteEmbed = new EmbedBuilder()
		.setTitle(title)
		.setColor(client.embedColour)
		.setTimestamp()
		.addFields({ name: 'Quote', value: animeQuote }, { name: 'Character', value: character })
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return quoteEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('anime-quote').setDescription('Send a random quote from an anime'),
	guildOnly: true,
	/**
	 * Fetch a random anime quote, then use the anime name from the random quote
	 * to search for the MAL anime listing
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const quoteData = await fetchData();
		const quoteEmbed = createEmbed(interaction, quoteData);
		interaction.reply({ embeds: [quoteEmbed] });
	},
};
