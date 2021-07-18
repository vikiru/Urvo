const Opus = require('opusscript');
const ytdl = require('ytdl-core-discord');

async function play(message, url) {
	const connect = await message.member.voice.channel.join();
	const dispatcher = connect.play(await ytdl(url), {volume: 0.5}, {quality: 'highestAudio'}, { highWaterMark: 50 }, { type: 'opus' });

    dispatcher.on('start', () =>
    {
        console.log('PLAYING...');
    })
}

module.exports = {
	name: 'play',
	guildOnly: true,
	execute(message, args) {
		play(message, args);
	},
};
