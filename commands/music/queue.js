const queuePlayer = require('./queueSetup');

module.exports = {
	name: 'queue',
	guildOnly: true,
	permissions: ['CONNECT', 'SPEAK'],
	execute(message, args) {
		queuePlayer.queueAndPlay(message, args);
	},
};
