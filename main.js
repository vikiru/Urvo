const fs = require('fs');
const Discord = require('discord.js');
const {token, prefix} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders)
{
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    console.log(folder);
    console.log(commandFiles);

    for (const file of commandFiles)
    {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }

}

client.once('ready', () =>
{
    console.log(`${client.user.tag} has logged into Discord.`);
});

client.on('message', message =>
{

const args = message.content.slice(prefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();

if (!client.commands.has(commandName)) message.channel.send('The entered command does not exist');

const command = client.commands.get(commandName);

if (command.args && !args.length)
{
    let reply = `You didn't provide any arguements, ${message.author}`;
    if (command.usage)
    {
        reply+= `\nThe proper way to use the command is:\ ${prefix}${command.name} ${command.usage}`;
    }

    return message.channel.send(reply);
}

try{
    command.execute(message, args);
} catch (commandError) {
    console.error(commandError);
    message.reply('There was an error executing the specified command');
}

});
