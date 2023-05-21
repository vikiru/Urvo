const {
	SlashCommandBuilder,
	ButtonBuilder,
	ButtonStyle,
	ActionRowBuilder,
	PermissionFlagsBits,
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prune')
		.setDescription('Deletes a specified number of messages in the given channel')
		.addIntegerOption((option) =>
			option
				.setName('amount')
				.setDescription('The number of messages to delete')
				.setMinValue(1)
				.setMaxValue(100)
				.setRequired(true),
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
	guildOnly: true,
	/**
	 * Allows a user with the right permissions to delete a specified number of messages from the guild.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const messageCount = interaction.options.getInteger('amount');

		const confirmDelete = new ButtonBuilder()
			.setCustomId('confirm')
			.setLabel('Confirm Deletion of Messages')
			.setStyle(ButtonStyle.Danger);
		const cancelDelete = new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Secondary);
		const row = new ActionRowBuilder().addComponents(cancelDelete, confirmDelete);

		const response = await interaction.reply({
			content: `Are you sure you want to delete ${messageCount} messages, from ${interaction.channel}?`,
			components: [row],
		});

		const filter = (i) => i.user.id === interaction.user.id;
		try {
			const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
			const confirmId = confirmation.customId;

			if (confirmId === 'confirm') {
				await response.delete();
				await interaction.channel.bulkDelete(messageCount);
				await interaction.channel.send({
					content: `Successfully deleted ${messageCount} messages. As requested by <@${interaction.user.id}>`,
					components: [],
				});
			} else if (confirmId === 'cancel') {
				await confirmation.update({ content: `Aborting command execution for deletion of messages`, components: [] });
			}
		} catch (error) {
			await interaction.editReply({
				content: 'Confirmation to delete messages was not received within 1 minute. Aborting command execution.',
				components: [],
			});
		}
	},
};
