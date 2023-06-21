const { EmbedBuilder, inlineCode, hyperlink } = require('discord.js');

/**
 * Create a results embed with all of the potential anime, manga, manhua or manhwa corresponding to a given search query
 * @param {*} interaction
 * @param {*} indexes
 * @param {*} title
 * @param {*} type
 * @returns An embed with all of the potential anime, manga, manhua or manhwa corresponding to a given search query
 */
function createResultsEmbed(interaction, indexes, title, type) {
	let description = `Please choose a ${type} from the following list of ${inlineCode(
		indexes.length,
	)} ${type}, to see more information regarding it.\n`;

	for (let i = 0; i < indexes.length; i++) {
		const index = indexes[i];
		const indexTitle = index.title;
		const url = index.url;
		const count = i + 1;

		description += `${count}. ${hyperlink(indexTitle, url)}\n`;
	}

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const resultsEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(client.embedColour)
		.setTimestamp()
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return resultsEmbed;
}

module.exports.createResultsEmbed = createResultsEmbed;
