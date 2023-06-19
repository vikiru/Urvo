const {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	SlashCommandBuilder,
	PermissionFlagsBits,
	ChannelType,
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('create_channel')
		.setDescription('Create a new channel of the specified type')
		.addStringOption((option) =>
			option.setName('channel_name').setDescription('The name of the new channel').setRequired(true),
		)
		.addStringOption((option) =>
			option
				.setName('channel_type')
				.setDescription('The type of channel to create')
				.addChoices({ name: 'Text Channel', value: 'text_channel' }, { name: 'Voice Channel', value: 'voice_channel' })
				.setRequired(true),
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
	guildOnly: true,
	/**
	 *
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const channelName = interaction.options.getString('channel_name');
		const channelType = interaction.options.getString('channel_type');

		const confirmCreate = new ButtonBuilder().setCustomId('confirm').setLabel('Confirm').setStyle(ButtonStyle.Danger);
		const cancelCreate = new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Secondary);
		const row = new ActionRowBuilder().addComponents(cancelCreate, confirmCreate);

		const response = await interaction.reply({
			content: `Are you sure you want to create a new ${channelType.replace('_', ' ')} named ${channelName}?`,
			components: [row],
		});
		const filter = (i) => i.user.id === interaction.user.id;

		try {
			const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
			const confirmId = confirmation.customId;

			if (confirmId === 'confirm') {
				if (channelType === 'text_channel') {
					await interaction.guild.channels.create({ name: channelName, type: ChannelType.GuildText });
				} else if (channelType === 'voice_channel') {
					await interaction.guild.channels.create({ name: channelName, type: ChannelType.GuildVoice });
				}
				await interaction.editReply({
					content: `Successfully created new channel. As requested by <@${interaction.user.id}>`,
					components: [],
				});
			} else if (confirmId === 'cancel') {
				await confirmation.update({
					content: 'Aborting command execution for channel creation',
					components: [],
				});
			}
		} catch (error) {
			await interaction.editReply({
				content: 'Confirmation to create channel was not received within 1 minute. Aborting command execution.',
				components: [],
			});
		}
	},
};
