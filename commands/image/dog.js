const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('dog').setDescription('Send a random image of a dog'),
	guildOnly: true,
	/**
	 * Fetch a random dog and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomDog = await fetch('https://some-random-api.com/animal/dog').then((response) => response.json());

		const dogEmbed = new EmbedBuilder()
			.setTitle('🐶 Random Dog!')
			.setDescription(quote(randomDog.fact))
			.setColor('#b35843')
			.setTimestamp()
			.setImage(randomDog.image)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [dogEmbed] });
	},
};
