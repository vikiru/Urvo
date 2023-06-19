const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { URLSearchParams } = require('url');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('manhua')
		.setDescription('Sends the user information about a queried manhua, obtained from MAL')
		.addStringOption((option) =>
			option.setName('query').setDescription('The name of the manhua you wish to search for').setRequired(true),
		),
	guildOnly: true,
	async execute(interaction) {
		const desiredmanhua = interaction.options.getString('query');
		const query = new URLSearchParams([
			['q', `${desiredmanhua}`],
			['type', 'manhua'],
		]);

		const manhuaSearch = await fetch(`https://api.jikan.moe/v4/manga?${query}`).then((response) => response.json());
		const manhuaResult = manhuaSearch.data[0];
		console.log(manhuaResult);

		const imageUrl = manhuaResult.images.jpg.image_url;

		let chapterCount = '0';
		if (manhuaResult.chapterCount) {
			chapterCount = manhuaResult.chapterCount.toString();
		}

		let score = '0';
		if (manhuaResult.score) {
			score = manhuaResult.score.toString();
		}

		const synopsis = manhuaResult.synopsis ?? 'N/A';
		const trimmedSynopsis = trim(synopsis, 1024).toString();

		const manhuaEmbed = new EmbedBuilder()
			.setTitle(manhuaResult.title)
			.setColor('#b35843')
			.setTimestamp()
			.setURL(manhuaResult.url)
			.setThumbnail(imageUrl)
			.addFields(
				{ name: 'Type', value: manhuaResult.type ?? 'N/A', inline: true },
				{ name: 'Chapter Count', value: chapterCount, inline: true },
				{ name: 'Score', value: score, inline: true },
				{ name: 'Synopsis', value: trimmedSynopsis, inline: false },
			)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [manhuaEmbed] });
	},
};
