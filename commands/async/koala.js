const { MessageEmbed } = require('discord.js');

async function randomKoala(message, args)
{
    try
    {
        const { link } = await fetch('https://some-random-api.ml/img/koala').then(response => response.json());
    
        const embed = new MessageEmbed()
        .setTitle('Random Koala!')
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
    name: 'koala',
    description: 'Sends the user a random picture of a koala',
    guildOnly: true,
    exectute(message, args)
    {
        randomKoala(message, args);
    }
}
