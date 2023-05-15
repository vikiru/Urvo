const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (interaction.isChatInputCommand()) {
			const requestedCommand = client.commands.get(interaction.commandName);
			console.log(requestedCommand);

			if (!requestedCommand) {
				await interaction.reply({ content: 'A command with that name does not exist.', ephemeral: true });
				return;
			}

			try {
				await requestedCommand.execute(interaction);
			} catch (error) {
				await interaction.reply({ content: `An error occurred executing {$interaction.commandName}`, ephemeral: true });
				console.log(error);
			}
		}
	},
};
