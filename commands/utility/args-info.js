module.exports = 
{
    name: 'args-info',
    description: 'Information about the specified arguements',
    args: true,
    execute (message, args)
    {
        message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
    }
};