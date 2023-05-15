const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { URLSearchParams } = require('url');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Fetch a random anime quote, then use the anime name from the random quote
// to search for the MAL anime listing

module.exports = {
	data: new SlashCommandBuilder().setName('anime-quote').setDescription('Send a random quote from an anime'),
	guildOnly: true,
	async execute(interaction) {
		try {
			const quoteData = await fetch('https://animechan.vercel.app/api/random').then((response) => response.json());
			const animeQuote = '"' + quoteData.quote + '"';

			const quoteEmbed = new EmbedBuilder()
				.setColor('#EFFF00')
				.setTitle(`Random Quote from ${quoteData.anime}`)
				.setTimestamp()
				.addFields({ name: 'Quote', value: animeQuote }, { name: 'Character', value: quoteData.character });
			interaction.reply({ embeds: [quoteEmbed] });
		} catch (error) {
			interaction.reply({ content: 'An error occured executing the command.', ephemeral: true });
		}
	},
};
