const { EmbedBuilder, SlashCommandBuilder, quote, Client } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('bird').setDescription('Send a random image of a bird'),
	guildOnly: true,
	/**
	 * Fetch a random bird and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomBird = await fetch('https://some-random-api.com/animal/bird').then((response) => response.json());

		const birdEmbed = new EmbedBuilder()
			.setTitle('🐦 Random Bird!')
			.setDescription(quote(randomBird.fact))
			.setColor('#b35843')
			.setTimestamp()
			.setImage(randomBird.image)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [birdEmbed] });
	},
};
