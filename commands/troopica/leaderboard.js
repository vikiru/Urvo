const { SlashCommandBuilder, bold } = require('discord.js');
const User = require('../../models/Users');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('leaderboard')
		.setDescription('See the top 10 players within the leaderboards!'),
	guildOnly: true,
	cooldown: 10,
	async execute(interaction) {
		const allUsers = await User.findAll();
		allUsers.sort((a, b) => b.troops - a.troops);
		const topTenUsers = allUsers.slice(0, 10);
		const leaderboardRankings = topTenUsers
			.map(
				(user, position) =>
					`${bold(position + 1)}. Troopica # ${position + 1} (${user.dataValues.troops} ⚔️ | ${
						user.dataValues.balance
					} 💰)`,
			)
			.join('\n');
		const title = bold('⚔️ Troopica Leaderboards (Top 10) ⚔️');
		const finalStr = title + '\n\n' + leaderboardRankings;
		interaction.reply(finalStr);
	},
};
