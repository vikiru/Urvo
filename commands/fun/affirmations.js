const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('affirmation').setDescription('Send a random affirmation'),
	guildOnly: true,
	/**
	 * Fetch a random affirmation and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomAffirmation = await fetch('https://www.affirmations.dev').then((response) => response.json());

		const affirmationEmbed = new EmbedBuilder()
			.setTitle(`☀️ Random Affirmation!`)
			.setDescription(randomAffirmation.affirmation)
			.setColor('#b35843')
			.setImage('https://cdn.pixabay.com/photo/2014/04/21/07/00/field-328962_1280.jpg')
			.setTimestamp()
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [affirmationEmbed] });
	},
};
