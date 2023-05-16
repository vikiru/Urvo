const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('fox').setDescription('Send a random picture of a fox'),
	guildOnly: true,
	/**
	 * Fetch a random fox and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomFox = await fetch('https://some-random-api.com/animal/fox').then((response) => response.json());

		const foxEmbed = new EmbedBuilder()
			.setTitle('🦊 Random Fox!')
			.setDescription(quote(randomFox.fact))
			.setColor('#b35843')
			.setTimestamp()
			.setImage(randomFox.image)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [foxEmbed] });
	},
};
