const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  ButtonStyle,
  ActionRowBuilder,
  ButtonBuilder,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('remove_timeout')
    .setDescription('Remove the timeout on the mentioned user')
    .addUserOption((option) =>
      option.setName('user').setDescription('The user to remove the timeout from').setRequired(true),
    )
    .addStringOption((option) =>
      option.setName('reason').setDescription('The reason to remove the timeout').setRequired(false),
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  guildOnly: true,
  /**
   * Allows a user with the right permissions to remove the timeout existing on another user from the server.
   * @param {*} interaction
   */
  async execute(interaction) {
    const targetUser = interaction.options.getMember('user');
    const reason = interaction.options.getString('reason') ?? 'No reason provided';

    const confirm = new ButtonBuilder().setCustomId('confirm').setLabel('Confirm').setStyle(ButtonStyle.Danger);
    const cancel = new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Secondary);
    const row = new ActionRowBuilder().addComponents(cancel, confirm);

    const response = await interaction.reply({
      content: `Are you sure you want to remove the timeout on <@${targetUser.id}>?`,
      components: [row],
    });
    const filter = (i) => i.user.id === interaction.user.id;

    try {
      const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
      const confirmId = confirmation.customId;

      if (confirmId === 'confirm') {
        await targetUser.timeout(null, reason);
        await interaction.editReply({
          content: `Successfully removed the timeout on <@${targetUser.id}> for reason: ${reason}. As requested by <@${interaction.user.id}>`,
          components: [],
        });
      } else if (confirmId === 'cancel') {
        await confirmation.update({
          content: `Aborting command execution for timeout removal for <@${targetUser.id}>`,
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
