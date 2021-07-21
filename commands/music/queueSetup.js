const ytdl = require('ytdl-core-discord');
const ytSearch = require('yt-search');

const queue = new Map();

async function findVideos(query) {
	const videoResults = await ytSearch(query);
	return videoResults.videos.length > 1 ? videoResults.videos[0] : null;
}

async function pauseQueue(message, args) {
	const guild = message.guild;
	const serverQ = queue.get(guild.id);

	if (!serverQ.songs) {
		serverQ.textChannel.send('There are no songs in the queue!');
		return;
	}

	if (serverQ.songs.length != 0) {
		const connection = serverQ.connection;
		const dispatcher = connection.dispatcher;
		dispatcher.pause();
	}
}

async function resumeQueue(message, args) {
	const guild = message.guild;
	const serverQ = queue.get(guild.id);

	if (serverQ.songs.length != 0) {
		const connection = serverQ.connection;
		const dispatcher = connection.dispatcher;

		dispatcher.resume();
	}
}
async function queueAndPlay(message, args) {
	const guild = message.guild;
	const textChannel = message.channel;
	const voiceChannel = message.member.voice.channel;
	const serverQ = queue.get(guild.id);

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
		return textChannel.send('`' + `${song.title}` + '`' + 'added to queue!');
	}
}

async function videoPlayer(guild, song) {
	const serverQ = queue.get(guild.id);

	if (!song) {
		serverQ.voiceChannel.leave();
		queue.delete(guild.id);
		textChannel.send(`${client.user.username} has left the voice channel due to no songs left in the queue`);
		return;
	} else {
		const stream = await ytdl(song.url, { filter: 'audioonly' });
		serverQ.connection.play(stream, serverQ.options).on('finish', () => {
			serverQ.songs.shift();
			videoPlayer(guild, serverQ.songs[0]);
		});

		await serverQ.textChannel.send('🎵' + ' Now playing: ' + '`' + `${song.title}` + '`' + '!' + ' 🎵');
	}
}

module.exports = {
	queueAndPlay: queueAndPlay,
	pauseQueue: pauseQueue,
	resumeQueue: resumeQueue,
};
