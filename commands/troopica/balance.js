const { SlashCommandBuilder, inlineCode } = require('discord.js');
const User = require('../../models/Users');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('balance')
		.setDescription('Retrieve your balance, including how many troops you posess'),
	guildOnly: true,
	async execute(interaction) {
		const id = interaction.user.id;
		const user = await User.findOne({ where: { id: id } });
		let balance = 0;
		let troops = 0;
		if (!user) {
			const newUser = await User.create({ id: id });
		} else {
			balance = user.dataValues.balance;
			troops = user.dataValues.troops;
		}
		interaction.reply(
			`You currently have\n${inlineCode('Balance')}: ${balance} 💰\n${inlineCode('Troops')}: ${troops} ⚔️`,
		);
	},
};
