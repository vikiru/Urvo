module.exports =
{
    name: 'ban',
    description: 'Bans the mentioned user from the server',
    args: true,
    usage: `<user>`,
    permissions: 'BAN_MEMBERS',
    guildOnly: true,
    execute(message, args)
    {
        const user = message.mentions.users.first();
        console.log(args);
        if (user.id === message.author.id) message.reply(`You can't ban yourself`);
        else if (user != undefined && user != message.author 
            && message.author.hasPermission('BAN_MEMBERS') && client.hasPermission('BAN_MEMBERS'))
        {
            message.guild.ban(user);
        }
        else message.reply('You need to mention a user');

    }
};