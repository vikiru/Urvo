const fs = require('fs');
const Discord = require('discord.js');
const {token, prefix} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () =>
{
    console.log(`${client.user.tag} has logged into Discord.`);
});

client.on('message', message =>
{

const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();

});



console.log(token);