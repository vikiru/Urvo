const { MessageEmbed } = require('discord.js');

function coinFlip(message, args) {
	const options = ['heads', 'tails'];

	const filter = (response) => {
		return options.some((o) => o.toLowerCase() === response.content.toLowerCase());
	};

	message.channel.send("Choose an option: 'heads' or 'tails'");
	message.channel.awaitMessages(filter, { max: 1, time: 30000 }).then((response) => {
		const outcome = options[Math.floor(Math.random() * options.length)];

		var result = '';
		if (response.first().content === outcome) {
			var result = 'You win!';
		} else {
			var result = 'You lose!';
		}

		const flipEmbed = new MessageEmbed()
			.setTitle('Coin Flip!')
			.setColor('#EFFF00')
			.setThumbnail('https://karenstrunks.com/wp-content/uploads/2014/06/HEADS-TAILS.jpg')
			.addFields(
				{ name: `${message.author.username}'s Choice:`, value: response.first().content, inline: true },
				{ name: 'Result:', value: outcome, inline: true },
				{ name: '\u200b', value: result },
			)
			.setTimestamp();

		message.channel.send(flipEmbed);
	});
}

module.exports = {
	name: 'flip',
	guildOnly: true,
	execute(message, args) {
		coinFlip(message, args);
	},
};
