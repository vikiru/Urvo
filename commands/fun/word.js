const { MessageEmbed, SlashCommandBuilder } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Fetches a random word, then sends the word along with its definition and pronunciation
// in an embed
async function randomWord(message, args) {
	try {
		const word = await fetch('https://random-words-api.vercel.app/word').then((response) => response.json());

		const wordEmbed = new MessageEmbed()
			.setTitle('Random Word!')
			.setColor('#EFFF00')
			.setThumbnail('https://live.staticflickr.com/1431/739173692_70720e47f5_b.jpg')
			.addFields(
				{ name: 'Word', value: word[0].word, inline: true },
				{ name: 'Pronunciation', value: word[0].pronunciation, inline: true },
				{ name: 'Definition', value: word[0].definition },
			);

		message.channel.send({ embeds: wordEmbed });
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('word')
		.setDescription('Sends a random word along with its definition and pronunciation in the chat'),
	guildOnly: true,
	execute(message, args) {
		randomWord(message, args);
	},
};
