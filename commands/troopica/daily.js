const { SlashCommandBuilder, bold, inlineCode } = require('discord.js');
const User = require('../../models/Users');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('daily')
		.setDescription('Retrieve your daily supplement of currency and troops'),
	guildOnly: true,
	cooldown: 86400000,
	async execute(interaction) {
		const id = interaction.user.id;
		const currencyAddition = 1000;
		const troopsAddition = 100;
		const user = await User.findOne({ where: { id: id } });
		if (!user) {
			await User.create({ id: id, balance: currencyAddition, troops: troopsAddition });
			interaction.reply(
				`You currently have\n${inlineCode('Balance')}: ${balance} 💰\n${inlineCode('Troops')}: ${troops} ⚔️`,
			);
		} else {
			const currentBalance = user.dataValues.balance;
			const currentTroops = user.dataValues.troops;
			const newBalance = currentBalance + currencyAddition;
			const newTroops = currentTroops + troopsAddition;
			user.update({ balance: newBalance, troops: newTroops });
			interaction.reply(
				`You received\n ${bold(currencyAddition)} 💰\n ${bold(troopsAddition)} ⚔️\n\nYour new balance is:\n${inlineCode(
					'Balance',
				)}: ${newBalance} 💰\n${inlineCode('Troops')}: ${newTroops} ⚔️`,
			);
		}
	},
};
