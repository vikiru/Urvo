const ytdl = require('ytdl-core-discord');
const ytSearch = require('yt-search');
const { MessageEmbed, MessageCollector } = require('discord.js');
const {
	joinVoiceChannel,
	createAudioPlayer,
	createAudioResource,
	entersState,
	StreamType,
	AudioPlayerStatus,
	VoiceConnectionStatus,
	NoSubscriberBehavior,
} = require('@discordjs/voice');

const player = createAudioPlayer({
	behaviors: {
		noSubscriber: NoSubscriberBehavior.Pause,
		maxMissedFrames: Math.round(5000 / 20),
	},
});

player.on(AudioPlayerStatus.Playing, () => {
	console.log('The audio player has started playing!');
});

// Connects the bot to the specified voice channel
async function connectToVoice(voiceChannel) {
	const connection = joinVoiceChannel({
		channelId: voiceChannel.id,
		guildId: voiceChannel.guild.id,
		adapterCreator: voiceChannel.guild.voiceAdapterCreator,
	});

	console.log('The bot has connected to the voice channel!');

	try {
		await entersState(connection, VoiceConnectionStatus.Ready, 5e3);
		return connection;
	} catch (error) {
		connection.destroy;
		console.log(error);
	}
}

// Adds a song to the queue
async function queueSong(message, args) {
	const guild = message.guild;
	const textChannel = message.channel;
	const voiceChannel = message.member.voice.channel;
	var serverQ = queue.get(guild.id);

	if (voiceChannel === null) {
		textChannel.reply('Please join a voice channel!');
	}

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
			song = {
				url: videoInfo.url,
				title: videoInfo.title,
				thumbnail: videoInfo.thumbnail,
				time: videoInfo.timestamp,
				requestedBy: message.author,
			};
		} else {
			textChannel.send('Unable to find any videos for the given query!');
		}
	}
	if (!serverQ) {
		const queueConst = {
			connection: null,
			player: player,
			playingEmbed: null,
			subscription: null,
			songs: [],
			textChannel: textChannel,
			voiceChannel: voiceChannel,
		};

		queue.set(guild.id, queueConst);
		queueConst.songs.push(song);
		serverQ = queue.get(guild.id);
		console.log('Song has been pushed into the queue!');
	} else {
		serverQ.songs.push(song);
		const queueEmbed = new MessageEmbed()
			.setTitle('🎶 **Added to Queue** 🎶')
			.setColor('#EFFF00')
			.setThumbnail(song.thumbnail)
			.setDescription(`[${song.title}](${song.url})`)
			.setTimestamp()
			.setFooter(`Requested by ${song.requestedBy.username}`);
		textChannel.send({ embeds: [queueEmbed] });
	}
	console.log(player);

	if (serverQ.player._state.status === 'idle') songPlayer(message, args, song);
}

// Play the queued song and if there are no songs left in queue, leave the voice channel
async function songPlayer(message, args, song) {
	const serverQ = queue.get(message.guild.id);

	if (!song) {
		const userRequest = await MessageCollector.asyncQuestion({
			botMessage:
				'The bot is waiting for new song requests, if no song is requested within 5 minutes, the bot will leave the voice channel.',
			user: message.author.id,
			collectorOptions: { time: 300000 },
		}).catch(() => {
			serverQ.voiceChannel.leave();
			serverQ.textChannel.send('I have left the voice channel due to inactivity');
		});
		queue.delete(guild.id);
		const leaveEmbed = new MessageEmbed()
			.setColor('#EFFF00')
			.setDescription('**I left the voice channel because there are no songs left in the queue!**');
		textChannel.send({ embeds: [leaveEmbed] });
		return;
	} else {
		const connection = await connectToVoice(serverQ.voiceChannel);
		serverQ.connection = connection;

		const songInfo = await ytdl.getInfo(serverQ.songs[0].url);
		try {
			var stream = await ytdl.downloadFromInfo(songInfo);
			console.log('Song has been downloaded!');
		} catch (error) {
			console.log(error);
		}
		const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary, inlineVolume: true });

		serverQ.player.play(resource);
		await entersState(serverQ.player, AudioPlayerStatus.Playing, 5e3);

		serverQ.subscription = serverQ.connection.subscribe(player);

		//TODO: add buttons to playingEmbed (pause / unpause and also show a progress bar)
		player.on('subscribe', async () => {
			serverQ.playingEmbed = new MessageEmbed()
				.setTitle('🎶 **Now Playing** 🎶')
				.setColor('#EFFF00')
				.setThumbnail(song.thumbnail)
				.setDescription(`[${song.title}](${song.url}) [${song.time}]`)
				.setTimestamp()
				.setFooter(`Requested by ${song.requestedBy.username}`);
			await serverQ.textChannel.send({ embeds: [serverQ.playingEmbed] });
		});

		player.on('end', () => {
			serverQ.songs.shift();
			songPlayer(message, args, serverQ.songs[0]);
		});
	}
}

// Helper function to search for videos based on a query
async function findVideos(query) {
	const videoResults = await ytSearch(query);
	return videoResults.videos.length > 1 ? videoResults.videos[0] : null;
}

//TODO: Format the queueEmbed text display
// Displays the list of songs in the queue as an embed,
// or returns a message saying the queue is empty, if there are no songs
function queueEmbed(message, guild) {
	const serverQ = queue.get(guild.id);

	if (typeof serverQ === `undefined`) {
		const emptyQueue = new MessageEmbed().setColor('#EFFF00').setDescription('**The queue is currently empty!**');
		message.channel.send({ embeds: [emptyQueue] });
	} else {
		const data = [];

		var i = 0;

		for (song of serverQ.songs) {
			i++;
			data.push('`' + `${i})` + `\t` + `${song.title}` + ` [${song.time}] ` + '`');
		}

		const songList = data.toString().replace(',', '\n');

		const queueEmbed = new MessageEmbed()
			.setTitle('Songs in Queue')
			.setColor('#EFFF00')
			.addFields({ name: '\u200B', value: songList });

		message.channel.send({ embeds: [queueEmbed] });
	}
}

module.exports = {
	songPlayer: songPlayer,
	name: 'queue',
	guildOnly: true,
	permissions: ['CONNECT', 'SPEAK'],
	execute(message, args) {
		if (message.content === `${client.prefix}${this.name}`) {
			queueEmbed(message, message.guild);
		} else {
			queueSong(message, args);
		}
	},
};
