const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

/**
 * Helper function to make the first character of a string uppercase
 * @param {*} str
 * @returns The input string with the first character being uppercase
 */
function properCase(str) {
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

/**
 * Create a map which will allow for easy comparison of moves made in Rock-Paper-Scissors
 * @returns A map which ranks potential moves in Rock-Paper-Scissors for easy determination of outcome
 */
function returnChoicesMap() {
	const rockMap = new Map();
	rockMap.set('scissors', 0);
	rockMap.set('rock', 1);
	rockMap.set('paper', 2);

	const paperMap = new Map();
	paperMap.set('rock', 0);
	paperMap.set('paper', 1);
	paperMap.set('scissors', 2);

	const scissorMap = new Map();
	scissorMap.set('paper', 0);
	scissorMap.set('scissors', 1);
	scissorMap.set('rock', 2);

	const choicesMap = new Map();
	choicesMap.set('rock', rockMap);
	choicesMap.set('paper', paperMap);
	choicesMap.set('scissors', scissorMap);
	return choicesMap;
}

/**
 * Determine the outcome of the Rock-Paper-Scissors match
 * @param {*} playerChoice
 * @param {*} botChoice
 * @returns The outcome as a string
 */
function determineOutcome(playerChoice, botChoice) {
	const choicesMap = returnChoicesMap();
	if (playerChoice === botChoice) {
		return 'Tie';
	} else {
		const playerRank = choicesMap.get(playerChoice).get(playerChoice);
		const botRank = choicesMap.get(playerChoice).get(botChoice);
		return playerRank > botRank ? 'You win!' : 'You lose!';
	}
}

/**
 * Create an embed containing information about the Rock-Paper-Scissors match between a user and the bot
 * @param {*} interaction
 * @param {*} data
 * @returns An embed containing information about the Rock-Paper-Scissors match between a user and the bot
 */
function createEmbed(interaction, data) {
	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();
	const botName = client.user.username;
	const title = `Rock-Paper-Scissors Match between ${username} and ${botName}`;

	const playerChoice = data.playerChoice;
	const botChoice = data.botChoice;
	const outcome = data.outcome;

	const img = 'https://ausm.org.uk/wp-content/uploads/2015/02/rock-paper-scissors-hands.jpg';

	const resultEmbed = new EmbedBuilder()
		.setTitle(title)
		.setColor(client.embedColour)
		.setTimestamp()
		.setThumbnail(img)
		.addFields(
			{
				name: `${username}'s Choice: `,
				value: properCase(playerChoice),
				inline: true,
			},
			{
				name: `${botName}'s Choice: `,
				value: properCase(botChoice),
				inline: true,
			},
			{ name: 'Outcome', value: outcome },
		)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return resultEmbed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rps')
		.setDescription('Play Rock-Paper-Scissors with the bot')
		.addStringOption((option) =>
			option
				.setName('choice')
				.setDescription('The move you would like to play (rock, paper, scissors)')
				.setRequired(true)
				.addChoices(
					{ name: 'Paper', value: 'paper' },
					{
						name: 'Rock',
						value: 'rock',
					},
					{ name: 'Scissors', value: 'scissors' },
				),
		),
	guildOnly: true,
	/**
	 * Allows a user to play Rock-Paper-Scissors with the bot, sends the outcome of the match into the chat via an embed.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const options = ['rock', 'paper', 'scissors'];
		const botChoice = options[Math.floor(Math.random() * options.length)];
		const playerChoice = interaction.options.getString('choice');
		const outcome = determineOutcome(playerChoice, botChoice);
		const data = { playerChoice: playerChoice, botChoice: botChoice, outcome: outcome };
		const resultEmbed = createEmbed(interaction, data);
		interaction.reply({ embeds: [resultEmbed] });
	},
};
