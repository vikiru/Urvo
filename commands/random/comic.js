const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Generate a random number which will be used to fetch a random xkcd comic
 * @returns A random number
 */
async function generateRandom() {
	try {
		const currComic = await fetchData('https://xkcd.com/info.0.json');
		const maxNum = currComic.num;
		const random = Math.floor(Math.random() * maxNum);
		return random;
	} catch (error) {
		console.log(error);
	}
}

/**
 * Create the embed containing all the information about the random comic
 * @param {*} interaction
 * @param {*} randomComic
 * @returns An embed containing all the information about the random comic
 */
function createEmbed(interaction, randomComic) {
	const title = randomComic.safe_title;
	const image = randomComic.img;
	const num = randomComic.num;
	const url = `https://xkcd.com/${num}`;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const comicEmbed = new EmbedBuilder()
		.setTitle(title)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(image)
		.setURL(url)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return comicEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('comic').setDescription('Sends a random xkcd comic in the channel'),
	guildOnly: true,
	/**
	 * Fetch the current xkcd comic and then fetch a random comic and send it into the chat via an embed.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const random = await generateRandom();
		const randomComic = await fetchData(`https://xkcd.com/${random}/info.0.json`);
		const comicEmbed = createEmbed(interaction, randomComic);
		interaction.reply({ embeds: [comicEmbed] });
	},
};
