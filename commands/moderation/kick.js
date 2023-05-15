const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('kick').setDescription('Kicks the mentioned user from the server'),
	args: true,
	usage: '<user>',
	guildOnly: true,
	permissions: 'KICK_MEMBERS',
	execute(message, args) {
		const user = message.mentions.members.first();
		if (user.id == message.author.id) message.reply(`You can't kick yourself`);
		else user.kick();
	},
};
