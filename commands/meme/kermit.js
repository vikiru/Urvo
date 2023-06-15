const { EmbedBuilder, SlashCommandBuilder, hyperlink } = require('discord.js');
const memeParser = require('../../utils/memeParser');

/**
 * Create an embed containing information about the But That's None Of Your Business Kermit Meme
 * @param {*} interaction
 * @param {*} options
 * @returns An embed containing information about the But That's None Of Your Business Kermit Meme
 */
function createEmbed(interaction, options) {
	const title = "But That's None Of Your Business Kermit Meme";
	const description =
		'Here is your requested meme! \n\nGenerated via ' + hyperlink('Memegen.link', 'https://memegen.link/');

	const topText = options.topText;
	const bottomText = options.bottomText;
	const format = options.format;

	const image = `https://api.memegen.link/images/kermit/${topText}/${bottomText}${format}`;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const kermitEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(image)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

	return kermitEmbed;
}

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

		const options = { topText: topText, bottomText: bottomText, format: '.png' };
		const kermitEmbed = createEmbed(interaction, options);
		interaction.reply({ embeds: [kermitEmbed] });
	},
};
