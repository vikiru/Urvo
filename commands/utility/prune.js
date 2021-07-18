module.exports = {
  name: 'prune',
  description: 'Deletes a specified number of messages in the given channel',
  guildOnly: true,
  execute(message, args) {
    if (args < 2 || args > 100)
      message.reply(
        '\nSorry, you entered an invalid number of messages to delete.\n The range of messages that can be deleted is 2 - 100'
      );
    else message.channel.bulkDelete(args[0]);
  }
};
