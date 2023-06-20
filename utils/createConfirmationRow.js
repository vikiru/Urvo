const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

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

module.exports.createConfirmationRow = createConfirmationRow;
