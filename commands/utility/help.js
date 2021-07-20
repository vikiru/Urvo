const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../config.json');

function help(message, args) {
	const data = [];
	const { fun, image, minigames, moderation, utility } = message.client.commands;

	const f = [];
	const img = [];
	const mg = [];
	const mod = [];
	const util = [];

	if (!args.length) {
		f.push(fun.map((command) => '`' + command.name + '`').join(', '));
		img.push(image.map((command) => '`' + command.name + '`').join(', '));
		mg.push(minigames.map((command) => '`' + command.name + '`').join(', '));
		mod.push(moderation.map((command) => '`' + command.name + '`').join(', '));
		util.push(utility.map((command) => '`' + command.name + '`').join(', '));

		data.push(`\nYou can send ${prefix}help [command name] to retrieve all of the info on the specific command`);

		const helpEmbed = new MessageEmbed()
			.setTitle('List of Commands')
			.setColor('#EFFF00')
			.setThumbnail('http://www.clker.com/cliparts/P/t/7/o/9/W/help-hi.png')
			.setDescription('All of the possible commands that can be used')
			.addFields(
				{ name: 'Fun', value: f },
				{ name: 'Image', value: img },
				{ name: 'Minigames', value: mg },
				{ name: 'Moderation', value: mod },
				{ name: 'Utility', value: util },
				{ name: '\u200b', value: data },
			)
			.setTimestamp()
			.setFooter(`Prefix: ${prefix}`);

		message.channel.send(helpEmbed);
	}
}

module.exports = {
	name: 'help',
	description: 'Sends an embed containing all of the possible commands',
	guildOnly: true,
	execute(message, args) {
		help(message, args);
	},
};
