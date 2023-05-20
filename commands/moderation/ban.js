const {
	SlashCommandBuilder,
	PermissionFlagsBits,
	ButtonStyle,
	ActionRowBuilder,
	ButtonBuilder,
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans the mentioned user from the server')
		.addUserOption((option) =>
			option.setName('user').setDescription('The user to ban from the server').setRequired(true),
		)
		.addStringOption((option) =>
			option.setName('reason').setDescription('The reason to ban the user from the server').setRequired(false),
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	guildOnly: true,
	/**
	 * Allows a user with the right permissions to ban a user from the server permanently.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const targetUser = interaction.options.getUser('user');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';

		const confirmBan = new ButtonBuilder().setCustomId('confirm').setLabel('Confirm').setStyle(ButtonStyle.Danger);
		const cancelBan = new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Secondary);
		const row = new ActionRowBuilder().addComponents(cancelBan, confirmBan);

		const response = await interaction.reply({
			content: `Are you sure you want to ban <@${targetUser.id}> from the server?`,
			components: [row],
		});
		const filter = (i) => i.user.id === interaction.user.id;
		try {
			const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
			const confirmId = confirmation.customId;
			if (confirmId === 'confirm') {
				await interaction.guild.bans.create(targetUser.id);
				await interaction.editReply({
					content: `Successfully banned <@${targetUser.id}> for ${reason}. As requested by <@${interaction.user.id}>`,
					components: [],
				});
			} else if (confirmId === 'cancel') {
				await confirmation.update({
					content: `Aborting command execution for banning of <@${targetUser.id}>`,
					components: [],
				});
			}
		} catch (error) {
			await interaction.editReply({
				content: `Confirmation to ban <@${targetUser.id}> was not received within 1 minute. Aborting command execution.`,
				components: [],
			});
		}
	},
};
