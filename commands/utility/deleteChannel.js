const {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	SlashCommandBuilder,
	PermissionFlagsBits,
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('delete_channel')
		.setDescription('Deletes a mentioned channel')
		.addChannelOption((option) => option.setName('channel').setDescription('The channel to delete').setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
	guildOnly: true,
	/**
	 * Allows a user with the right permissions to delete a channel.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const channel = interaction.options.getChannel('channel');
		const channelName = channel.name;

		const confirmDelete = new ButtonBuilder().setCustomId('confirm').setLabel('Confirm').setStyle(ButtonStyle.Danger);
		const cancelDelete = new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Secondary);
		const row = new ActionRowBuilder().addComponents(cancelDelete, confirmDelete);

		const response = await interaction.reply({
			content: `Are you sure you want to delete ${channel} from the server?`,
			components: [row],
		});
		const filter = (i) => i.user.id === interaction.user.id;

		try {
			const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
			const confirmId = confirmation.customId;

			if (confirmId === 'confirm') {
				await channel.delete();
				await response.delete();
				await interaction.channel.send({
					content: `Successfully deleted #${channelName}. As requested by <@${interaction.user.id}>`,
					components: [],
				});
			} else if (confirmId === 'cancel') {
				await confirmation.update({
					content: `Aborting command execution for deleting ${channel}`,
					components: [],
				});
			}
		} catch (error) {
			await interaction.editReply({
				content: `Confirmation to delete ${channel} was not received within 1 minute. Aborting command execution.`,
				components: [],
			});
		}
	},
};
