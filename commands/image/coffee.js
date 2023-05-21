const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('coffee').setDescription('Send a random image of coffee'),
	guildOnly: true,
	/**
	 * Fetch a random coffee image and send it into the chat via an embed.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomCoffee = await fetch('https://coffee.alexflipnote.dev/random.json').then((response) => response.json());

		const coffeeEmbed = new EmbedBuilder()
			.setTitle('☕ Random Duck!')
			.setColor('#b35843')
			.setTimestamp()
			.setImage(randomCoffee.file)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [coffeeEmbed] });
	},
};
