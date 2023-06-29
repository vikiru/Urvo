const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { fetchData } = require('../../utils/fetchData');

/**
 * Create an embed containing information about the random activity
 * @param {*} interaction
 * @param {*} randomActivity
 * @returns An embed containing information about the random activity
 */
function createEmbed(interaction, randomActivity) {
	const title = 'Random Activity Suggestion!';
	const activity = randomActivity.activity;
	const type = randomActivity.type;
	const participantCount = randomActivity.participants.toString();

	const image = 'https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648_1280.jpg';
	const username = interaction.user.username;
	const avatarURL = interaction.user.displayAvatarURL();

	const activityEmbed = new EmbedBuilder()
		.setTitle(title)
		.setColor(client.embedColour)
		.setTimestamp()
		.setThumbnail(image)
		.addFields(
			{ name: 'Activity', value: activity, inline: true },
			{ name: 'Type', value: type, inline: true },
			{ name: 'Participants', value: participantCount, inline: true },
		)
		.setFooter({ text: `Requested by ${username}`, iconURL: avatarURL });

	if (randomActivity.link) {
		activityEmbed.setURL(randomActivity.link);
	}
	return activityEmbed;
}

module.exports = {
	data: new SlashCommandBuilder().setName('bored').setDescription('Suggest a random activity to the user'),
	guildOnly: true,
	cooldowns: 10,
	/**
	 * Fetch a random activity and send it into the chat via an embed.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomActivity = await fetchData('http://www.boredapi.com/api/activity/');
		const activityEmbed = createEmbed(interaction, randomActivity);
		interaction.reply({ embeds: [activityEmbed] });
	},
};
