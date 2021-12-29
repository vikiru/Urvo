const { prefix } = require('../config.json');

module.exports = {
	name: 'messageCreate',
	execute(message) {
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		command =
			client.commands.get(commandName) ||
			client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

		// Handling commands

		if (message.author.bot === true || !message.content.startsWith(prefix)) return;

		if (command != undefined && command.args && !args.length) {
			let reply = `You didn't provide any arguments, ${message.author}`;
			if (command.usage) {
				reply += `\nThe proper way to use the command is:\ ${prefix}${command.name} ${command.usage}`;
			}
			return message.channel.send(reply);
		}

		if (command) {
			try {
				//message.channel.startTyping();
				command.execute(message, args);
				//message.channel.stopTyping();
			} catch (error) {
				console.log(error);
				message.reply('There was an error executing the command.');
				//message.channel.stopTyping();
			}
		} else {
			message.reply('That command does not exist!');
			return;
		}
	},
};
