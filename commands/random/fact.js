const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('fact').setDescription('Send a random fact'),
	guildOnly: true,
	/**
	 * Fetch a random fact and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomFact = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random').then((response) =>
			response.json(),
		);

		const factEmbed = new EmbedBuilder()
			.setTitle(`Random Fact!`)
			.setDescription(randomFact.text)
			.setColor('#b35843')
			.setTimestamp()
			.setImage('https://cdn.pixabay.com/photo/2019/11/09/06/00/question-4612922_1280.jpg')
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [factEmbed] });
	},
};
