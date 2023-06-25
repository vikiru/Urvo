const { Collection, Events, inlineCode } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		const { commands, cooldowns } = client;

		if (interaction.isChatInputCommand()) {
			const requestedCommand = commands.get(interaction.commandName);

			if (!requestedCommand) {
				await interaction.reply({ content: 'A command with that name does not exist.', ephemeral: true });
				return;
			}

			const userId = interaction.user.id;
			const commandName = requestedCommand.data.name;
			const commandCooldown = requestedCommand.cooldown;

			if (!cooldowns.has(commandName)) {
				cooldowns.set(commandName, new Collection());
			}

			const currentTime = Date.now();
			const timestamps = cooldowns.get(commandName);
			const defaultCooldown = 5;
			const cooldownAmount = (commandCooldown ?? defaultCooldown) * 1000;

			if (timestamps.has(userId)) {
				const expirationTime = timestamps.get(userId) + cooldownAmount;
				if (currentTime < expirationTime) {
					const timeLeft = Math.round(expirationTime / 1000);
					return interaction.reply({
						content: `Please wait, you are on a cooldown for ${inlineCode(
							commandName,
						)}. You can use it again <t:${timeLeft}:R>.`,
						ephemeral: true,
					});
				}
			}

			timestamps.set(interaction.user.id, currentTime);
			setTimeout(() => timestamps.delete(userId), cooldownAmount);

			try {
				await requestedCommand.execute(interaction);
			} catch (error) {
				await interaction.reply({
					content: `An error occurred executing ${inlineCode(interaction.commandName)}`,
					ephemeral: true,
				});
				console.log(error);
			}
		}
	},
};
