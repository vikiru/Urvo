const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('programming_joke').setDescription('Send a random programming joke'),
	guildOnly: true,
	/**
	 * Fetch a random programming joke and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomJoke = await fetch(
			'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
		).then((response) => response.json());

		const programmingJokeEmbed = new EmbedBuilder()
			.setTitle(`Random Programming Joke!`)
			.setDescription(randomJoke.joke)
			.setColor('#b35843')
			.setTimestamp()
			.setImage('https://cdn.pixabay.com/photo/2016/06/29/09/29/code-1486361_1280.jpg')
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [programmingJokeEmbed] });
	},
};
