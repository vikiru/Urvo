module.exports =
{
    name: 'kick',
    description: 'Kicks the mentioned user from the server',
    args: true,
    usage: '<user>',
    guildOnly: true,
    permissions: 'KICK_MEMBERS',
    execute(message, args)
    {
        const user = message.mentions.members.first();
        if (user.id == message.author.id) message.reply(`You can't kick yourself`);
        else user.kick();
    }
};