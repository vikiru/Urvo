const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('calculate')
		.setDescription('Calculate a given mathematical expression')
		.addNumberOption((option) =>
			option.setName('first_number').setDescription('The first number in the expression').setRequired(true),
		)
		.addNumberOption((option) =>
			option.setName('second_number').setDescription('The second number in the expression').setRequired(true),
		)
		.addStringOption((option) =>
			option
				.setName('operation')
				.setDescription('The operation to perform in the expression')
				.setRequired(true)
				.addChoices(
					{ name: 'add', value: '+' },
					{ name: 'subtract', value: '-' },
					{ name: 'multiply', value: 'x' },
					{ name: 'divide', value: '/' },
				),
		),

	guildOnly: true,
	/**
	 * Allows for simple mathematical expression calculations
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const firstNum = interaction.options.getNumber('first_number');
		const secondNum = interaction.options.getNumber('second_number');
		const operation = interaction.options.getString('operation');

		let result = 'undefined';

		switch (operation) {
			case '+':
				result = firstNum + secondNum;
				break;
			case '-':
				result = firstNum - secondNum;
				break;
			case '*':
				result = firstNum * secondNum;
				break;
			case '/':
				result = firstNum / secondNum;
				break;
		}

		interaction.reply(`The result of ${firstNum} ${operation} ${secondNum} = ${result}`);
	},
};
