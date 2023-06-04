const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('minecraft')
		.setDescription('Return an image of the minecraft avatar for a specific username/uid')
		.addStringOption((option) =>
			option.setName('user').setDescription('The username or uid of the user').setRequired(true),
		),
	guildOnly: true,
	async execute(interaction) {
		const user = interaction.options.getString('user');

		const minecraftEmbed = new EmbedBuilder()
			.setTitle('Minecraft Avatar!')
			.setDescription(`Here's your minecraft avatar as requested!`)
			.setColor(client.embedColour)
			.setTimestamp()
			.setImage(`https://minotar.net/body/${user}/200.png`)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [minecraftEmbed] });
	},
};
