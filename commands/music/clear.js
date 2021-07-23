const { MessageEmbed } = require('discord.js');

function clearQueue(message, guild) {
	const serverQ = queue.get(guild.id);

	if (typeof serverQ === 'undefined') {
		const emptyQueue = new MessageEmbed().setColor('#EFFF00').setDescription('**The queue is currently empty!**');
		message.channel.send(emptyQueue);
	} else {
		serverQ.connection.dispatcher.pause();

		for (song of serverQ.songs) {
			serverQ.songs.pop();
		}

		const clearedQueue = new MessageEmbed().setColor('#EFFF00').setDescription('**The queue has been cleared!**');
		message.channel.send(clearedQueue);
	}
}

module.exports = {
	clearQueue: clearQueue,
	name: 'clear',
	guildOnly: true,
	execute(message, args) {
		clearQueue(message, message.guild);
	},
};
