const fs = require('fs');
const { Collection, Client } = require('discord.js');
const { token, prefix } = require('./config.json');

global.fetch = require('node-fetch');

global.client = new Client();
const queue = new Map();

client.commands = new Collection();
//-----------------------------------------//
client.commands.fun = new Collection();
client.commands.image = new Collection();
client.commands.minigames = new Collection();
client.commands.moderation = new Collection();
client.commands.music = new Collection();
client.commands.utility = new Collection();
//-----------------------------------------//

const commandFolders = fs.readdirSync('./commands');
const eventFiles = fs.readdirSync('./events').filter((file) => file.endsWith('.js'));

// Accessing and loading the commands
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter((file) => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);

		client.commands.set(command.name, command);

		switch (folder) {
			case 'fun':
				client.commands.fun.set(command.name, command);
				break;
			case 'image':
				client.commands.image.set(command.name, command);
				break;
			case 'minigames':
				client.commands.minigames.set(command.name, command);
				break;
			case 'moderation':
				client.commands.moderation.set(command.name, command);
				break;
			case 'music':
				client.commands.music.set(command.name, command);
				break;
			case 'utility':
				client.commands.utility.set(command.name, command);
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
