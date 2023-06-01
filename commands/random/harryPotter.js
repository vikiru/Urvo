const { EmbedBuilder, SlashCommandBuilder, quote } = require('discord.js');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

/**
 * Helper function to make the first character of a string uppercase
 * @param {*} str
 */
function properCase(str) {
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('potter')
		.setDescription('Get information about a random Harry Potter character'),
	guildOnly: true,
	/**
	 * Fetch a random Harry Potter character and send it as an embed into the chat.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const potterData = await fetch('https://hp-api.onrender.com/api/characters').then((response) => response.json());
		const maxNum = potterData.length ?? 402;
		const random = Math.floor(Math.random() * maxNum);
		const randomPotter = potterData[random];

		let house = 'N/A';
		if (randomPotter.house !== '') {
			house = randomPotter.house;
		}

		let ancestry = 'N/A';
		if (randomPotter.ancestry !== '') {
			ancestry = randomPotter.ancestry;
		}

		let patronus = 'N/A';
		if (randomPotter.patronus !== '') {
			patronus = randomPotter.patronus;
		}

		const potterEmbed = new EmbedBuilder()
			.setTitle(randomPotter.name)
			.setColor('#b35843')
			.setTimestamp()
			.addFields(
				{ name: 'Species', value: randomPotter.species, inline: true },
				{ name: 'Gender', value: randomPotter.gender, inline: true },
				{ name: 'House', value: house, inline: true },
				{ name: 'Ancestry', value: ancestry, inline: true },
				{ name: 'Patronus', value: patronus, inline: true },
			)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		if (randomPotter.image) {
			potterEmbed.setImage(randomPotter.image);
		}
		interaction.reply({ embeds: [potterEmbed] });
	},
};
