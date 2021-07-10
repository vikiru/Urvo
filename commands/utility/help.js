const { MessageEmbed } = require("discord.js")

module.exports =
{
    name: 'help',
    description: 'Deletes a specified number of messages in the given channel',
    guildOnly: true,
    execute(message, args)
    {
        const helpEmbed = new MessageEmbed()
        .setColor('#EFFF00')
        .setThumbnail('http://www.clker.com/cliparts/P/t/7/o/9/W/help-hi.png')
        .setTitle('List of Commands')
        .setDescription('All of the possible commands that can be used')
        .addFields(
            {name: 'fun' , value: 'bird, cat, dog, fox, joke, kangaroo, koala, meal, panda, quote'},
            {name: 'moderation', value: 'ban, create-channel, delete-channel, kick, unban'},
            {name: 'utility', value: 'help, prune'}
            )
        .setTimestamp()
        .setFooter('Thanks!');
        message.channel.send(helpEmbed);
    }
}