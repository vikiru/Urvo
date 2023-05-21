const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('quote').setDescription('Send a random quote'),
	guildOnly: true,
	/**
	 * Fetch a random quote and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomQuote = await fetch('https://dummyjson.com/quotes/random').then((response) => response.json());

		const quoteMsg = quote(`"${randomQuote.quote}"`);

		const quoteEmbed = new EmbedBuilder()
			.setTitle('Random Quote!')
			.setDescription(quoteMsg)
			.setColor('#b35843')
			.setTimestamp()
			.setURL(quote.quoteLink)
			.addFields({ name: 'Author', value: randomQuote.author })
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [quoteEmbed] });
	},
};
