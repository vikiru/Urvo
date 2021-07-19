const { MessageEmbed } = require('discord.js');

function serverInfo(message, args) {
	const roles = message.guild.roles.cache.map((role) => role);
	const allRoles = [];

	allRoles.push(roles);
	console.log(allRoles);

	const serverEmbed = new MessageEmbed()
		.setTitle('Server Info!')
		.setColor('#EFFF00')
		.setThumbnail(message.guild.iconURL())
		.addFields(
			{ name: 'Server Name', value: message.guild.name, inline: true },
			{ name: 'Server Owner', value: `<@${message.guild.ownerID}>`, inline: true },
			{ name: 'Region', value: message.guild.region, inline: true },
			{ name: 'Member Count', value: message.guild.memberCount, inline: true },
			{
				name: 'Roles',	
				value: allRoles,
				inline: true,
			},
		)
		.setTimestamp();

	message.channel.send(serverEmbed);
}

module.exports = {
	name: 'server',
	guildOnly: true,
	execute(message, args) {
		serverInfo(message, args);
	},
};
