const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('panda').setDescription('Send a random image of a panda'),
	guildOnly: true,
	/**
	 * Fetch a random panda and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomPanda = await fetch('https://some-random-api.com/animal/panda').then((response) => response.json());

		const pandaEmbed = new EmbedBuilder()
			.setTitle('🐼 Random Panda!')
			.setDescription(quote(randomPanda.fact))
			.setColor('#b35843')
			.setTimestamp()
			.setImage(randomPanda.image)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [pandaEmbed] });
	},
};
