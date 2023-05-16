const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('koala').setDescription('Send a random image of a koala'),
	guildOnly: true,
	/**
	 * Fetch a random koala and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomKoala = await fetch('https://some-random-api.com/animal/koala').then((response) => response.json());

		const koalaEmbed = new EmbedBuilder()
			.setTitle('🐨 Random Kangaroo!')
			.setDescription(quote(randomKoala.fact))
			.setColor('#b35843')
			.setTimestamp()
			.setImage(randomKoala.image)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [koalaEmbed] });
	},
};
