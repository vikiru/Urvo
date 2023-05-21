const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('duck').setDescription('Send a random image of a duck'),
	guildOnly: true,
	/**
	 * Fetch a random duck and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomDuck = await fetch('https://random-d.uk/api/v2/random').then((response) => response.json());

		const duckEmbed = new EmbedBuilder()
			.setTitle('🦆 Random Duck!')
			.setColor('#b35843')
			.setTimestamp()
			.setImage(randomDuck.image)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [duckEmbed] });
	},
};
