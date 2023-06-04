const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('digimon')
		.setDescription('Sends the user information about a queried digimon')
		.addStringOption((option) =>
			option.setName('query').setDescription('The name of the digimon you wish to search for').setRequired(true),
		),
	guildOnly: true,
	/**
	 * Sends information about a requested digimon (name, level and an image) to the chat via an embed
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const name = interaction.options.getString('query');
		const digiSearch = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`).then((response) =>
			response.json(),
		);
		const digimonResult = digiSearch[0];

		if (digimonResult.ErrorMsg) {
			interaction.reply({
				content: 'Sorry, that digimon is not available or does not exist. Please try again with a different name',
				ephemeral: true,
			});
		} else {
			const titleText = `${digimonResult.name} [${digimonResult.level}]`;
			const digimonEmbed = new EmbedBuilder()
				.setTitle(titleText)
				.setColor(client.embedColour)
				.setTimestamp()
				.setImage(digimonResult.img)
				.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

			interaction.reply({ embeds: [digimonEmbed] });
		}
	},
};
