const { MessageEmbed, SlashCommandBuilder } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function randomActivity(message, args) {
	try {
		const activity = await fetch('https://www.boredapi.com/api/activity').then((response) => response.json());

		const activityEmbed = new MessageEmbed()
			.setTitle('Random Activity Suggestion!')
			.setColor('#EFFF00')
			.setThumbnail(
				'https://res.cloudinary.com/teepublic/image/private/s--Zs-fk3E1--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_484849,e_outline:48/co_484849,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1499630965/production/designs/1725535_0.jpg',
			)
			.setURL(activity.link)
			.addFields(
				{ name: 'Activity', value: activity.activity, inline: true },
				{ name: 'Type', value: activity.type, inline: true },
				{ name: 'Participants', value: activity.participants.toString(), inline: true },
			);

		message.channel.send({ embeds: [activityEmbed] });
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	data: new SlashCommandBuilder().setName('bored').setDescription('Suggest a random activity to the user'),
	guildOnly: true,
	execute(message, args) {
		randomActivity(message, args);
	},
};
