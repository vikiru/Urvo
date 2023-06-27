const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, bold, inlineCode } = require('discord.js');
const User = require('../../models/Users');
const { handleUser } = require('../../utils/handleUser');

/**
 * Conduct a battle between an attacker and a defender, return a string representing the outcome
 * @param {*} interaction
 * @param {*} attacker
 * @param {*} defender
 * @returns A string representing the outcome of the battle
 */
async function handleBattle(interaction, attacker, defender) {
	const defenderId = defender.dataValues.id;
	const attackerCurrency = attacker.dataValues.balance;
	const attackerTroops = attacker.dataValues.troops;
	const defenderCurrency = defender.dataValues.balance;
	const defenderTroops = defender.dataValues.troops;

	if (attackerTroops == 0 || defenderTroops == 0) {
		interaction.reply('Sorry, this battle cannot occur as one of the users has 0 troops');
	}

	const totalTroops = attackerTroops + defenderTroops;
	const winnerTroopLoss = 0.1;
	const winnerCurrencyGain = 500;
	const loserTroopLoss = 0.2;
	const attackerOdds = (attackerTroops / totalTroops).toFixed(2) * 100;
	const randNum = Math.floor(Math.random() * 100) + 1;

	let outcome = '';

	if (randNum <= attackerOdds) {
		const troopLossWinner = Math.round(attackerTroops * winnerTroopLoss);
		const troopLossLoser = Math.round(defenderTroops * loserTroopLoss);
		let attackerNewTroops = Math.round(attackerTroops - troopLossWinner);
		let defenderNewTroops = Math.round(defenderTroops - troopLossLoser);
		attackerNewTroops = attackerNewTroops < 0 ? 0 : attackerNewTroops;
		defenderNewTroops = defenderNewTroops < 0 ? 0 : defenderNewTroops;
		const attackerNewCurrency = attackerCurrency + winnerCurrencyGain;
		await attacker.update({ balance: attackerNewCurrency, troops: attackerNewTroops });
		await defender.update({ troops: defenderNewTroops });
		const title = bold(`You have successfully defeated: <@${defenderId}>`) + `\n\n`;
		const newTroopWinner =
			inlineCode('Your new troops') + `: ${bold(attackerNewTroops)} (🔽 ${bold(troopLossWinner)})` + '\n';
		const newBalWinner =
			inlineCode('Your new balance') + `: ${bold(attackerNewCurrency)} (🔼 ${bold(winnerCurrencyGain)})` + '\n\n';
		const newTroopLoser =
			inlineCode('Their new troops') + ': ' + bold(defenderNewTroops) + ` (🔽 ${bold(troopLossLoser)})` + '\n';
		const newBalLoser = inlineCode('Their new balance') + `: ${bold('0')} (🔼 ${bold('0')})` + '\n\n';
		outcome = title + newTroopWinner + newBalWinner + newTroopLoser + newBalLoser;
	} else {
		const troopLossWinner = Math.round(defenderTroops * winnerTroopLoss);
		const troopLossLoser = Math.round(attackerTroops * loserTroopLoss);
		let attackerNewTroops = Math.round(attackerTroops - troopLossLoser);
		let defenderNewTroops = Math.round(defenderTroops - troopLossWinner);
		attackerNewTroops = attackerNewTroops < 0 ? 0 : attackerNewTroops;
		defenderNewTroops = defenderNewTroops < 0 ? 0 : defenderNewTroops;
		const defenderNewCurrency = defenderCurrency + winnerCurrencyGain;
		await attacker.update({ troops: attackerNewTroops });
		await defender.update({ balance: defenderNewCurrency, troops: defenderNewTroops });
		const title = bold(`You have been defeated by: <@${defenderId}>`) + `\n\n`;
		const newTroopLoser =
			inlineCode('Your new troops') + `: ${bold(attackerNewTroops)} (🔽 ${bold(troopLossLoser)})` + '\n';
		const newBalLoser = inlineCode('Your new balance') + `: ${bold('0')} (🔼 ${bold('0')})` + '\n\n';
		const newTroopWinner =
			inlineCode('Their new troops') + `: ${bold(defenderNewTroops)} (🔽 ${bold(troopLossWinner)})` + '\n';
		const newBalWinner =
			inlineCode('Their new balance') + `: ${bold(defenderNewCurrency)} (🔼 ${bold(winnerCurrencyGain)})` + '\n\n';
		outcome = title + newTroopLoser + newBalLoser + newTroopWinner + newBalWinner;
	}
	return outcome;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('attack')
		.setDescription('Deploy your troops against another user, may the odds be in your favor')
		.addUserOption((option) => option.setName('user').setDescription('The user you wish to attack').setRequired(true)),
	guildOnly: true,
	cooldown: 600,
	/**
	 * Allows a user to attack another user with their troops within Troopica.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const attackingUser = interaction.user;
		const targetUser = interaction.options.getUser('user');
		if (attackingUser.id === targetUser.id) {
			return interaction.reply({ content: 'You cannot attack yourself!', ephemeral: true });
		} else {
			const attackerId = attackingUser.id;
			const defenderId = targetUser.id;
			const attacker = await handleUser(attackerId);
			const defender = await handleUser(defenderId);

			const attackerTroops = attacker.dataValues.troops;
			const defenderTroops = defender.dataValues.troops;
			const totalTroops = attackerTroops + defenderTroops;
			const winTroopLoss = Math.round(attackerTroops * 0.1);
			const loseTroopLoss = Math.round(attackerTroops * 0.2);
			const winnerEarnings = '500 💰';
			const attackerOdds = (attackerTroops / totalTroops).toFixed(2) * 100;

			const confirm = new ButtonBuilder().setCustomId('confirm').setLabel('Confirm').setStyle(ButtonStyle.Danger);
			const cancel = new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Secondary);
			const row = new ActionRowBuilder().addComponents(cancel, confirm);
			const response = await interaction.reply({
				content:
					bold(`Are you sure you want to attack <@${targetUser.id}>?`) +
					`\n\n` +
					inlineCode('Your troops') +
					`: ${bold(attackerTroops)} ⚔️\n` +
					inlineCode('Their troops:') +
					`: ${bold(defenderTroops)} ⚔️\n\n` +
					inlineCode('Your odds of winning') +
					`: ${bold(attackerOdds)}%\n` +
					inlineCode('Your potential earnings') +
					`: ${bold(winnerEarnings)}\n` +
					inlineCode('Your estimated troop loss (WIN)') +
					`: ${bold(winTroopLoss)} ⚔️\n` +
					inlineCode('Your estimated troop loss (LOSS)') +
					`: ${bold(loseTroopLoss)} ⚔️`,
				components: [row],
			});
			const filter = (i) => i.user.id === interaction.user.id;
			try {
				const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
				const confirmId = confirmation.customId;
				if (confirmId === 'confirm') {
					const outcome = await handleBattle(interaction, attacker, defender);
					await interaction.editReply({
						content: outcome,
						components: [],
					});
				} else if (confirmId === 'cancel') {
					await confirmation.update({
						content: `Aborting command execution for attacking <@${targetUser.id}>`,
						components: [],
					});
				}
			} catch (error) {
				console.error(error);
				await interaction.editReply({
					content: `Confirmation to attack <@${targetUser.id}> was not received within 1 minute. Aborting command execution.`,
					components: [],
				});
			}
		}
	},
};
