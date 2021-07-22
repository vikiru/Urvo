async function pauseQueue(message, args) {
	const guild = message.guild;
	const serverQ = queue.get(guild.id);

	if (!serverQ.songs) {
		serverQ.textChannel.send('There are no songs in the queue!');
		return;
	}

	if (serverQ.songs.length != 0) {
		const connection = serverQ.connection;
		const dispatcher = connection.dispatcher;
		dispatcher.pause();
	}
}

module.exports = {
	name: 'pause',
	guildOnly: true,
	permissions: ['CONNECT', 'SPEAK'],
	execute(message, args) {
		pauseQueue(message, args);
	},
};
