module.exports =
{
    name: 'kick',
    description: 'Kicks the mentioned user from the server',
    guildOnly: true,
    execute(message, args)
    {
        const user = message.mentions.members.first();
        if (user.id == message.author.id) message.reply(`You can't kick yourself`);
        //else if (user != undefined && user.kickable) user.kick();
    }
};