const { MessageEmbed } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function getComic(message, args) {
	const currComic = await fetch('https://xkcd.com/info.0.json').then((response) => response.json());
	const maxNum = currComic.num;

	const random = Math.floor(Math.random() * maxNum);

	const retrievedComic = await fetch(`https://xkcd.com/${random}/info.0.json`).then((response) => response.json());

	const comicEmbed = new MessageEmbed()
		.setTitle(`Random Comic : ${retrievedComic.safe_title} `)
		.setColor('#EFFF00')
		.setImage(retrievedComic.img);

	message.channel.send({ embeds: [comicEmbed] });
}

module.exports = {
	name: 'comic',
	guildOnly: true,
	description: 'Sends a random xkcd comic in the channel',
	execute(message, args) {
		getComic(message, args);
	},
};
