const { MessageEmbed } = require('discord.js');

// Clears all the songs in the queue
function clearQueue(message, guild) {
	const serverQ = queue.get(guild.id);

	// No songs in queue
	if (typeof serverQ === 'undefined') {
		const emptyQueue = new MessageEmbed().setColor('#EFFF00').setDescription('**The queue is currently empty!**');
		message.channel.send({ embeds: [emptyQueue] });
	}

	// Songs exist in queue
	else {
		if (typeof serverQ != undefined && serverQ.connection) {
			serverQ.player.pause();
		}

		for (song of serverQ.songs) {
			serverQ.songs.pop();
		}

		const clearedQueue = new MessageEmbed().setColor('#EFFF00').setDescription('**The queue has been cleared!**');
		message.channel.send({ embeds: [clearedQueue] });
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
