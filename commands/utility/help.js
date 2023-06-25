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
	const limit = 28;
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
	const description = `Urvo is a multi-purpose bot with various commands spanning across several categories, please see below for the various commands that can be used. Enjoy!\n\n${inlineCode(
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
		.setDescription('Access a list of help commands relevant to this bot.'),
	guildOnly: true,
	/**
	 * Send an embed with information about all the commands that the bot is able to execute.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const { image, info, meme, minigames, moderation, rand, troopica, utility } = client.commands;

		const imgDesc =
			'Enhance your mood with a random image of an animal from the available options or an image of coffee to boost your energy!';
		const imageStr = quote(imgDesc) + '\n\n' + formatCommands(image);

		const infoDesc =
			'Whether you’re a fan of anime or manga, digimon or disney, or just curious about a term, you’ll find everything you need here!';
		const infoStr = quote(infoDesc) + '\n\n' + formatCommands(info);

		const memeDesc = 'Generate memes to enjoy with your friends, using easy prompts!';
		const memeStr = quote(memeDesc) + '\n\n' + formatCommands(meme);

		const miniDesc = 'The cure for boredom. Beat the bot and have a blast!';
		const miniStr = quote(miniDesc) + '\n\n' + formatCommands(minigames);

		const modDesc = 'Use these commands to manage the server effectively and efficiently!';
		const modStr = quote(modDesc) + '\n\n' + formatCommands(moderation);

		const randDesc =
			'An assortment of commands that provide you with random pieces of information such as motivating you with a quote or making you laugh with a joke!';
		const randStr = quote(randDesc) + '\n\n' + formatCommands(rand);

		const troopDesc = 'Rise to the top of your server by amassing wealth and troops!';
		const troopStr = quote(troopDesc) + '\n\n' + formatCommands(troopica);

		const utilDesc = 'Additional commands that can prove useful to yourself or the server!';
		const utilStr = quote(utilDesc) + '\n\n' + formatCommands(utility);

		const fieldData = [
			{ name: '📷 Images', value: imageStr },
			{ name: '❓ Information', value: infoStr },
			{ name: '😂  Memes', value: memeStr },
			{ name: '🕹️ Minigames', value: miniStr },
			{ name: '🛡️ Moderation', value: modStr },
			{ name: '🎲 Random', value: randStr },
			{ name: '⚔️ Troopica', value: troopStr },
			{ name: '🛠️ Utility', value: utilStr },
		];
		const helpEmbed = createEmbed(interaction, fieldData);
		interaction.reply({ embeds: [helpEmbed] });
	},
};
