const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { URLSearchParams } = require('url');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('anime-quote').setDescription('Send a random quote from an anime'),
	guildOnly: true,
	/**
	 * Fetch a random anime quote, then use the anime name from the random quote
	 * to search for the MAL anime listing
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const quoteData = await fetch('https://animechan.vercel.app/api/random').then((response) => response.json());
		const animeQuote = quote('"' + quoteData.quote + '"');

		const quoteEmbed = new EmbedBuilder()
			.setTitle(`💬 Random Quote from ${quoteData.anime}`)

			.setColor('#b35843')
			.setTimestamp()
			.addFields({ name: 'Quote', value: animeQuote }, { name: 'Character', value: quoteData.character })
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [quoteEmbed] });
	},
};
