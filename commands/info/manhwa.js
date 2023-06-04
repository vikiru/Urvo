const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { URLSearchParams } = require('url');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('manhwa')
		.setDescription('Sends the user information about a queried manhwa, obtained from MAL')
		.addStringOption((option) =>
			option.setName('query').setDescription('The name of the manhwa you wish to search for').setRequired(true),
		),
	guildOnly: true,
	async execute(interaction) {
		const desiredManhwa = interaction.options.getString('query');
		const query = new URLSearchParams([
			['q', `${desiredManhwa}`],
			['type', 'manhwa'],
        ]);
        

		const manhwaSearch = await fetch(`https://api.jikan.moe/v4/manga?${query}`).then((response) => response.json());
		const manhwaResult = manhwaSearch.data[0];
        console.log(manhwaSearch.data.length);
        console.log(manhwaSearch);

		const imageUrl = manhwaResult.images.jpg.image_url;

		let chapterCount = '0';
		if (manhwaResult.chapterCount) {
			chapterCount = manhwaResult.chapterCount.toString();
		}

		let score = '0';
		if (manhwaResult.score) {
			score = manhwaResult.score.toString();
		}

		let synopsis = manhwaResult.synopsis ?? 'N/A';
		const trimmedSynopsis = trim(synopsis, 1024).toString();

		const manhwaEmbed = new EmbedBuilder()
			.setTitle(manhwaResult.title)
			.setColor('#b35843')
			.setTimestamp()
			.setURL(manhwaResult.url)
			.setThumbnail(imageUrl)
			.addFields(
				{ name: 'Type', value: manhwaResult.type ?? 'N/A', inline: true },
				{ name: 'Chapter Count', value: chapterCount, inline: true },
				{ name: 'Score', value: score, inline: true },
				{ name: 'Synopsis', value: trimmedSynopsis, inline: false },
			)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [manhwaEmbed] });
	},
};
