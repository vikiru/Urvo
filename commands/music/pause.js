const { MessageEmbed } = require('discord.js');
const { entersState, AudioPlayerStatus } = require('@discordjs/voice');

// Pauses the current song in the queue
async function pauseQueue(message, args) {
	const guild = message.guild;
	const serverQ = queue.get(guild.id);

	// There are no songs in the queue
	if (typeof serverQ === 'undefined') {
		const emptyQueue = new MessageEmbed().setColor('#EFFF00').setDescription('**The queue is currently empty!**');
		message.channel.send({ embeds: [emptyQueue] });
		return;
	}

	// Songs exist in queue
	else {
		serverQ.player.pause();
		await entersState(serverQ.player, AudioPlayerStatus.Idle, 5e3);
		console.log('Song has been paused!');
	}
}

module.exports = {
	pauseQueue: pauseQueue,
	name: 'pause',
	guildOnly: true,
	permissions: ['CONNECT', 'SPEAK'],
	execute(message, args) {
		pauseQueue(message, args);
	},
};
