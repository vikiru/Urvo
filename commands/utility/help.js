const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Access a list of help commands relevant to this bot.'),
	guildOnly: true,
	/**
	 * Send an embed with information about all the commands that the bot is able to execute.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const data = [];
		const { fun, image, minigames, moderation, utility } = client.commands;

		const f = [];
		const img = [];
		const mg = [];
		const mod = [];
		const util = [];

		f.push(fun.map((command) => '`' + command.data.name + '`').join(', '));
		img.push(image.map((command) => '`' + command.data.name + '`').join(', '));
		mg.push(minigames.map((command) => '`' + command.data.name + '`').join(', '));
		mod.push(moderation.map((command) => '`' + command.data.name + '`').join(', '));
		util.push(utility.map((command) => '`' + command.data.name + '`').join(', '));

		const helpEmbed = new EmbedBuilder()
			.setTitle('List of Commands')
			.setColor('#b35843')
			.setTimestamp()
			.setThumbnail('http://www.clker.com/cliparts/P/t/7/o/9/W/help-hi.png')
			.setDescription('All of the possible commands that can be used')
			.addFields(
				{ name: 'Fun', value: f.toString() },
				{ name: 'Image', value: img.toString() },
				{ name: 'Minigames', value: mg.toString() },
				{ name: 'Moderation', value: mod.toString() },
				{ name: 'Utility', value: util.toString() },
			)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [helpEmbed] });
	},
};
