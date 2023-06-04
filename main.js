const fs = require('node:fs');
const path = require('node:path');

const { token, prefix } = require('./config.json');

const { Client, Collection, GatewayIntentBits } = require('discord.js');

global.client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.prefix = prefix;
client.embedColour = '#b35843';
client.commands = new Collection();
client.commands.fun = new Collection();
client.commands.image = new Collection();
client.commands.minigames = new Collection();
client.commands.moderation = new Collection();
client.commands.music = new Collection();
client.commands.utility = new Collection();

// Accessing and loading the commands
const commandFolders = fs.readdirSync('./commands');
const eventFiles = fs.readdirSync('./events').filter((file) => file.endsWith('.js'));

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter((file) => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);

		client.commands.set(command.data.name, command);

		switch (folder) {
			case 'fun':
				client.commands.fun.set(command.data.name, command);
				break;
			case 'image':
				client.commands.image.set(command.data.name, command);
				break;
			case 'minigames':
				client.commands.minigames.set(command.data.name, command);
				break;
			case 'moderation':
				client.commands.moderation.set(command.data.name, command);
				break;
			case 'music':
				client.commands.music.set(command.data.name, command);
				break;
			case 'utility':
				client.commands.utility.set(command.data.name, command);
				break;
		}
	}
}

// Accessing and handling the events
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

// Bot Login & Setup
client.login(token);
