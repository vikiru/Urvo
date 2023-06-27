const {
	ButtonBuilder,
	ButtonStyle,
	ActionRowBuilder,
	StringSelectMenuBuilder,
	StringSelectMenuOptionBuilder,
} = require('discord.js');

/**
 * Create a confirmation action row with numbers corresponding in ascending order until a given max count
 * @param {*} maxCount
 * @returns An ActionRowBuilder instance containing ButtonBuilders labeled from 1 - max count
 */
function createConfirmationRow(maxCount) {
	const components = [];
	for (let i = 0; i < maxCount; i++) {
		const displayNum = i + 1;
		const button = new ButtonBuilder()
			.setCustomId(i.toString())
			.setLabel(displayNum.toString())
			.setStyle(ButtonStyle.Primary);
		components.push(button);
	}
	const row = new ActionRowBuilder().addComponents(components);
	return row;
}

/**
 * Create a confirmation action row with a select menu populated with numbers in ascending order until a given max count
 * @param {*} maxCount
 * @returns An ActionRowBuilder instance containing a StringSelectMenu filled with StringSelectMenuOptions
 */
function createSelectConfirmRow(maxCount) {
	const options = [];
	const select = new StringSelectMenuBuilder().setCustomId('confirm').setPlaceholder('Please select an entry');
	for (let i = 0; i < maxCount; i++) {
		const displayNum = i + 1;
		const option = new StringSelectMenuOptionBuilder().setLabel(displayNum.toString()).setValue(i.toString());
		options.push(option);
	}
	select.addOptions(options);
	const row = new ActionRowBuilder().addComponents(select);
	return row;
}

module.exports = { createConfirmationRow: createConfirmationRow, createSelectConfirmRow: createSelectConfirmRow };
