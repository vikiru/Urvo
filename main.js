const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () =>
{
    console.log (`${client.user.tag} has logged into Discord.`);
});

console.log('token');