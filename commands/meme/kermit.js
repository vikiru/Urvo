const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const memeParser = require('../../utils/memeParser');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kermit')
		.setDescription("Send a But That's None of My Business Kermit meme with your desired text")
		.addStringOption((option) =>
			option.setName('top_text').setDescription('Text that appears on the top').setRequired(true),
		)
		.addStringOption((option) =>
			option.setName('bottom_text').setDescription('Text that appears on the bottom').setRequired(true),
		),
	guildOnly: true,
	/**
	 * Sends a But That's None Of Your Business Kermit Meme with the specified text
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const topText = memeParser.parseText(interaction.options.getString('top_text'));
		const bottomText = memeParser.parseText(interaction.options.getString('bottom_text'));

		const kermitEmbed = new EmbedBuilder()
			.setTitle("But That's None Of Your Business Kermit Meme")
			.setDescription(`Here is your requested meme! \n\n[Generated via Memegen.link](https://memegen.link/)`)
			.setColor('#b35843')
			.setTimestamp()
			.setImage(`https://api.memegen.link/images/kermit/${topText}/${bottomText}`)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [kermitEmbed] });
	},
};
