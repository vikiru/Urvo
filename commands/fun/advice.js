const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('advice').setDescription('Send a random piece of advice'),
	guildOnly: true,
	/**
	 * Fetch random advice and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomAdvice = await fetch('https://api.adviceslip.com/advice').then((response) => response.json());

		const adviceEmbed = new EmbedBuilder()
			.setTitle(`Random Advice!`)
			.setDescription(randomAdvice.slip.advice)
			.setColor('#b35843')
			.setTimestamp()
			.setImage('https://cdn.pixabay.com/photo/2013/07/12/14/48/dialog-148815_1280.png')
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [adviceEmbed] });
	},
};
