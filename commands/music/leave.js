const { clearQueue } = require('./clear');

// Makes the bot leave the voiceChannel
function leaveChannel(message, guild) {
	const serverQ = queue.get(guild.id);

	// If the bot is connected to a voiceChannel
	if (serverQ.connection != null) {
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
