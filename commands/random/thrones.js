const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { fetchData } = require('../../utils/fetchData.js');

/**
 * Fetch info about a random character from Game of Thrones via the Thrones API
 * @returns An object containing the character information
 */
async function getRandomThrone() {
	const thronesData = await fetchData('https://thronesapi.com/api/v2/Characters');
	const maxNum = thronesData.length ?? 53;
	const random = Math.floor(Math.random() * maxNum);
	return thronesData[random];
}

/**
 * Create an embed containing information about the random Game of Thrones character
 * @param {*} interaction
 * @param {*} randomThrone
 * @returns An embed containing information about the random Game of Thrones character
 */
function createEmbed(interaction, randomThrone) {
	const name = randomThrone.fullName;
	const image = randomThrone.imageUrl;
	const title = randomThrone.title;
	const family = randomThrone.family;

	const username = interaction.user.username;
	const avatarURL = interaction.displayAvatarURL();

	const throneEmbed = new EmbedBuilder()
		.setTitle(name)
		.setColor(client.embedColour)
		.setImage(image)
		.setTimestamp()
		.addFields({ name: 'Title', value: title, inline: true }, { name: 'family', value: family, inline: true })
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return throneEmbed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thrones')
		.setDescription('Get information about a random Game of Thrones character'),
	guildOnly: true,
	cooldowns: 10,
	/**
	 * Fetch a random GoT character and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomThrone = await getRandomThrone();
		const throneEmbed = createEmbed(interaction, randomThrone);
		interaction.reply({ embeds: [throneEmbed] });
	},
};
