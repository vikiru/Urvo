async function randomWord(message, args) {
	try {
		const { MessageEmbed } = require('discord.js');

		const word = await fetch('https://random-words-api.vercel.app/word').then((response) => response.json());

		wordEmbed = new MessageEmbed()
			.setTitle('Random Word!')
			.setColor('#EFFF00')
			.setThumbnail('https://live.staticflickr.com/1431/739173692_70720e47f5_b.jpg')
			.addFields(
				{ name: 'Word', value: word[0].word, inline: true },
				{ name: 'Pronunciation', value: word[0].pronunciation, inline: true },
				{ name: 'Definition', value: word[0].definition },
			);

		message.channel.send(wordEmbed);
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	name: 'word',
	guildOnly: true,
	execute(message, args) {
		randomWord(message, args);
	},
};
