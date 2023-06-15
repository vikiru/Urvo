const { EmbedBuilder, SlashCommandBuilder, hyperlink } = require('discord.js');
const memeParser = require('../../utils/memeParser');

/**
 * Create an embed containing information about the Drake Meme
 * @param {*} interaction
 * @param {*} options
 * @returns An embed containing information about the Drake Meme
 */
function createEmbed(interaction, options) {
	const title = 'Drake Hotline Bling Meme';
	const description =
		'Here is your requested meme! \n\nGenerated via ' + hyperlink('Memegen.link', 'https://memegen.link/');

	const topText = options.topText;
	const bottomText = options.bottomText;
	const format = options.format;

	const image = `https://api.memegen.link/images/drake/${topText}/${bottomText}${format}`;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const drakeEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(image)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

	return drakeEmbed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('drake')
		.setDescription('Send a Drake Hotline Bling meme with your desired text')
		.addStringOption((option) =>
			option.setName('top_text').setDescription('Text that appears on the top').setRequired(true),
		)
		.addStringOption((option) =>
			option.setName('bottom_text').setDescription('Text that appears on the bottom').setRequired(true),
		),
	guildOnly: true,
	/**
	 * Sends a Drake Hotline Bling meme with the specified text
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const topText = memeParser.parseText(interaction.options.getString('top_text'));
		const bottomText = memeParser.parseText(interaction.options.getString('bottom_text'));
		const options = { topText: topText, bottomText: bottomText, format: '.png' };

		const drakeEmbed = createEmbed(interaction, options);
		interaction.reply({ embeds: [drakeEmbed] });
	},
};
