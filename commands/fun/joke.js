const { MessageEmbed } = require('discord.js');

// Fetch a random joke and send into the chat via an embed
async function randomJoke(message, args) {
	try {
		const jokes = await fetch('https://official-joke-api.appspot.com/jokes/ten').then((response) => response.json());

		const embed = new MessageEmbed()
			.setTitle('Random Joke!')
			.setColor('#EFFF00')
			.setThumbnail('https://logos.textgiraffe.com/logos/logo-name/Joke-designstyle-summer-m.png')
			.addFields({ name: 'Setup', value: jokes[0].setup }, { name: 'Punchline', value: jokes[0].punchline });

		message.channel.send(embed);
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	name: 'joke',
	description: 'Tells the user a random joke',
	guildOnly: true,
	execute(message, args) {
		randomJoke(message, args);
	},
};
