const ytdl = require('ytdl-core-discord');
const ytSearch = require('yt-search');
const { SlashCommandBuilder } = require('@discordjs/builders');
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

//TODO: Fix message deletion after timeout, refactor and clean code, better looking embed

// Connects the bot to the specified voice channel
async function connectToVoice(voiceChannel) {
	const connection = joinVoiceChannel({
		channelId: voiceChannel.id,
		guildId: voiceChannel.guild.id,
		adapterCreator: voiceChannel.guild.voiceAdapterCreator,
	});

	try {
		await entersState(connection, VoiceConnectionStatus.Ready, 5e3);
		console.log('The bot has connected to the voice channel!');

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
		console.log(videoInfo.videoDetails.lengthSeconds);

		// TODO: Convert time in seconds to time in minutes
		const timeToMin = videoInfo.videoDetails.lengthSeconds / 60;
		const minutes = Math.trunc(timeToMin);
		const seconds = timeToMin.toString().split('.')[1] * 60;

		song = {
			playingEmbed: [],
			url: videoInfo.videoDetails.video_url,
			thumbnail: videoInfo.videoDetails.thumbnails[0].url,
			time: `${minutes}:${seconds}`,
			title: videoInfo.videoDetails.title,
			requestedBy: message.author,
		};
	} else {
		const videoInfo = await findVideos(args.join(' '));
		if (videoInfo != undefined) {
			song = {
				playingEmbed: [],
				url: videoInfo.url,
				thumbnail: videoInfo.thumbnail,
				time: videoInfo.timestamp,
				title: videoInfo.title,
				requestedBy: message.author,
			};
		} else {
			textChannel.send('Unable to find any videos for the given query!');
		}
	}
	if (!serverQ) {
		const queueConst = {
			connection: null,
			currentEmbed: null,
			playMessage: null,
			player: createAudioPlayer({
				behaviors: {
					noSubscriber: NoSubscriberBehavior.Pause,
					maxMissedFrames: Math.round(5000 / 20),
				},
			}),
			songs: [],
			subscription: null,
			textChannel: textChannel,
			voiceChannel: voiceChannel,
		};

		queue.set(guild.id, queueConst);
		queueConst.songs.push(song);
		serverQ = queue.get(guild.id);
	} else {
		serverQ.songs.push(song);
		const queueEmbed = new MessageEmbed()
			.setTitle('🎶 **Added to Queue** 🎶')
			.setColor('#EFFF00')
			.setThumbnail(song.thumbnail)
			.setDescription(`[${song.title}](${song.url})`)
			.setTimestamp()
			.setFooter(`Requested by ${song.requestedBy.username}`);

		textChannel.send({ embeds: [queueEmbed] }).then((msg) => {
			if (typeof msg != 'undefined') setTimeout(() => msg.delete(queueEmbed), 1000);
		});
	}
	console.log('Song has been pushed into the queue! -' + song.title);
	if (serverQ.player._state.status === 'idle') songPlayer(message, args, serverQ.songs[0]);
}

