const {
	SlashCommandBuilder,
	PermissionFlagsBits,
	ButtonStyle,
	ActionRowBuilder,
	ButtonBuilder,
} = require('discord.js');
const ms = require('ms');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('timeout')
		.setDescription('Timeout the mentioned user from the server')
		.addUserOption((option) =>
			option.setName('user').setDescription('The user to timeout from the server').setRequired(true),
		)
		.addNumberOption((option) =>
			option
				.setName('duration')
				.setDescription('How long the user should be timed out')
				.setRequired(true)
				.addChoices(
					{ name: '60 Seconds', value: 60_000 },
					{ name: '5 Minutes', value: 300_000 },
					{ name: '10 Minutes', value: 600_000 },
					{ name: '1 Hour', value: 3_600_000 },
					{ name: '1 Day', value: 86_400_000 },
					{ name: '1 Week', value: 604_800_000 },
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
		const targetUser = interaction.options.getMember('user');
		const duration = interaction.options.getNumber('duration');
		const durationString = ms(duration, { long: true });
		const reason = interaction.options.getString('reason') ?? 'No reason provided';

		const confirmTimeout = new ButtonBuilder().setCustomId('confirm').setLabel('Confirm').setStyle(ButtonStyle.Danger);
		const cancelTimeout = new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Secondary);
		const row = new ActionRowBuilder().addComponents(cancelTimeout, confirmTimeout);

		const response = await interaction.reply({
			content: `Are you sure you want to timeout <@${targetUser.id}> for ${durationString}?`,
			components: [row],
		});
		const filter = (i) => i.user.id === interaction.user.id;

		try {
			const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
			const confirmId = confirmation.customId;

			if (confirmId === 'confirm') {
				await targetUser.timeout(duration, reason);
				await interaction.editReply({
					content: `Successfully timed out <@${targetUser.id}> for reason: ${reason} and duration: ${durationString}. As requested by <@${interaction.user.id}>`,
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
				content: `An error has occured while executing this command`,
				components: [],
				ephemeral: true,
			});
		}
	},
};
