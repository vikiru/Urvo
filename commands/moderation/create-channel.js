module.exports =
{
    name: 'create-channel',
    description: 'Create a new channel of specified type',
    args: true,
    usage: '<name> <type>',
    permissions: 'MANAGE_CHANNELS',
    guildOnly: true,
    execute(message, args)
    {
        message.guild.channels.create(args[0], 
            {
                type: args[1],
            })
            .then((channel) =>
            {
                const textID = '851621332587905085';
                const voiceID = '851621332587905086';
                switch (args[1])
                {
                    case 'text':
                        channel.setParent(textID);
                    break;
                    case 'voice':
                        channel.setParent(voiceID);
                    break;
                }
            })
    }
};