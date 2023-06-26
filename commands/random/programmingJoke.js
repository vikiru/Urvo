const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Create an embed containing information about the random programming joke
 * @param {*} interaction
 * @param {*} randomJoke
 * @returns An embed containing information about the random programming joke
 */
function createEmbed(interaction, randomJoke) {
	const title = '🖥️ Random Programming Joke!';
	const image = 'https://cdn.pixabay.com/photo/2016/06/29/09/29/code-1486361_1280.jpg';

	const joke = randomJoke.joke;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const programmingJokeEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(joke)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(image)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return programmingJokeEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('programming_joke').setDescription('Send a random programming joke'),
	guildOnly: true,
	cooldowns: 10,
	/**
	 * Fetch a random programming joke and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomJoke = await fetchData(
			'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
		);
		const programmingJokeEmbed = createEmbed(interaction, randomJoke);
		interaction.reply({ embeds: [programmingJokeEmbed] });
	},
};
