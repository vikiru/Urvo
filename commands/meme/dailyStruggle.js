const { EmbedBuilder, SlashCommandBuilder, hyperlink } = require('discord.js');
const memeParser = require('../../utils/memeParser');

/**
 * Create an embed containing information about the Daily Struggle Meme
 * @param {*} interaction
 * @param {*} options
 * @returns An embed containing information about the Daily Struggle Meme
 */
function createEmbed(interaction, options) {
	const title = 'Daily Struggle Meme';
	const description =
		'Here is your requested meme! \n\nGenerated via ' + hyperlink('Memegen.link', 'https://memegen.link/');

	const leftButton = options.leftButton;
	const rightButton = options.rightButton;
	const format = options.format;

	const image = `https://api.memegen.link/images/ds/${leftButton}/${rightButton}${format}`;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const struggleEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(image)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

	return struggleEmbed;
}

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
	cooldown: 10,
	/**
	 * Sends a Daily Struggle meme with the specified text
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const leftButton = memeParser.parseText(interaction.options.getString('left_button_text'));
		const rightButton = memeParser.parseText(interaction.options.getString('right_button_text'));

		const options = { leftButton: leftButton, rightButton: rightButton, format: '.png' };
		const struggleEmbed = createEmbed(interaction, options);
		interaction.reply({ embeds: [struggleEmbed] });
	},
};
