const {guild} = require('discord.js');

module.exports =
{
    name: 'ban',
    description: 'Bans the mentioned user from the server',
    guildOnly: true,
    execute(message, args)
    {
        const user = message.mentions.users.first();
        guild.members.ban(user);        
    }
};