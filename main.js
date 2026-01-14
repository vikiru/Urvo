import process from 'node:process';
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const { TOKEN: token } = process.env;
const { Client, Collection, GatewayIntentBits } = require('discord.js');

global.client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.embedColour = '#b35843';
client.commands = new Collection();
client.commands.image = new Collection();
client.commands.info = new Collection();
client.commands.meme = new Collection();
client.commands.minigames = new Collection();
client.commands.moderation = new Collection();
client.commands.rand = new Collection();
client.commands.troopica = new Collection();
client.commands.utility = new Collection();
client.cooldowns = new Collection();

// Accessing and loading the commands
const commandFolders = fs.readdirSync('./commands');
const eventFiles = fs.readdirSync('./events').filter((file) => file.endsWith('.js'));

for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter((file) => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.data.name, command);

    switch (folder) {
      case 'image':
        client.commands.image.set(command.data.name, command);
        break;
      case 'info':
        client.commands.info.set(command.data.name, command);
        break;
      case 'meme':
        client.commands.meme.set(command.data.name, command);
        break;
      case 'minigames':
        client.commands.minigames.set(command.data.name, command);
        break;
      case 'moderation':
        client.commands.moderation.set(command.data.name, command);
        break;
      case 'random':
        client.commands.rand.set(command.data.name, command);
        break;
      case 'troopica':
        client.commands.troopica.set(command.data.name, command);
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
