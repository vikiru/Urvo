const { songPlayer } = require('./queue');
const { pauseQueue } = require('./pause');
const { MessageEmbed } = require('discord.js');

// Skips to the next song in the queue
async function nextSong(message, args, guild) {
	const serverQ = queue.get(guild.id);

	// There are no songs in the queue
	if (typeof serverQ === 'undefined') {
		const emptyQueue = new MessageEmbed().setColor('#EFFF00').setDescription('**The queue is currently empty!**');
		serverQ.textChannel.send({ embeds: [emptyQueue] });
	}

	// There is only one song in the queue
	if (serverQ.songs.length === 1) {
		const noNext = new MessageEmbed().setColor('#EFFF00').setDescription('**There is no next song!**');
		serverQ.textChannel.send({ embeds: [noNext] });
	}

	// There is more than one song in the queue
	else if (serverQ.songs.length > 1) {
		pauseQueue(message, args);
		serverQ.subscription.unsubscribe();
		serverQ.playMessage.delete(serverQ.currentEmbed);
		serverQ.songs.shift();
		songPlayer(message, args, serverQ.songs[0]);
	}
}

module.exports = {
	name: 'next',
	aliases: ['n'],
	guildOnly: true,
	execute(message, args) {
		nextSong(message, args, message.guild);
	},
};
