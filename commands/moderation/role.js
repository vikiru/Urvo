const {
	SlashCommandBuilder,
	PermissionFlagsBits,
	ButtonStyle,
	ActionRowBuilder,
	ButtonBuilder,
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription('Creates a new role based on the inputted name and colour')
		.addStringOption((option) =>
			option.setName('role_name').setDescription('The name of the role to create').setRequired(true),
		)
		.addStringOption((option) =>
			option.setName('colour').setDescription('The colour of the role to create').setRequired(true).addChoices(
				{
					name: 'Aqua',
					value: '#1ABC9C',
				},
				{
					name: 'Black',
					value: '#23272A',
				},
				{
					name: 'Blue',
					value: '#3498DB',
				},
				{
					name: 'Green',
					value: '#57F287',
				},
				{
					name: 'Purple',
					value: '#9B59B6',
				},
				{
					name: 'Orange',
					value: '#E67E22',
				},
				{
					name: 'Red',
					value: '#E74C3C',
				},
				{
					name: 'Yellow',
					value: '#FFFF00',
				},
				{ name: 'White', value: '#FFFFFF' },
			),
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
	guildOnly: true,
	/**
	 * Allows a user with the right permissions to create a role with a specified colour.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const roleName = interaction.options.getString('role_name');
		const colour = interaction.options.getString('colour');

		const confirmCreate = new ButtonBuilder().setCustomId('confirm').setLabel('Confirm').setStyle(ButtonStyle.Danger);
		const cancelCreate = new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Secondary);
		const row = new ActionRowBuilder().addComponents(cancelCreate, confirmCreate);

		const response = await interaction.reply({
			content: `Are you sure you want to create role, ${roleName}?`,
			components: [row],
		});
		const filter = (i) => i.user.id === interaction.user.id;

		try {
			const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
			const confirmId = confirmation.customId;

			if (confirmId === 'confirm') {
				const role = await interaction.guild.roles.create({ name: roleName, color: colour });
				await interaction.editReply({
					content: `Successfully created role, ${role}. As requested by <@${interaction.user.id}>`,
					components: [],
				});
			} else if (confirmId === 'cancel') {
				await confirmation.update({
					content: `Aborting command execution for creating role, ${roleName}`,
					components: [],
				});
			}
		} catch (error) {
			await interaction.editReply({
				content: `An error has occured while executing this command`,
				components: [],
			});
		}
	},
};
