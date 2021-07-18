module.exports = {
  name: 'delete-channel',
  description: 'Deletes a mentioned channel',
  args: true,
  usage: '<name>',
  permissions: 'MANAGE_CHANNELS',
  guildOnly: true,
  execute(message, args) {
    message.mentions.channels.first().delete();
  }
};
