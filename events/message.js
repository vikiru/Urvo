const { prefix } = require('../config.json');

module.exports = {
  name: 'message',
  execute(message) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Handling async commands
    if (client.asyncCommands.get(commandName)) {
      command = client.asyncCommands.get(commandName);
      message.channel.startTyping();
      command.execute(message, args);
      message.channel.stopTyping();
    }

    // Handling non-async commands
    command = client.commands.get(commandName);

    if (message.author.bot === true || !message.content.startsWith(prefix)) return;

    if (command != undefined && command.args && !args.length) {
      let reply = `You didn't provide any arguments, ${message.author}`;
      if (command.usage) {
        reply += `\nThe proper way to use the command is:\ ${prefix}${command.name} ${command.usage}`;
      }
      return message.channel.send(reply);
    }

    if (client.commands.get(commandName)) {
      try {
        message.channel.startTyping();
        command.execute(message, args);
        message.channel.stopTyping();
      } catch (error) {
        console.log(error);
        message.reply('There was an error executing the command.');
        message.channel.stopTyping();
      }
    } else {
      if (!client.asyncCommands.get(commandName)) message.reply('That command does not exist!');
      return;
    }
  }
};
