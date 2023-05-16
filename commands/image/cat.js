const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('cat').setDescription('Send a random image of a cat'),
	guildOnly: true,
	/**
	 * Fetch a random cat and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomCat = await fetch('https://some-random-api.com/animal/cat').then((response) => response.json());

		const catEmbed = new EmbedBuilder()
			.setTitle('🐈 Random Cat!')
			.setDescription(quote(randomCat.fact))
			.setColor('#b35843')
			.setTimestamp()
			.setImage(randomCat.image)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [catEmbed] });
	},
};
