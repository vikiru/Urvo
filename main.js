const fs = require('fs');
const {Collection, Client} = require('discord.js');
const {token, prefix} = require('./config.json');
const { cpuUsage } = require('process');

global.fetch = require('node-fetch');

const client = new Client();

const asyncCommands = new Collection();
client.commands = new Collection();

const commandFolders = fs.readdirSync('./commands');


// Accessing the commands
for (const folder of commandFolders)
{
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles)
    {
        const command = require(`./commands/${folder}/${file}`);
        if (folder != 'async') client.commands.set(command.name, command);
        else if (folder === 'async') asyncCommands.set(command.name, command);
    }

}

// Handling async commands
client.on('message', async message =>
{
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(asyncCommands.get(commandName))
    { 
        command = asyncCommands.get(commandName);
        command.execute(message, args);
    }
    else return; 
});

// Handling non-async commands
client.on('message', message => 
{
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    command = client.commands.get(commandName);

    if (message.author.bot === true) return;

    if (command != undefined && command.args && !args.length)
    {
        let reply = `You didn't provide any arguments, ${message.author}`;
        if (command.usage)
        {
            reply+= `\nThe proper way to use the command is:\ ${prefix}${command.name} ${command.usage}`;
        }
        return message.channel.send(reply);
    }
    
    if (client.commands.get(commandName))
    {
        try {
            command.execute(message, args);
        } catch (error)
        {
            console.log(error);
            message.reply('There was an error executing the command.');
        }
    }
    else return;
});

// Bot Login & Setup
client.login(token);
client.on ('ready', () =>
{
    console.log(`${client.user.tag} has logged in`);
    client.user.setPresence({activity: {name: 'Evolving...'}, status: 'online'});
})
