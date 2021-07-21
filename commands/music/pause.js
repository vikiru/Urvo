const queuePlayer = require('./queueSetup');

module.exports = {
	name: 'pause',
	guildOnly: true,
	permissions: ['CONNECT', 'SPEAK'],
	execute(message, args) {
		queuePlayer.pauseQueue(message, args);
	},
};
