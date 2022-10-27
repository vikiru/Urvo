const ytdl = require('ytdl-core-discord');
const { MessageEmbed } = require('discord.js');

async function getLyrics(message, guild) {
	const serverQ = queue.get(guild.id);
	const currSong = serverQ.songs[0];
	const url = currSong.url;
	const videoInfo = await ytdl.getInfo(url);

	console.log(videoInfo.videoDetails);

	const lyricEmbed = new MessageEmbed()
		.setTitle(`Lyrics for ${currSong.title}`)
		.setColor(`EFFF00`)
		.addFields({ name: '\u200b', value: videoInfo.getLyrics() });
	message.channel.send(lyricEmbed);
}

module.exports = {
	name: 'lyrics',
	guildOnly: true,
	execute(message, args) {
		getLyrics(message, message.guild);
	},
};
