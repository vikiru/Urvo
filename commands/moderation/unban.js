const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('unban').setDescription('Unbans the mentioned user from the server'),
	guildOnly: true,
	execute(message, args) {
		const user = message.mentions.users.first();
		message.guild.unban(user);
	},
};
