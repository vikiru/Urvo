const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('server-info').setDescription('Retrieve information about the server'),
	guildOnly: true,
	/**
	 * Send an embed with information about the server.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const roles = interaction.guild.roles.cache
			.filter((role) => role.name != '@everyone')
			.map((role) => '`' + role.name + '`')
			.join(', ');
		const allRoles = [];
		allRoles.push(roles);

		const date = new Date(interaction.guild.createdAt);

		const serverEmbed = new EmbedBuilder()
			.setTitle('Server Info!')
			.setColor('#b35843')
			.setTimestamp()
			.setThumbnail(interaction.guild.iconURL())
			.addFields(
				{ name: 'Server Name', value: interaction.guild.name, inline: true },
				{ name: 'Server Owner', value: `<@${interaction.guild.ownerId}>`, inline: true },
				{ name: 'Date Created', value: date.toLocaleDateString(), inline: true },
				{ name: 'Member Count', value: interaction.guild.memberCount.toString(), inline: true },
				{
					name: 'Roles',
					value: allRoles.toString(),
					inline: true,
				},
			)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });
		interaction.reply({ embeds: [serverEmbed] });
	},
};
