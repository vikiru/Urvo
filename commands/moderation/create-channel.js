const { CategoryChannel, Collection, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('create-channel')
		.setDescription('Create a new channel of the specified type'),
	args: true,
	usage: '<name> <type>',
	permissions: 'MANAGE_CHANNELS',
	guildOnly: true,
	execute(message, args) {
		message.guild.channels
			.create(args[0], {
				type: args[1],
			})
			.then((channel) => {
				const channels = message.guild.channels.cache;
				const categories = new Collection();

				// Add all the categories of the server into the categories collection
				for (c of channels) {
					if (c[1].type === 'category') {
						categories.set(c[1].name, c[1].id);
					}
				}

				// Assign the newly created channel to Text Channels or Voice Channels
				// depending on the type, if either category does not exist
				// then add channel to the first category
				switch (args[1]) {
					case 'text':
						const textID = categories.get('Text Channels');
						if (textID === undefined) channel.setParent(categories.first());
						else channel.setParent(textID);
						break;
					case 'voice':
						const voiceID = categories.get('Voice Channels');
						if (voiceID === undefined) channel.setParent(categories.first());
						else channel.setParent(voiceID);
						break;
				}
			});
	},
};
