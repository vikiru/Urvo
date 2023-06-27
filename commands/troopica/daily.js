const { SlashCommandBuilder, bold, inlineCode } = require('discord.js');
const User = require('../../models/Users');
const { handleUser } = require('../../utils/handleUser');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('daily')
		.setDescription('Retrieve your daily supplement of currency and troops'),
	guildOnly: true,
	cooldown: 86400,
	/**
	 * Allows the user to receive their daily supplement of currency and troops within Troopica.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const id = interaction.user.id;
		const currencyAddition = 1000;
		const troopsAddition = 100;
		const user = await handleUser(id);

		const currentBalance = user.dataValues.balance;
		const currentTroops = user.dataValues.troops;
		const newBalance = currentBalance + currencyAddition;
		const newTroops = currentTroops + troopsAddition;
		await user.update({ balance: newBalance, troops: newTroops });
		interaction.reply(
			`You received\n ${bold(currencyAddition)} 💰\n ${bold(troopsAddition)} ⚔️\n\nYour new balance is:\n${inlineCode(
				'Balance',
			)}: ${newBalance} 💰\n${inlineCode('Troops')}: ${newTroops} ⚔️`,
		);
	},
};
