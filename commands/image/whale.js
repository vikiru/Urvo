const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('whale').setDescription('Send a random image of a whale'),
	guildOnly: true,
	/**
	 * Fetch a random whale and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomWhale = await fetch('https://some-random-api.com/animal/whale').then((response) => response.json());

		const whaleEmbed = new EmbedBuilder()
			.setTitle('🐋 Random Whale!')
			.setColor('#b35843')
			.setTimestamp()
			.setImage(randomWhale.image)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [whaleEmbed] });
	},
};
