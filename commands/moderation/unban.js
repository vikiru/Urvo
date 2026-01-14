const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  ButtonStyle,
  ActionRowBuilder,
  ButtonBuilder,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('unban')
    .setDescription('Unban the mentioned user from the server')
    .addUserOption((option) =>
      option.setName('user').setDescription('The user to unban from the server').setRequired(true),
    )
    .addStringOption((option) =>
      option.setName('reason').setDescription('The reason to unban the user from the server').setRequired(false),
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  guildOnly: true,
  /**
   * Allows a user with the right permissions to unban another user from the server.
   * @param {*} interaction
   */
  async execute(interaction) {
    const targetUser = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason') ?? 'No reason provided';

    const confirmUnban = new ButtonBuilder().setCustomId('confirm').setLabel('Confirm').setStyle(ButtonStyle.Danger);
    const cancelUnban = new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Secondary);
    const row = new ActionRowBuilder().addComponents(cancelUnban, confirmUnban);

    const response = await interaction.reply({
      content: `Are you sure you want to unban <@${targetUser.id}> from the server?`,
      components: [row],
    });
    const filter = (i) => i.user.id === interaction.user.id;

    try {
      const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
      const confirmId = confirmation.customId;

      if (confirmId === 'confirm') {
        await interaction.guild.members.unban(targetUser.id);
        await interaction.editReply({
          content: `Successfully unbanned <@${targetUser.id}> for ${reason}. As requested by <@${interaction.user.id}>`,
          components: [],
        });
      } else if (confirmId === 'cancel') {
        await confirmation.update({
          content: `Aborting command execution for unbanning of <@${targetUser.id}>`,
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
