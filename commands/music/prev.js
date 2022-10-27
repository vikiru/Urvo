//TODO:
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'prev',
	guildOnly: true,
	execute(message, args) {
		const serverQ = queue.get(message.guild.id);
		console.log(serverQ.songs);
	},
};
