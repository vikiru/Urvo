const { MessageEmbed } = require('discord.js');
async function pauseQueue(message, args) {
	const guild = message.guild;
	const serverQ = queue.get(guild.id);

	if (typeof serverQ === 'undefined') {
		const emptyQueue = new MessageEmbed().setColor('#EFFF00').setDescription('**The queue is currently empty!**');
		message.channel.send(emptyQueue);
		return;
	} else {
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
