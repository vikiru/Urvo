const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('comic').setDescription('Sends a random xkcd comic in the channe'),
	guildOnly: true,
	/**
	 * Fetch the current xkcd comic and then fetch a random comic and send it into the chat via an embed.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const currComic = await fetch('https://xkcd.com/info.0.json').then((response) => response.json());
		const maxNum = currComic.num;
		const random = Math.floor(Math.random() * maxNum);

		const randomComic = await fetch(`https://xkcd.com/${random}/info.0.json`).then((response) => response.json());

		const comicEmbed = new EmbedBuilder()
			.setTitle(`${randomComic.safe_title}`)
			.setColor('#b35843')
			.setTimestamp()
			.setImage(randomComic.img)
			.setURL(`https://xkcd.com/${random}`)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		interaction.reply({ embeds: [comicEmbed] });
	},
};
