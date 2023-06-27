const { SlashCommandBuilder, inlineCode, bold } = require('discord.js');
const User = require('../../models/Users');
const { handleUser } = require('../../utils/handleUser');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('purchase')
		.setDescription('Purchase troops to add to your army')
		.addNumberOption((option) =>
			option.setName('amount').setDescription('The number of troops to purchase').setRequired(true),
		),
	guildOnly: true,
	cooldown: 10,
	/**
	 * Allows a user to purchase troops to add to their army within Troopica.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const id = interaction.user.id;
		const amount = interaction.options.getNumber('amount');
		const user = await handleUser(id);
		const balance = user.dataValues.balance;
		const troops = user.dataValues.troops;
		if (balance >= amount) {
			const newBalance = balance - amount;
			const newTroops = troops + amount;
			await user.update({ balance: newBalance, troops: newTroops });
			interaction.reply(
				`You have successfully purchased ${amount} troops. Your new balance is:\n\n${inlineCode(
					'Balance',
				)}: ${newBalance} 💰 (🔽 ${bold(amount.toString())})\n${inlineCode('Troops')}: ${newTroops} ⚔️ (🔼 ${bold(
					amount.toString(),
				)})`,
			);
		} else {
			interaction.reply('Sorry, you do not have enough currency to purchase this number of troops');
		}
	},
};
