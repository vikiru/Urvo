const { MessageEmbed, SlashCommandBuilder } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Fetch a random bird and send into the chat via an embed
async function randomBird(message, args) {
	try {
		const { link } = await fetch('https://some-random-api.ml/img/birb').then((response) => response.json());

		const birdEmbed = new MessageEmbed().setTitle('Random Bird!').setColor('#EFFF00').setImage(link);
		message.channel.send({ embeds: [birdEmbed] });
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	data: new SlashCommandBuilder().setName('bird').setDescription('Send a random image of a bird'),
	guildOnly: true,
	execute(message, args) {
		randomBird(message, args);
	},
};
