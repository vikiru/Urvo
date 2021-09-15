const { MessageEmbed } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Fetch a random panda and send into the chat via an embed
async function randomPanda(message, args) {
	try {
		const { link } = await fetch('https://some-random-api.ml/img/panda').then((response) => response.json());

		const pandaEmbed = new MessageEmbed().setTitle('Random Panda!').setColor('#EFFF00').setImage(link);
		message.channel.send({ embeds: [pandaEmbed] });
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	name: 'panda',
	description: 'Sends the user a random picture of a panda',
	guildOnly: true,
	execute(message, args) {
		randomPanda(message, args);
	},
};
