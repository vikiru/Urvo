const { MessageEmbed, SlashCommandBuilder } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Fetch a random joke and send into the chat via an embed
async function randomJoke(message, args) {
	try {
		// TODO (NEED TO UPDATE API / API ERROR): const jokes = await fetch('https://official-joke-api.appspot.com/jokes/ten').then((response) => response.json());

		const jokeEmbed = new MessageEmbed()
			.setTitle('Random Joke!')
			.setColor('#EFFF00')
			.setThumbnail('https://logos.textgiraffe.com/logos/logo-name/Joke-designstyle-summer-m.png')
			.addFields({ name: 'Setup', value: jokes[0].setup }, { name: 'Punchline', value: jokes[0].punchline });

		message.channel.send({ embeds: [jokeEmbed] });
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	data: new SlashCommandBuilder().setName('joke').setDescription('Receive a random joke'),
	guildOnly: true,
	execute(message, args) {
		randomJoke(message, args);
	},
};
