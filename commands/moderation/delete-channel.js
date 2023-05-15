const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('delete-channel').setDescription('Deletes a mentioned channel'),
	args: true,
	usage: '<name>',
	permissions: 'MANAGE_CHANNELS',
	guildOnly: true,
	execute(message, args) {
		message.mentions.channels.first().delete();
	},
};
