//TODO:
function randomizeQueue(message, args) {
	const guild = message.guild;
	const serverQ = queue.get(guild.id);

	const songsCopy = serverQ.songs;
	const max = songsCopy.length;

	for (song of songsCopy) {
		const index = Math.floor(Math.random() * max) + 1;
		serverQ.songs.splice(index, 0, song);
	}

	console.log(serverQ);

	console.log(serverQ.songs);

	serverQ.connection.play(serverQ.songs[0]);
}

module.exports = {
	name: 'shuffle',
	guildOnly: true,
	execute(message, args) {
		randomizeQueue(message, args);
	},
};
