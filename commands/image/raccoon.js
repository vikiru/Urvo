const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Create an embed containing information about the random raccoon
 * @param {*} interaction
 * @param {*} randomRaccoon
 * @returns An embed containing information about the random raccoon
 */
function createEmbed(interaction, randomRaccoon) {
	const title = '🦝 Random Raccoon!';
	const description = quote(randomRaccoon.fact);
	const image = randomRaccoon.image;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const raccoonEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(image)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return raccoonEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('raccoon').setDescription('Send a random image of a raccoon'),
	guildOnly: true,
	/**
	 * Fetch a random raccoon and send into the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomRaccoon = await fetchData('https://some-random-api.com/animal/raccoon');
		const raccoonEmbed = createEmbed(interaction, randomRaccoon);
		interaction.reply({ embeds: [raccoonEmbed] });
	},
};
