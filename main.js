const fs = require('fs');
const {Collection, Client} = require('discord.js');
const {token, prefix} = require('./config.json');

const client = new Client();

client.commands = new Collection();

const commandFolders = fs.readdirSync('./commands');

// Accessing the commands
for (const folder of commandFolders)
{
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles)
    {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }

}

// Commands activated on message
client.on('message', message =>
{
if (message.author.bot === true) return;

const args = message.content.slice(prefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();

const command = client.commands.get(commandName);

/*
if (command.guildOnly && message.channel.type === 'dm')
{
    return message.reply('The specified command is not meant to be used in DMS');
}*/

/*

*/

try{
    if (command.name != 'help') command.execute(message, args);
    else command.execute(message);
} catch (commandError) {
    console.error(commandError);
    if (!client.commands.has(commandName)) message.reply('The entered command does not exist');
    else if (command != undefined && command.args && !args.length)
    {
        let reply = `You didn't provide any arguments, ${message.author}`;
        if (command.usage)
        {
            reply+= `\nThe proper way to use the command is:\ ${prefix}${command.name} ${command.usage}`;
        }
    
    return message.channel.send(reply);
    }
    else message.reply('There was an error executing the specified command');
}
});

client.login(token);
client.on ('ready', () =>
{
    console.log(`${client.user.tag} has logged in`);
    client.user.setPresence({activity: {name: 'Evolving...'}, status: 'online'});
})
