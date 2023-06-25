const { SlashCommandBuilder, inlineCode } = require('discord.js');
const User = require('../../models/Users');
const { handleUser } = require('../../utils/handleUser');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('balance')
		.setDescription('Retrieve your balance, including how many troops you posess'),
	guildOnly: true,
	async execute(interaction) {
		const id = interaction.user.id;
		const user = await handleUser(id);
		let balance = 0;
		let troops = 0;
		balance = user.dataValues.balance;
		troops = user.dataValues.troops;
		interaction.reply(
			`You currently have\n${inlineCode('Balance')}: ${balance} 💰\n${inlineCode('Troops')}: ${troops} ⚔️`,
		);
	},
};
