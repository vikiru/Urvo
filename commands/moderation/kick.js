const {
	SlashCommandBuilder,
	PermissionFlagsBits,
	ButtonStyle,
	ActionRowBuilder,
	ButtonBuilder,
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kicks the mentioned user from the server')
		.addUserOption((option) =>
			option.setName('user').setDescription('The user to kick from the server').setRequired(true),
		)
		.addStringOption((option) =>
			option.setName('reason').setDescription('The reason to kick the user from the server').setRequired(false),
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
	guildOnly: true,
	/**
	 * Allows a user with the right permissions to kick another user from the guild.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const targetUser = interaction.options.getUser('user');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';

		const confirmKick = new ButtonBuilder().setCustomId('confirm').setLabel('Confirm').setStyle(ButtonStyle.Danger);
		const cancelKick = new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Secondary);
		const row = new ActionRowBuilder().addComponents(cancelKick, confirmKick);

		const response = await interaction.reply({
			content: `Are you sure you want to kick <@${targetUser.id}> from the server?`,
			components: [row],
		});
		const filter = (i) => i.user.id === interaction.user.id;

		try {
			const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
			const confirmId = confirmation.customId;

			if (confirmId === 'confirm') {
				await interaction.guild.members.kick(targetUser.id);
				await interaction.editReply({
					content: `Successfully kicked <@${targetUser.id}> for ${reason}. As requested by <@${interaction.user.id}>`,
					components: [],
				});
			} else if (confirmId === 'cancel') {
				await confirmation.update({
					content: `Aborting command execution for kicking of <@${targetUser.id}>`,
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
