const { MessageEmbed } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Fetch a random cat and send into the chat via an embed
async function randomCat(message, args) {
	try {
		//TODO: const { file } = await fetch('https://aws.random.cat/meow').then((response) => response.json());
		const catEmbed = new MessageEmbed().setTitle('Random Cat!').setColor('#EFFF00').setImage(file);
		message.channel.send({ embeds: [catEmbed] });
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	name: 'cat',
	description: 'Sends the user a random picture of a cat',
	guildOnly: true,
	execute(message, args) {
		randomCat(message, args);
	},
};
