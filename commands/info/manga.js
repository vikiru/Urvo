const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { URLSearchParams } = require('url');
const { fetchData } = require('../../utils/fetchData');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
const { findEntry } = require('../../utils/findEntry');
const { createConfirmationRow, createSelectConfirmRow } = require('../../utils/createConfirmationRow');
const { createResultsEmbed } = require('../../utils/createResultsEmbed');

/**
 * Create an embed containing information about a queried manga
 * @param {*} interaction
 * @param {*} mangaResult
 * @returns An embed containing information about the queried manga
 */
function createEmbed(interaction, mangaResult) {
	const title = mangaResult.title;
	const url = mangaResult.url;
	const imageUrl = mangaResult.images.jpg.image_url;
	let type = 'N/A';
	if (mangaResult.type) {
		type = mangaResult.type;
	}

	let chapters = 'N/A';
	if (mangaResult.chapters) {
		chapters = mangaResult.chapters.toString();
	}

	let score = 'N/A';
	if (mangaResult.score) {
		score = mangaResult.score.toString();
	}

	const synopsis = mangaResult.synopsis ?? 'N/A';
	const trimmedSynopsis = trim(synopsis, 1024).toString();

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const mangaEmbed = new EmbedBuilder()
		.setTitle(title)
		.setColor(client.embedColour)
		.setTimestamp()
		.setURL(url)
		.setThumbnail(imageUrl)
		.addFields(
			{ name: 'Type', value: type, inline: true },
			{ name: 'Chapter Count', value: chapters, inline: true },
			{ name: 'Score', value: score, inline: true },
			{ name: 'Synopsis', value: trimmedSynopsis, inline: false },
		)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return mangaEmbed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('manga')
		.setDescription('Sends the user information about a queried manga, obtained from MAL')
		.addStringOption((option) =>
			option.setName('query').setDescription('The name of the manga you wish to search for').setRequired(true),
		),
	guildOnly: true,
	cooldown: 10,
	async execute(interaction) {
		const desiredManga = interaction.options.getString('query');
		const query = new URLSearchParams([['q', `${desiredManga}`]]);
		const mangaSearch = await fetchData(`https://api.jikan.moe/v4/manga?${query}`);
		const resultLength = mangaSearch.data.length;

		if (!resultLength) {
			interaction.reply({
				content: 'Sorry, this manga does not seem to exist or it was incorrectly typed. Please try again.',
				ephemeral: true,
			});
		} else {
			let mangaEmbed = new EmbedBuilder();
			if (resultLength === 1) {
				mangaEmbed = createEmbed(interaction, mangaSearch.data[0]);
				interaction.reply({
					embeds: [mangaEmbed],
				});
			} else {
				const indexes = findEntry(mangaSearch.data, desiredManga, 'Manga');
				if (indexes.length != 0 && indexes.length > 1) {
					const resultsEmbed = createResultsEmbed(interaction, indexes, 'Manga Search Results', 'manga');
					const row =
						indexes.length <= 5 ? createConfirmationRow(indexes.length) : createSelectConfirmRow(indexes.length);
					const response = await interaction.reply({
						embeds: [resultsEmbed],
						components: [row],
					});
					const filter = (i) => i.user.id === interaction.user.id;
					try {
						const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
						const confirmId = confirmation.customId;
						const index = isNaN(confirmId) ? parseInt(confirmation.values[0]) : parseInt(confirmId);
						mangaEmbed = createEmbed(interaction, indexes[index]);
						await interaction.editReply({
							embeds: [mangaEmbed],
							components: [],
						});
					} catch (error) {
						await interaction.editReply({
							content: `Confirmation was not received within 1 minute. Aborting command execution.`,
							components: [],
						});
					}
				} else if (indexes.length === 1) {
					mangaEmbed = createEmbed(interaction, indexes[0]);
					interaction.reply({
						embeds: [mangaEmbed],
					});
				} else {
					interaction.reply({
						content: 'Sorry, this manga does not seem to exist or it was incorrectly typed. Please try again.',
						ephemeral: true,
					});
				}
			}
		}
	},
};
