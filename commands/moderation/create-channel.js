module.exports =
{
    name: 'create-channel',
    description: 'Create a new channel of specified type',
    args: true,
    usage: '<name>',
    permissions: 'MANAGE_CHANNELS',
    guildOnly: true,
    execute(message, args)
    {
        message.guild.channels.create(args[0]);
    }
};