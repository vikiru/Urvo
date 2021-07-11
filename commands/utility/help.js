const { MessageEmbed } = require("discord.js")

module.exports =
{
    name: 'help',
    description: 'Sends an embed containing all of the possible commands',
    guildOnly: true,
    execute(message, args)
    {
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
    }
}