const { MessageEmbed, SlashCommandBuilder } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Fetch a random dog and send into the chat via an embed
async function randomDog(message, args) {
	try {
		const { url } = await fetch('https://random.dog/woof.json').then((response) => response.json());

		const dogEmbed = new MessageEmbed().setTitle('Random Dog!').setColor('#EFFF00').setImage(url);
		message.channel.send({ embeds: [dogEmbed] });
	} catch (error) {
		console.log(error);
	}
}
module.exports = {
	data: new SlashCommandBuilder().setName('dog').setDescription('Send a random image of a dog'),
	guildOnly: true,
	execute(message, args) {
		randomDog(message, args);
	},
};
