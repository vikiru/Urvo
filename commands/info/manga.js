const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { URLSearchParams } = require('url');
const { fetchData } = require('../../utils/fetchData');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('manga')
		.setDescription('Sends the user information about a queried manga, obtained from MAL')
		.addStringOption((option) =>
			option.setName('query').setDescription('The name of the manga you wish to search for').setRequired(true),
		),
	guildOnly: true,
	async execute(interaction) {
		const desiredManga = interaction.options.getString('query');
		const query = new URLSearchParams([
			['q', `${desiredManga}`],
			['type', 'manga'],
		]);

		const mangaSearch = await fetch(`https://api.jikan.moe/v4/manga?${query}`).then((response) => response.json());
		const mangaResult = mangaSearch.data[0];

		const imageUrl = mangaResult.images.jpg.image_url;

		let chapterCount = '0';
		if (mangaResult.chapterCount) {
			chapterCount = mangaResult.chapterCount.toString();
		}

		let score = '0';
		if (mangaResult.score) {
			score = mangaResult.score.toString();
		}

		const synopsis = mangaResult.synopsis ?? 'N/A';
		const trimmedSynopsis = trim(synopsis, 1024).toString();

		const mangaEmbed = new EmbedBuilder()
			.setTitle(mangaResult.title)
			.setColor('#b35843')
			.setTimestamp()
			.setURL(mangaResult.url)
			.setThumbnail(imageUrl)
			.addFields(
				{ name: 'Type', value: mangaResult.type ?? 'N/A', inline: true },
				{ name: 'Chapter Count', value: chapterCount, inline: true },
				{ name: 'Score', value: score, inline: true },
				{ name: 'Synopsis', value: trimmedSynopsis, inline: false },
			)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [mangaEmbed] });
	},
};
