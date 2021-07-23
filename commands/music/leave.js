const { clearQueue } = require('./clear');

function leaveChannel(message, guild) {
	const serverQ = queue.get(guild.id);
	const voiceChannel = serverQ.voiceChannel;

	if (serverQ.connection != null) {
		clearQueue(message, guild);
		serverQ.voiceChannel.leave();
	}
}

module.exports = {
	name: 'leave',
	guildOnly: true,
	execute(message, args) {
		leaveChannel(message, message.guild);
	},
};
