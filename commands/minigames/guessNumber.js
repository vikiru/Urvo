const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('guess_number')
		.setDescription('Guess the number that the bot is thinking of (1 - 10)')
		.addNumberOption((option) =>
			option
				.setName('guess')
				.setDescription('Guess the number that the bot is thinking of')
				.addChoices(
					{ name: '1', value: 1 },
					{ name: '2', value: 2 },
					{ name: '3', value: 3 },
					{ name: '4', value: 4 },
					{ name: '5', value: 5 },
					{ name: '6', value: 6 },
					{ name: '7', value: 7 },
					{ name: '8', value: 8 },
					{ name: '9', value: 9 },
					{ name: '10', value: 10 },
				),
		),
	guildOnly: true,
	async execute(interaction) {
		const userGuess = interaction.options.getNumber('guess');
		const randomNumber = Math.floor(Math.random() * 10);

		if (randomNumber === userGuess) {
			interaction.reply('You guessed the number correctly!');
		} else {
			interaction.reply(`Sorry, you didn't guess the number correctly.`);
		}
	},
};
