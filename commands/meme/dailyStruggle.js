const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const memeParser = require('../../utils/memeParser');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('daily_struggle')
		.setDescription('Send a Daily Struggle meme with your desired text')
		.addStringOption((option) =>
			option.setName('left_button_text').setDescription('Text that appears on the left button').setRequired(true),
		)
		.addStringOption((option) =>
			option.setName('right_button_text').setDescription('Text that appears on the right button').setRequired(true),
		),
	guildOnly: true,
	/**
	 * Sends a Daily Struggle meme with the specified text
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const leftButton = memeParser.parseText(interaction.options.getString('left_button_text'));
		const rightButton = memeParser.parseText(interaction.options.getString('right_button_text'));

		const struggleEmbed = new EmbedBuilder()
			.setTitle('Daily Struggle Meme')
			.setDescription(`Here is your requested meme! \n\n[Generated via Memegen.link](https://memegen.link/)`)
			.setColor(client.embedColour)
			.setTimestamp()
			.setImage(`https://api.memegen.link/images/ds/${leftButton}/${rightButton}`)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [struggleEmbed] });
	},
};
