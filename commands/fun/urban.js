const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

/**
 * Iterate through the results of a given term and return the most voted answer.
 */
function returnMostVotedAnswer(results) {
	let max = 0;
	let index = 0;
	if (results.length > 1) {
		for (let i = 0; i < results.length; i++) {
			let thumbsUpCount = results[i].thumbs_up;
			if (thumbsUpCount > max) {
				max = thumbsUpCount;
				index = i;
			}
		}
	}
	return results[index];
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('urban')
		.setDescription('Provides the definition for a given term from Urban Dictionary')
		.addStringOption((option) => option.setName('term').setDescription('The term to define').setRequired(true)),
	guildOnly: true,
	/**
	 * Provide the definition for a given term from Urban Dictionary
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const term = interaction.options.getString('term');

		const termResults = await fetch(`https://api.urbandictionary.com/v0/define?term=${term}`).then((result) =>
			result.json(),
		);
		if (termResults.list.length == 0) {
			interaction.reply({
				content: 'Sorry, there are no definitions for the provided term. Please try again with a different term',
				ephemeral: true,
			});
		} else {
			const definition = returnMostVotedAnswer(termResults.list);

			const urbanEmbed = new EmbedBuilder()
				.setTitle(`Definition for ${term}`)
				.setURL(definition.permalink)
				.setDescription(definition.definition)
				.setColor('#b35843')
				.setTimestamp()
				.addFields(
					{ name: 'Example', value: definition.example },
					{ name: 'Author', value: definition.author, inline: true },
					{ name: 'Written On', value: definition.written_on.split('T')[0], inline: true },
					{
						name: 'Rating',
						value: `👍${definition.thumbs_up.toString()} 👎${definition.thumbs_down.toString()}`,
						inline: true,
					},
				)
				.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

			interaction.reply({ embeds: [urbanEmbed] });
		}
	},
};
