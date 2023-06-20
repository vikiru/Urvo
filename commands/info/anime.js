const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { URLSearchParams } = require('url');
const { fetchData } = require('../../utils/fetchData');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
const { findEntry } = require('../../utils/findEntry');
const { createConfirmationRow } = require('../../utils/createConfirmationRow');
const { createResultsEmbed } = require('../../utils/createResultsEmbed');

/**
 * Create an embed containing information about a queried anime
 * @param {*} interaction
 * @param {*} animeResult
 * @returns An embed containing information about the queried anime
 */
function createEmbed(interaction, animeResult) {
	const title = animeResult.title;
	const url = animeResult.url;
	const imageUrl = animeResult.images.jpg.image_url;
	let type = 'N/A';
	if (animeResult.type) {
		type = animeResult.type;
	}

	let episodeCount = 'N/A';
	if (animeResult.episodes) {
		episodeCount = animeResult.episodes.toString();
	}

	let score = 'N/A';
	if (animeResult.score) {
		score = animeResult.score.toString();
	}

	const trimmedSynopsis = trim(animeResult.synopsis, 1024).toString();

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const animeEmbed = new EmbedBuilder()
		.setTitle(title)
		.setColor(client.embedColour)
		.setTimestamp()
		.setURL(url)
		.setThumbnail(imageUrl)
		.addFields(
			{ name: 'Type', value: type, inline: true },
			{ name: 'Episode Count', value: episodeCount, inline: true },
			{ name: 'Score', value: score, inline: true },
			{ name: 'Synopsis', value: trimmedSynopsis, inline: false },
		)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

	return animeEmbed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('anime')
		.setDescription('Sends the user information about a queried anime, obtained from MAL')
		.addStringOption((option) =>
			option.setName('query').setDescription('The name of the anime you wish to search for').setRequired(true),
		),
	guildOnly: true,
	/**
	 * Fetch information pertaining to a queried anime and send the response back as an embed.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const desiredAnime = interaction.options.getString('query');
		const query = new URLSearchParams([['q', `${desiredAnime}`]]);
		const animeSearch = await fetchData(`https://api.jikan.moe/v4/anime?${query}`);
		const resultLength = animeSearch.data.length;

		if (!resultLength) {
			interaction.reply({
				content: 'Sorry, this anime does not seem to exist or it was incorrectly typed. Please try again.',
				ephemeral: true,
			});
		} else {
			let animeEmbed = new EmbedBuilder();
			if (resultLength === 1) {
				animeEmbed = createEmbed(interaction, animeSearch.data[0]);
				interaction.reply({
					embeds: [animeEmbed],
				});
			} else {
				const indexes = findEntry(animeSearch.data, desiredAnime, 'TV');
				if (indexes.length != 0) {
					const resultsEmbed = createResultsEmbed(interaction, indexes, 'Anime Search Results', 'anime');
					const row = createConfirmationRow(indexes.length);
					const response = await interaction.reply({
						embeds: [resultsEmbed],
						components: [row],
					});
					const filter = (i) => i.user.id === interaction.user.id;
					try {
						const confirmation = await response.awaitMessageComponent({ filter: filter, time: 60_000 });
						const confirmId = confirmation.customId;
						const index = parseInt(confirmId);
						animeEmbed = createEmbed(interaction, indexes[index]);
						await interaction.editReply({
							embeds: [animeEmbed],
							components: [],
						});
					} catch (error) {
						await interaction.editReply({
							content: `Confirmation was not received within 1 minute. Aborting command execution.`,
							components: [],
						});
					}
				} else if (indexes.length === 1) {
					animeEmbed = createEmbed(interaction, indexes[0]);
					interaction.reply({
						embeds: [animeEmbed],
					});
				} else {
					interaction.reply({
						content: 'Sorry, this anime does not seem to exist or it was incorrectly typed. Please try again.',
						ephemeral: true,
					});
				}
			}
		}
	},
};
