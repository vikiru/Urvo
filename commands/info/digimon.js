const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Create an embed containing information about the queried digimon
 * @param {*} interaction
 * @param {*} digimonResult
 * @returns An embed containing information about the queried digimon
 */
function createEmbed(interaction, digimonResult) {
	const title = `${digimonResult.name} [${digimonResult.level}]`;
	const image = digimonResult.img;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const digimonEmbed = new EmbedBuilder()
		.setTitle(title)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(image)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });
	return digimonEmbed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('digimon')
		.setDescription('Sends the user information about a queried digimon')
		.addStringOption((option) =>
			option.setName('query').setDescription('The name of the digimon you wish to search for').setRequired(true),
		),
	guildOnly: true,
	cooldown: 10,
	/**
	 * Sends information about a requested digimon (name, level and an image) to the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const name = interaction.options.getString('query');
		const digiSearch = await fetchData(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
		const digimonResult = digiSearch[0];

		if (digimonResult.ErrorMsg) {
			interaction.reply({
				content: 'Sorry, that digimon is not available or does not exist. Please try again with a different name',
				ephemeral: true,
			});
		} else {
			const digimonEmbed = createEmbed(interaction, digimonResult);
			interaction.reply({ embeds: [digimonEmbed] });
		}
	},
};
