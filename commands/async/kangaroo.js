const { MessageEmbed } = require('discord.js');

async function randomKangaroo(message, args)
{
    try
    {
        const { link } = await fetch('https://some-random-api.ml/img/kangaroo').then(response => response.json());

        const embed = new MessageEmbed()
        .setTitle('Random Kangaroo!')
        .setColor('#EFFF00')
        .setImage(link);
        message.channel.send(embed);
    }
    catch (error)
    {
        console.log(error);
    }
}
module.exports = 
{
    name: 'kangaroo',
    description: 'Sends the user a random picture of a kangaroo',
    guildOnly: true,
    exectute(message, args)
    {
        randomKangaroo(message, args);
    }
}
