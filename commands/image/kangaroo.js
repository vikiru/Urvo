const { MessageEmbed } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Fetch a random kangaroo and send into the chat via an embed
async function randomKangaroo(message, args) {
	try {
		const { link } = await fetch('https://some-random-api.ml/img/kangaroo').then((response) => response.json());

		const kangarooEmbed = new MessageEmbed().setTitle('Random Kangaroo!').setColor('#EFFF00').setImage(link);
		message.channel.send({ embeds: [kangarooEmbed] });
	} catch (error) {
		console.log(error);
	}
}
module.exports = {
	name: 'kangaroo',
	description: 'Sends the user a random picture of a kangaroo',
	guildOnly: true,
	execute(message, args) {
		randomKangaroo(message, args);
	},
};
