const {
	SlashCommandBuilder,
	PermissionFlagsBits,
	ButtonStyle,
	ActionRowBuilder,
	ButtonBuilder,
} = require('discord.js');

/**
 * Returns the timeout value in milliseconds for a given duration in a specified unit of time.
 * @param {*} duration
 * @param {*} units
 * @returns Timeout duration in milliseconds
 */
function returnTimeVal(duration, units) {
	if (units === 'minutes') {
		return duration * 60 * 1000;
	} else if (units === 'hours') {
		return duration * 60 * 60 * 1000;
	} else if (units === 'days') {
		return duration * 24 * 60 * 60 * 1000;
	}
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('timeout')
		.setDescription('Timeout the mentioned user from the server')
		.addUserOption((option) =>
			option.setName('user').setDescription('The user to timeout from the server').setRequired(true),
		)
		.addNumberOption((option) =>
			option.setName('duration').setDescription('How long the user should be timed out').setRequired(true),
		)
		.addStringOption((option) =>
			option
				.setName('units')
				.setDescription('Specify what unit of time the duration of the timeout is')
				.setRequired(true)
				.addChoices(
					{ name: 'Minutes', value: 'minutes' },
					{ name: 'Hours', value: 'hours' },
					{ name: 'Days', value: 'days' },
				),
		)
		.addStringOption((option) =>
			option.setName('reason').setDescription('The reason to timeout the user from the server').setRequired(false),
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
	guildOnly: true,
	/**
	 * Allows a user with the right permissions to timeout another user from the guild.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const targetUser = interaction.options.getUser('user');
		const duration = interaction.options.getNumber('duration');
		const units = interaction.options.getString('units');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';

		const miliDuration = returnTimeVal(duration, units);

		const confirmTimeout = new ButtonBuilder().setCustomId('confirm').setLabel('Confirm').setStyle(ButtonStyle.Danger);
		const cancelTimeout = new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Secondary);
		const row = new ActionRowBuilder().addComponents(cancelTimeout, confirmTimeout);

		const response = await interaction.reply({
			content: `Are you sure you want to timeout <@${targetUser.id}> from the server?`,
			components: [row],
		});
		const filter = (i) => i.user.id === interaction.user.id;

		try {
			const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
			const confirmId = confirmation.customId;

			if (confirmId === 'confirm') {
				await targetUser.timeout(miliDuration, reason);
				await interaction.editReply({
					content: `Successfully timed out <@${targetUser.id}> for ${reason}. As requested by <@${interaction.user.id}>`,
					components: [],
				});
			} else if (confirmId === 'cancel') {
				await confirmation.update({
					content: `Aborting command execution for timeout of <@${targetUser.id}>`,
					components: [],
				});
			}
		} catch (error) {
			await interaction.editReply({
				content: `Confirmation to timeout <@${targetUser.id}> was not received within 1 minute. Aborting command execution.`,
				components: [],
			});
		}
	},
};
