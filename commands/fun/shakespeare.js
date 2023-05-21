const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shakespeare')
		.setDescription('Send a random sonnet written by William Shakespeare'),
	guildOnly: true,
	/**
	 * Fetch a random sonnet written by William Shakespeare and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomSonnet = await fetch('https://poetrydb.org/author,title,random/Shakespeare;Sonnet;1').then((response) =>
			response.json(),
		);
		const animeQuote = quote('"' + randomSonnet.quote + '"');

		const quoteEmbed = new EmbedBuilder()
			.setTitle(`✍️ ${randomSonnet.title}`)
			.setColor('#b35843')
			.setTimestamp()
			.addFields({ name: 'Lines', value: randomSonnet.lines.join('\n') })
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [quoteEmbed] });
	},
};
