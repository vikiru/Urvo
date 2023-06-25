const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

/**
 * Create an embed containing information about the requested Minecraft user
 * @param {*} interaction
 * @param {*} user
 * @returns An embed containing information about the requested Minecraft user
 */
function createEmbed(interaction, user) {
	const title = 'Minecraft Avatar!';
	const description = "Here's your minecraft avatar as requested!";

	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const minecraftEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(client.embedColour)
		.setTimestamp()
		.setImage(`https://minotar.net/body/${user}/200.png`)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

	return minecraftEmbed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('minecraft')
		.setDescription('Return an image of the minecraft avatar for a specific username/uid')
		.addStringOption((option) =>
			option.setName('user').setDescription('The username or uid of the user').setRequired(true),
		),
	guildOnly: true,
	cooldown: 10,
	async execute(interaction) {
		const user = interaction.options.getString('user');
		const minecraftEmbed = createEmbed(interaction, user);
		interaction.reply({ embeds: [minecraftEmbed] });
	},
};
