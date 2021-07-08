module.exports =
{
    name: 'prune',
    description: 'Deletes a specified number of messages in the given channel',
    guildOnly: true,
    execute(message, args)
    {
        if (args[0] >= 2 && args[0] <= 100) message.channel.bulkDelete(args[0] + 1);
    }
}