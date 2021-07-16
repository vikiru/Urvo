const { MessageEmbed } = require("discord.js")
const { prefix } = require('../../config.json');

function help(message, args)
{
    const data = [];
    const { asyncCommands, commands } = message.client;

    if (!args.length)
    {
        data.push(asyncCommands.map(command => command.name).join(', '));
        data.push(commands.map(command => command.name).join(', '));
        data.push(`\nYou can send ${prefix}help [command name] to retrieve all of the info on the specific command`);

        const helpEmbed = new MessageEmbed()
        .setTitle('List of Commands')
        .setColor('#EFFF00')
        .setThumbnail('http://www.clker.com/cliparts/P/t/7/o/9/W/help-hi.png')
        .setDescription('All of the possible commands that can be used')
        .addFields(
            {name: 'Commands', value: data}
        )
        .setTimestamp()
        .setFooter(`Prefix: ${prefix}`);
        
        message.channel.send(helpEmbed);
    }
}

module.exports =
{
    name: 'help',
    description: 'Sends an embed containing all of the possible commands',
    guildOnly: true,
    execute(message, args)
    {
        help(message, args);
        /*
        const helpEmbed = new MessageEmbed()
        .setTitle('List of Commands')
        .setColor('#EFFF00')
        .setThumbnail('http://www.clker.com/cliparts/P/t/7/o/9/W/help-hi.png')
        .setDescription('All of the possible commands that can be used')
        .addFields(
            {name: 'fun' , value: 'anime, bird, cat, dog, fox, joke, kangaroo, koala, meal, panda, quote'},
            {name: 'moderation', value: 'ban, create-channel, delete-channel, kick, unban'},
            {name: 'utility', value: 'help, prune'}
            )
        .setTimestamp()
        .setFooter('Thanks!');
        message.channel.send(helpEmbed);
            */

    }
}