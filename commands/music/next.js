const { videoPlayer } = require('./queue');

function nextSong(message, guild) {
	const serverQ = queue.get(guild.id);

	if (typeof serverQ === 'undefined') {
		const emptyQueue = new MessageEmbed().setColor('#EFFF00').setDescription('**The queue is currently empty!**');
		message.channel.send(emptyQueue);
	}
	if (serverQ.songs.length === 1) {
		const noNext = new MessageEmbed().setColor('#EFFF00').setDescription('**There is no next song!**');
		message.channel.send(noNext);
	} else if (serverQ.songs.length > 1) {
		serverQ.songs.shift();
		videoPlayer(guild, serverQ.songs[0]);
	}
}

module.exports = {
	name: 'next',
	guildOnly: true,
	execute(message, args) {
		nextSong(message, message.guild);
	},
};
