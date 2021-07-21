const queuePlayer = require('./queueSetup');

module.exports = {
	name: 'resume',
	guildOnly: true,
	permissions: ['CONNECT', 'SPEAK'],
	execute(message, args) {
		queuePlayer.resumeQueue(message, args);
	},
};
