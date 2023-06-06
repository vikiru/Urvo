const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Create an embed containing information about the random pun
 * @param {*} interaction
 * @param {*} randomPun
 * @returns An embed containing information about the random pun
 */
function createEmbed(interaction, randomPun) {
	const title = 'Random Pun!';
	const image = 'https://cdn.pixabay.com/photo/2016/10/26/16/39/paddington-1771898_1280.jpg';

	const joke = randomPun.joke;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const punEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(joke)
		.setColor(client.embedColour)
		.setTimestamp(image)
		.setImage()
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return punEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('pun').setDescription('Send a random pun'),
	guildOnly: true,
	/**
	 * Fetch a random pun and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomPun = await fetchData(
			'https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
		);
		const punEmbed = createEmbed(interaction, randomPun);

		interaction.reply({ embeds: [punEmbed] });
	},
};
