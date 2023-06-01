const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('joke').setDescription('Receive a random joke'),
	guildOnly: true,
	/**
	 * Fetch a random joke and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomJoke = await fetch('https://official-joke-api.appspot.com/jokes/random').then((response) =>
			response.json(),
		);

		const text = randomJoke.setup + '\n' + randomJoke.punchline;

		const jokeEmbed = new EmbedBuilder()
			.setTitle('Random Joke')
			.setColor('#b35843')
			.setTimestamp()
			.setThumbnail('https://logos.textgiraffe.com/logos/logo-name/Joke-designstyle-summer-m.png')
			.setDescription(text)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [jokeEmbed] });
	},
};
