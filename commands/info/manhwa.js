const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');
const { URLSearchParams } = require('url');
const { fetchData } = require('../../utils/fetchData');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
const { findEntry } = require('../../utils/findEntry');
const { createConfirmationRow, createSelectConfirmRow } = require('../../utils/createConfirmationRow');
const { createResultsEmbed } = require('../../utils/createResultsEmbed');

/**
 * Create an embed containing information about a queried manhwa
 * @param {*} interaction
 * @param {*} manhwaResult
 * @returns An embed containing information about the queried manhwa
 */
function createEmbed(interaction, manhwaResult) {
	const title = manhwaResult.title;
	const url = manhwaResult.url;
	const imageUrl = manhwaResult.images.jpg.image_url;
	let type = 'N/A';
	if (manhwaResult.type) {
		type = manhwaResult.type;
	}

	let chapters = 'N/A';
	if (manhwaResult.chapters) {
		chapters = manhwaResult.chapters.toString();
	}

	let score = 'N/A';
	if (manhwaResult.score) {
		score = manhwaResult.score.toString();
	}

	const synopsis = manhwaResult.synopsis ?? 'N/A';
	const trimmedSynopsis = trim(synopsis, 1024).toString();

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const manhwaEmbed = new EmbedBuilder()
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
	return manhwaEmbed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('manhwa')
		.setDescription('Sends the user information about a queried manhwa, obtained from MAL')
		.addStringOption((option) =>
			option.setName('query').setDescription('The name of the manhwa you wish to search for').setRequired(true),
		),
	guildOnly: true,
	cooldown: 10,
	async execute(interaction) {
		const desiredManhwa = interaction.options.getString('query');
		const query = new URLSearchParams([['q', `${desiredManhwa}`]]);
		const manhwaSearch = await fetchData(`https://api.jikan.moe/v4/manga?${query}`);
		const resultLength = manhwaSearch.data.length;

		if (!resultLength) {
			interaction.reply({
				content: 'Sorry, this manhwa does not seem to exist or it was incorrectly typed. Please try again.',
				ephemeral: true,
			});
		} else {
			let manhwaEmbed = new EmbedBuilder();
			if (resultLength === 1) {
				manhwaEmbed = createEmbed(interaction, manhwaSearch.data[0]);
				interaction.reply({
					embeds: [manhwaEmbed],
				});
			} else {
				const indexes = findEntry(manhwaSearch.data, desiredManhwa, 'Manhwa');
				if (indexes.length != 0 && indexes.length > 1) {
					const resultsEmbed = createResultsEmbed(interaction, indexes, 'Manhwa Search Results', 'manhwa');
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
						manhwaEmbed = createEmbed(interaction, indexes[index]);
						await interaction.editReply({
							embeds: [manhwaEmbed],
							components: [],
						});
					} catch (error) {
						await interaction.editReply({
							content: `Confirmation was not received within 1 minute. Aborting command execution.`,
							components: [],
						});
					}
				} else if (indexes.length === 1) {
					manhwaEmbed = createEmbed(interaction, indexes[0]);
					interaction.reply({
						embeds: [manhwaEmbed],
					});
				} else {
					interaction.reply({
						content: 'Sorry, this manhwa does not seem to exist or it was incorrectly typed. Please try again.',
						ephemeral: true,
					});
				}
			}
		}
	},
};
