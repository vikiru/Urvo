const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

/**
 * Helper function to make the first character of a string uppercase
 * @param {*} str
 */
function properCase(str) {
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

/**
 * Create an embed containing information about the result of the coin flip
 * @param {*} interaction
 * @param {*} data
 * @returns An embed containing information about the result of the coin flip
 */
function createEmbed(interaction, data) {
	const title = 'Coin Flip!';
	const choice = data.choice;
	const outcome = data.outcome;
	const result = data.result;
	const img = 'https://karenstrunks.com/wp-content/uploads/2014/06/HEADS-TAILS.jpg';

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const resultEmbed = new EmbedBuilder()
		.setTitle(title)
		.setColor(client.embedColour)
		.setTimestamp()
		.setThumbnail(img)
		.addFields(
			{ name: `${username}'s Choice`, value: properCase(choice), inline: true },
			{ name: 'Result', value: properCase(result), inline: true },
			{ name: 'Outcome', value: outcome },
		)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return resultEmbed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flip')
		.setDescription('Flip a coin and guess the outcome')
		.addStringOption((option) =>
			option
				.setName('choice')
				.setDescription('The outcome of the coin flip (heads or tails)')
				.setRequired(true)
				.addChoices(
					{ name: 'Heads', value: 'heads' },
					{
						name: 'Tails',
						value: 'tails',
					},
				),
		),
	guildOnly: true,
	/**
	 * Allows the user to flip a coin and guess the outcome, sending the result of the coin flip into the chat via an embed.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const options = ['heads', 'tails'];
		const result = options[Math.floor(Math.random() * options.length)];
		const choice = interaction.options.getString('choice');
		const outcome = result === choice ? 'You win!' : 'You lose!';
		const data = { choice: choice, result: result, outcome: outcome };
		const resultEmbed = createEmbed(interaction, data);
		interaction.reply({ embeds: [resultEmbed] });
	},
};
