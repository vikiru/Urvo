const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('kangaroo').setDescription('Send a random picture of a kangaroo'),
	guildOnly: true,
	/**
	 * Fetch a random kangaroo and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomKangaroo = await fetch('https://some-random-api.com/animal/kangaroo').then((response) =>
			response.json(),
		);

		const kangarooEmbed = new EmbedBuilder()
			.setTitle('🦘Random Kangaroo!')
			.setDescription(quote(randomKangaroo.fact))
			.setColor('#b35843')
			.setTimestamp()
			.setImage(randomKangaroo.image)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [kangarooEmbed] });
	},
};
