const { MessageEmbed } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Fetch a random koala and send into the chat via an embed
async function randomKoala(message, args) {
	try {
		const { link } = await fetch('https://some-random-api.ml/img/koala').then((response) => response.json());

		const koalaEmbed = new MessageEmbed().setTitle('Random Koala!').setColor('#EFFF00').setImage(link);
		message.channel.send({ embeds: [koalaEmbed] });
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	name: 'koala',
	description: 'Sends the user a random picture of a koala',
	guildOnly: true,
	execute(message, args) {
		randomKoala(message, args);
	},
};
