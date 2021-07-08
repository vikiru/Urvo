const { MessageEmbed } = require("discord.js")

module.exports =
{
    name: 'help',
    description: 'Deletes a specified number of messages in the given channel',
    guildOnly: true,
    execute(message, args)
    {
        const helpEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('List of Commands')
        .setDescription('All the possible commands that can be used')
        .addFields(
            {name: 'fun' , value: 'test'},
            {name: 'moderation', value: 'ban, create-channel, delete-channel, kick, unban'},
            {name: 'utility', value: 'args-info, help, prune'}
            )
        .setTimestamp()
        .setFooter('Thanks!');
        message.channel.send(helpEmbed);    

    }
}