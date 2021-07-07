const Discord = require('discord.js');

const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () =>
{
    console.log (`${client.user.tag} has logged into Discord.`);
});

console.log(config.token);