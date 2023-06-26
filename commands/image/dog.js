const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Create an embed containing information about a random dog
 * @param {*} interaction
 * @param {*} randomDog
 * @returns An embed containing information about the random dog
 */
function createEmbed(interaction, randomDog) {
	const title = '🐶 Random Dog!';

	const description = quote(randomDog.fact);
	const image = randomDog.image;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const dogEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(image)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return dogEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('dog').setDescription('Send a random image of a dog'),
	guildOnly: true,
	cooldown: 10,
	/**
	 * Fetch a random dog and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomDog = await fetchData('https://some-random-api.com/animal/dog');
		const dogEmbed = createEmbed(interaction, randomDog);
		interaction.reply({ embeds: [dogEmbed] });
	},
};
