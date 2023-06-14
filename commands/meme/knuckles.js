const { EmbedBuilder, SlashCommandBuilder, hyperlink } = require('discord.js');
const memeParser = require('../../utils/memeParser');

/**
 * Create an embed containing information about the Ugandan Knuckles Meme
 * @param {*} interaction
 * @param {*} options
 * @returns An embed containing information about the Ugandan Knuckles Meme
 */
function createEmbed(interaction, options) {
	const title = 'Ugandan Knuckles Meme';
	const description =
		'Here is your requested meme! \n\nGenerated via' +
		hyperlink({ content: 'Memegen.link', url: 'https://memegen.link/' });

	const topText = options.topText;
	const bottomText = options.bottomText;
	const format = options.format;

	const image = `https://api.memegen.link/images/ugandanknuck/${topText}/${bottomText}${format}`;

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarUrl();

	const knuckleEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(image)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

	return knuckleEmbed;
}

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

		const options = { topText: topText, bottomText: bottomText, format: '.png' };
		const knucklesEmbed = createEmbed(interaction, options);
		interaction.reply({ embeds: [knucklesEmbed] });
	},
};
