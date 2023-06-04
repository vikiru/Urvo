const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('raccoon').setDescription('Send a random image of a raccoon'),
	guildOnly: true,
	/**
	 * Fetch a random raccoon and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomRaccoon = await fetch('https://some-random-api.com/animal/raccoon').then((response) => response.json());

		const raccoonEmbed = new EmbedBuilder()
			.setTitle('🦝 Random Raccoon!')
			.setDescription(quote(randomRaccoon.fact))
			.setColor('#b35843')
			.setTimestamp()
			.setImage(randomRaccoon.image)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [raccoonEmbed] });
	},
};
