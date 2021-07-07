module.exports =
{
    name: 'kick',
    description: 'Kicks the mentioned user from the server',
    guildOnly: true,
    execute(message, args)
    {
        const user = message.mentions.members.first();
        guild.kick(user);
    }
};