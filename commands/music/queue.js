const ytdl = require('ytdl-core-discord');
const ytSearch = require('yt-search');
const { MessageEmbed } = require('discord.js');

async function findVideos(query) {
	const videoResults = await ytSearch(query);
	return videoResults.videos.length > 1 ? videoResults.videos[0] : null;
}

async function queueAndPlay(message, args) {
	const guild = message.guild;
	const textChannel = message.channel;
	const voiceChannel = message.member.voice.channel;
	const serverQ = queue.get(guild.id);

	if (!args) {
		queueEmbed(guild);
	}

	const url = args[0];

	let song = {};

	if (ytdl.validateURL(url)) {
		const videoInfo = await ytdl.getInfo(url);
		song = { title: videoInfo.videoDetails.title, url: videoInfo.videoDetails.video_url };
	} else {
		const videoInfo = await findVideos(args.join(' '));
		if (videoInfo != undefined) {
			song = { title: videoInfo.title, url: videoInfo.url };
		} else textChannel.send('Unable to retrieve video');
	}

	if (!serverQ) {
		const queueConstruct = {
			voiceChannel: voiceChannel,
			textChannel: textChannel,
			connection: null,
			songs: [],
			options: { seek: 0, volume: 0.5, type: 'opus', highWatermark: 50 },
		};

		queue.set(guild.id, queueConstruct);
		queueConstruct.songs.push(song);

		try {
			const connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			videoPlayer(guild, queueConstruct.songs[0]);
		} catch (error) {
			queue.delete(guild.id);
			textChannel.send('There was an error trying to join voice channel');
		}
	} else {
		serverQ.songs.push(song);

		const queueEmbed = new MessageEmbed()
			.setTitle('🎶 **Added to Queue** 🎶')
			.setColor('#EFFF00')
			.setDescription('`' + `${song.title}` + '`');
		return textChannel.send(queueEmbed);
	}
}

async function videoPlayer(guild, song) {
	const serverQ = queue.get(guild.id);
	const textChannel = serverQ.textChannel;

	if (!song) {
		serverQ.voiceChannel.leave();
		queue.delete(guild.id);
		const leaveEmbed = new MessageEmbed()
			.setColor('#EFFF00')
			.setDescription('**I left the voice channel because there are no songs left in the queue!**');
		textChannel.send(leaveEmbed);
		return;
	} else {
		const stream = await ytdl(song.url, { filter: 'audioonly' });
		serverQ.connection.play(stream, serverQ.options).on('finish', () => {
			serverQ.songs.shift();
			videoPlayer(guild, serverQ.songs[0]);
		});

		const playingEmbed = new MessageEmbed()
			.setTitle('🎶 **Now Playing** 🎶')
			.setColor('#EFFF00')
			.setDescription('`' + `${song.title}` + '`');
		await serverQ.textChannel.send(playingEmbed);
	}
}

function queueEmbed(message, guild) {
	const serverQ = queue.get(guild.id);

	if (typeof serverQ === `undefined`) {
		const emptyQueue = new MessageEmbed().setColor('#EFFF00').setDescription('**The queue is currently empty!**');
		message.channel.send(emptyQueue);
	} else {
		const data = [];

		var i = 0;

		for (song of serverQ.songs) {
			i++;
			data.push('`' + `${i})` + `\t` + `${song.title}` + '`');
		}

		const queueEmbed = new MessageEmbed()
			.setTitle('Songs in Queue')
			.setColor('#EFFF00')
			.addFields({ name: '\u200b', value: data });

		message.channel.send(queueEmbed);
	}
}

module.exports = {
	videoPlayer: videoPlayer,
	name: 'queue',
	guildOnly: true,
	permissions: ['CONNECT', 'SPEAK'],
	execute(message, args) {
		if (message.content === `${client.prefix}${this.name}`) {
			queueEmbed(message, message.guild);
		} else {
			queueAndPlay(message, args);
		}
	},
};
