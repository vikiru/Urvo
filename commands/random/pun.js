const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('pun').setDescription('Send a random pun'),
	guildOnly: true,
	/**
	 * Fetch a random pun and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomPun = await fetch(
			'https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
		).then((response) => response.json());

		const punEmbed = new EmbedBuilder()
			.setTitle(`Random Pun!`)
			.setDescription(randomPun.joke)
			.setColor('#b35843')
			.setTimestamp()
			.setImage('https://cdn.pixabay.com/photo/2016/10/26/16/39/paddington-1771898_1280.jpg')
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [punEmbed] });
	},
};
