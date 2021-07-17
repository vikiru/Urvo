const fs = require('fs');
const { Collection, Client } = require('discord.js');
const { token, prefix } = require('./config.json');
const { cpuUsage } = require('process');

global.fetch = require('node-fetch');

global.client = new Client();


client.minigames = new Collection();
client.moderation = new Collection();
client.utility = new Collection();

client.asyncCommands = new Collection();
client.commands = new Collection();

const commandFolders = fs.readdirSync('./commands');
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

// Accessing the commands
for (const folder of commandFolders)
{
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles)
    {
        const command = require(`./commands/${folder}/${file}`);
        if (folder != 'async') 
        {
            client.commands.set(command.name, command);
            if (folder === 'minigames') client.minigames.set(command.name, command);
            if (folder === 'moderation') client.moderation.set(command.name, command);
            if (folder === 'utility') client.utility.set(command.name, command);
        }
        else if (folder === 'async') client.asyncCommands.set(command.name, command);
    }

}

// Accessing and handling the events
for (const file of eventFiles)
{
    const event = require(`./events/${file}`);
    if (event.once)
    {
        client.once(event.name, (...args) => event.execute(...args, client));
    }
    else 
    {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

// Bot Login & Setup
client.login(token);