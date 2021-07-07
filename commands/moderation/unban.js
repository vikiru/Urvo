module.exports =
{
    name: 'unban',
    description: 'Unbans the mentioned user from the server',
    guildOnly: true,
    execute(message, args)
    {
        const user = message.mentions.users.first();
        guild.members.unban(user);        
    }
};