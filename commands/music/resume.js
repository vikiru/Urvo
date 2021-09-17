// Resumes playing of the current song in the queue
async function resumeQueue(message, args) {
	const guild = message.guild;
	const serverQ = queue.get(guild.id);

	if (serverQ.songs.length > 0 && serverQ.connection != null) {
		serverQ.player.unpause();
	}
}

module.exports = {
	name: 'resume',
	guildOnly: true,
	permissions: ['CONNECT', 'SPEAK'],
	execute(message, args) {
		resumeQueue(message, args);
	},
};
