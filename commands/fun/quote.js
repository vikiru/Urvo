const { MessageEmbed } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Fetch a random quote and send into the chat via an embed
async function randomQuote(message, args) {
	try {
		const quote = await fetch('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json').then(
			(response) => response.json(),
		);

		const quoteEmbed = new MessageEmbed()
			.setTitle('Random Quote!')
			.setColor('#EFFF00')
			.setURL(quote.quoteLink)
			.addFields({ name: 'Quote', value: quote.quoteText }, { name: 'Author', value: quote.quoteAuthor });
    message.channel.send({embeds:[quoteEmbed]});
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	name: 'quote',
	description: 'Sends the user a random quote',
	guildOnly: true,
	execute(message, args) {
		randomQuote(message, args);
	},
};
