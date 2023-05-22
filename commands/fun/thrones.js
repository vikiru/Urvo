const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thrones')
		.setDescription('Get information about a random Game of Thrones character'),
	guildOnly: true,
	/**
	 * Fetch a random GoT character and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const thronesData = await fetch('https://thronesapi.com/api/v2/Characters').then((response) => response.json());
		const maxNum = thronesData.length ?? 53;
		const random = Math.floor(Math.random() * maxNum);

		const randomThrone = await fetch(`https://thronesapi.com/api/v2/Characters/${random}`).then((response) =>
			response.json(),
		);

		const throneEmbed = new EmbedBuilder()
			.setTitle(randomThrone.fullName)
			.setColor('#b35843')
			.setImage(randomThrone.imageUrl)
			.setTimestamp()
			.addFields(
				{ name: 'Title', value: randomThrone.title, inline: true },
				{ name: 'family', value: randomThrone.family, inline: true },
			)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [throneEmbed] });
	},
};
