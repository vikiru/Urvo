const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flip')
		.setDescription('Flip a coin and guess the outcome')
		.addStringOption((option) =>
			option
				.setName('choice')
				.setDescription('The outcome of the coin flip (heads or tails)')
				.setRequired(true)
				.addChoices(
					{ name: 'Heads', value: 'heads' },
					{
						name: 'Tails',
						value: 'tails',
					},
				),
		),
	guildOnly: true,
	/**
	 * Allows the user to flip a coin and guess the outcome, sending the result of the coin flip into the chat via an embed.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const options = ['heads', 'tails'];
		const result = options[Math.floor(Math.random() * options.length)];

		const choice = interaction.options.getString('choice');
		const outcome = result === choice ? 'You win!' : 'You lose!';

		const resultEmbed = new EmbedBuilder()
			.setTitle('Coin Flip!')
			.setColor('#b35843')
			.setTimestamp()
			.setThumbnail('https://karenstrunks.com/wp-content/uploads/2014/06/HEADS-TAILS.jpg')
			.addFields(
				{ name: `${interaction.user.username}'s Choice`, value: choice, inline: true },
				{ name: 'Result', value: outcome.charAt(0).toUpperCase(), inline: true },
				{ name: 'Outcome', value: outcome },
			)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [resultEmbed] });
	},
};
