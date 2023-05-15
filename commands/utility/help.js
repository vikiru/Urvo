const { EmbedBuilder } = require('discord.js');
const { prefix } = require('../../config.json');
const { SlashCommandBuilder } = require('discord.js');

function help(message, args) {
	const data = [];
	const { fun, image, minigames, moderation, music, utility } = message.client.commands;

	const f = [];
	const img = [];
	const mg = [];
	const mod = [];
	const mu = [];
	const util = [];

	if (!args.length) {
		f.push(fun.map((command) => '`' + command.name + '`').join(', '));
		img.push(image.map((command) => '`' + command.name + '`').join(', '));
		mg.push(minigames.map((command) => '`' + command.name + '`').join(', '));
		mod.push(moderation.map((command) => '`' + command.name + '`').join(', '));
		mu.push(music.map((command) => '`' + command.name + '`').join(', '));
		util.push(utility.map((command) => '`' + command.name + '`').join(', '));

		data.push(`\nYou can send ${prefix}help [command name] to retrieve all of the info on the specific command`);

		const helpEmbed = new MessageEmbed()
			.setTitle('List of Commands')
			.setColor('#EFFF00')
			.setThumbnail('http://www.clker.com/cliparts/P/t/7/o/9/W/help-hi.png')
			.setDescription('All of the possible commands that can be used')
			.addFields(
				{ name: 'Fun', value: f.toString() },
				{ name: 'Image', value: img.toString() },
				{ name: 'Minigames', value: mg.toString() },
				{ name: 'Moderation', value: mod.toString() },
				{ name: 'Music', value: mu.toString() },
				{ name: 'Utility', value: util.toString() },
				{ name: '\u200B', value: data.toString() },
			)
			.setTimestamp()
			.setFooter(`Prefix: ${prefix}`);

		message.channel.send({ embeds: [helpEmbed] });
	}
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Access a list of help commands relevant to this bot.'),
	execute(message, args) {
		help(message, args);
	},
	guildOnly: true,
};
