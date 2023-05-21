const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder().setName('bored').setDescription('Suggest a random randomActivity to the user'),
	guildOnly: true,
	/**
	 * Fetch a random activity and send it into the chat via an embed.
	 * @param {*} interaction
	 */
	async execute(interaction) {
		const randomActivity = await fetch('http://www.boredapi.com/api/activity/').then((response) => response.json());

		const activityEmbed = new EmbedBuilder()
			.setTitle('Random Activity Suggestion!')
			.setColor('#b35843')
			.setTimestamp()
			.setThumbnail(
				'https://res.cloudinary.com/teepublic/image/private/s--Zs-fk3E1--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_484849,e_outline:48/co_484849,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1499630965/production/designs/1725535_0.jpg',
			)
			.addFields(
				{ name: 'Activity', value: randomActivity.activity, inline: true },
				{ name: 'Type', value: randomActivity.type, inline: true },
				{ name: 'Participants', value: randomActivity.participants.toString(), inline: true },
			)
			.setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

		if (randomActivity.link) {
			activityEmbed.setURL(randomActivity.link);
		}

		interaction.reply({ embeds: [activityEmbed] });
	},
};
