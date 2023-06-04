const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const memeParser = require('../../utils/memeParser');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('knuckles')
		.setDescription('Send a Ugandan Knuckles meme with your desired text')
		.addStringOption((option) =>
			option.setName('top_text').setDescription('Text that appears on the top').setRequired(true),
		)
		.addStringOption((option) =>
			option.setName('bottom_text').setDescription('Text that appears on the bottom').setRequired(true),
		),
	guildOnly: true,
	/**
	 * Sends a Ugandan Knuckles meme with the specified text
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const topText = memeParser.parseText(interaction.options.getString('top_text'));
		const bottomText = memeParser.parseText(interaction.options.getString('bottom_text'));

		const knucklesEmbed = new EmbedBuilder()
			.setTitle('Ugandan Knuckles Meme')
			.setDescription(`Here is your requested meme! \n\n[Generated via Memegen.link](https://memegen.link/)`)
			.setColor(client.embedColour)
			.setTimestamp()
			.setImage(`https://api.memegen.link/images/ugandanknuck/${topText}/${bottomText}.png`)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [knucklesEmbed] });
	},
};
