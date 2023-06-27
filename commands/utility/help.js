const { EmbedBuilder, SlashCommandBuilder, quote, inlineCode } = require('discord.js');

/**
 * Given all the command data for a category, return a formmatted string to be used in the description of that
 * category's field
 * @param {*} commandData
 * @returns A formmatted string representing all the commands within a category
 */
function formatCommands(commandData) {
	let commandStr = '';
	let lineLength = 0;
	const limit = 60;
	for (const command of commandData) {
		const commandName = command[0];
		const nameLength = commandName.length;
		const totalLength = nameLength + 2;
		if (lineLength + totalLength <= limit) {
			commandStr += inlineCode(commandName) + ', ';
			lineLength += totalLength;
		} else if (lineLength >= limit || lineLength + totalLength >= limit) {
			lineLength = 0;
			commandStr += '\n' + inlineCode(commandName) + ', ';
			lineLength += totalLength;
		}
	}
	commandStr = commandStr.substring(0, commandStr.length - 2);
	return commandStr;
}

/**
 * Create an embed containing information about all the commands that the bot can use
 * @param {*} interaction
 * @param {*} fieldData
 * @returns An embed containing information about all the commands that the bot can use
 */
function createEmbed(interaction, fieldData) {
	const title = 'All Possible Commands!';
	const description = `Urvo is a multi-purpose bot with various commands spanning across several categories, please see below for the various commands that can be used. Enjoy!\n${inlineCode(
		'Total Commands',
	)}: ${client.commands.size}`;
	const img = 'http://www.clker.com/cliparts/P/t/7/o/9/W/help-hi.png';

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const helpEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(client.embedColour)
		.setTimestamp()
		.setThumbnail(img)
		.addFields(fieldData)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return helpEmbed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Access a list of commands that can be used with Urvo'),
	guildOnly: true,
	/**
	 * Send an embed with information about all the commands that the bot is able to execute.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const { image, info, meme, minigames, moderation, rand, troopica, utility } = client.commands;

		const imgDesc =
			'Enhance your mood with a random image of an animal from the available options or an image of coffee to boost your energy!';
		const imageStr = quote(imgDesc) + '\n' + formatCommands(image);

		const infoDesc =
			'Whether you’re a fan of anime or manga, digimon or disney, or just curious about a term, you’ll find everything you need here!';
		const infoStr = quote(infoDesc) + '\n' + formatCommands(info);

		const memeDesc = 'Generate memes to enjoy with your friends, using easy prompts!';
		const memeStr = quote(memeDesc) + '\n' + formatCommands(meme);

		const miniDesc = 'The cure for boredom. Beat the bot and have a blast!';
		const miniStr = quote(miniDesc) + '\n' + formatCommands(minigames);

		const modDesc = 'Use these commands to manage the server effectively and efficiently!';
		const modStr = quote(modDesc) + '\n' + formatCommands(moderation);

		const randDesc =
			'An assortment of commands that provide you with random pieces of information such as motivating you with a quote or making you laugh with a joke!';
		const randStr = quote(randDesc) + '\n' + formatCommands(rand);

		const troopDesc = 'Rise to the top of your server by amassing wealth and troops!';
		const troopStr = quote(troopDesc) + '\n' + formatCommands(troopica);

		const utilDesc = 'Additional commands that can prove useful to yourself or the server!';
		const utilStr = quote(utilDesc) + '\n' + formatCommands(utility);

		const fieldData = [
			{ name: '📷 Images', value: imageStr, inline: false },
			{ name: '❓ Information', value: infoStr, inline: false },
			{ name: '😂  Memes', value: memeStr, inline: false },
			{ name: '🕹️ Minigames', value: miniStr, inline: false },
			{ name: '🛡️ Moderation', value: modStr, inline: false },
			{ name: '🎲 Random', value: randStr, inline: false },
			{ name: '⚔️ Troopica', value: troopStr, inline: false },
			{ name: '🛠️ Utility', value: utilStr, inline: false },
		];
		const helpEmbed = createEmbed(interaction, fieldData);
		interaction.reply({ embeds: [helpEmbed] });
	},
};