// Play the queued song and if there are no songs left in queue, leave the voice channel
async function songPlayer(message, args, song) {
	const serverQ = queue.get(message.guild.id);

	// There are no songs left to play in the queue
	if (!song) {
		const waitEmbed = new MessageEmbed()
			.setColor('#EFFF00')
			.setDescription(
				'**The bot is waiting for new song requests, if no song is requested within 5 minutes, the bot will leave the voice channel!**',
			);

		const filter = (m) => m.content.startsWith(`${message.client.prefix}`) && m.content.includes('queue' || 'q');
		const collector = serverQ.textChannel.createMessageCollector({ filter, max: 1, time: 300000 });

		serverQ.textChannel.send({ embed: [waitEmbed] }).then((waitMessage) => {
			collector.on('collect', (m) => {
				waitMessage.delete(waitEmbed);
				console.log(`Collected ${m.content}`);
			});
		});

		collector.on('end', (collected) => {
			if (collected.size === 0) {
				serverQ.voiceChannel.leave();
				msg.delete(waitEmbed);
				queue.delete(message.guild.id);
				const leaveEmbed = new MessageEmbed()
					.setColor('#EFFF00')
					.setDescription('**I left the voice channel because there are no songs left in the queue!**');
				serverQ.textChannel.send({ embeds: [leaveEmbed] });
			} else return;
		});
	}
	// There are songs remaining in the queue
	else {
		// Join the voiceChannel if not already joined
		if (serverQ.connection === null) {
			const connection = await connectToVoice(serverQ.voiceChannel);
			serverQ.connection = connection;
		}

		try {
			// Download the song from the url and create audio resource
			const songInfo = await ytdl.getInfo(serverQ.songs[0].url);

			if (
				(serverQ.player._state.status === 'idle' || serverQ.player._state.status === 'paused') &&
				typeof stream === 'undefined'
			) {
				var stream = await ytdl.downloadFromInfo(songInfo, {
					opusEncoded: true,
					filter: 'audioonly',
					quality: 'highestaudio',
				});
			}
			if (typeof stream != `undefined`) console.log('Song has been downloaded! - ' + song.title);
		} catch (error) {
			console.log(error);
		}

		const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });

		try {
			// Monitor change in status of the player to transition to next song, if it exists
			serverQ.player.on('stateChange', (oldState, newState) => {
				console.log(`Audio player transitioned from ${oldState.status} to ${newState.status}`);
				if (oldState.status === 'playing' && newState.status === 'idle') {
					serverQ.songs.shift();
					songPlayer(message, args, serverQ.songs[0]);
				}
			});

			// Play the AudioResource and subscribe the connection to the player
			serverQ.player.play(resource);
			await entersState(serverQ.player, AudioPlayerStatus.Playing, 5e3);
			serverQ.subscription = serverQ.connection.subscribe(serverQ.player);
		} catch (error) {
			console.log(error);
		}

		//TODO: add buttons to playingEmbed (pause / unpause and also show a progress bar)

		// Monitors for subscription of a connection by the player
		// and sends a playingEmbed in chat
		serverQ.player.on('subscribe', async () => {
			const playingEmbed = new MessageEmbed()
				.setTitle('🎶 **Now Playing** 🎶')
				.setColor('#EFFF00')
				.setThumbnail(song.thumbnail)
				.setDescription(`[${song.title}](${song.url}) [${song.time}]`)
				.setTimestamp()
				.setFooter(`Requested by ${song.requestedBy.username}`);

			song.playingEmbed.push(playingEmbed);

			serverQ.currentEmbed = song.playingEmbed;

			console.log(song.playingEmbed);

			// Ensures that only the current song's embed is sent into chat
			if (song.playingEmbed.length > 1) {
				if (typeof serverQ.playMessage != 'undefined	') serverQ.playMessage.delete(song.playingEmbed[0]);
				song.playingEmbed.pop();
			}

			// Handles deletion of playingEmbed once the song is finished playing
			else {
				await serverQ.textChannel.send({ embeds: serverQ.currentEmbed, ephemeral: true }).then((playMessage) => {
					const minutes = song.time.split(':')[0];
					var seconds = song.time.split(':')[1];

					serverQ.playMessage = playMessage;

					const timeMili = minutes * 60000 + seconds * 1000;
					if (typeof playMessage != 'undefined') setTimeout(() => playMessage.delete(playingEmbed), timeMili - 1500);
				});
			}
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

const queueCommand = new SlashCommandBuilder()
	.setName('queue')
	.setDescription('Queues the specified song query or url, plays the song if no other songs are in queue')
	.addUserOption((option) => option.setName('song').setDescription('The song query or url').setRequired(true));
const commandData = queueCommand.toJSON();

module.exports = {
	songPlayer: songPlayer,
	commandData: commandData,
	name: 'queue',
	description: 'Queues the specified song query or url and if there are no other songs, begins playing the song audio',
	aliases: ['q', 'play', 'p'],
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
