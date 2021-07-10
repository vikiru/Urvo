const { MessageEmbed } = require('discord.js'); 

async function randomBird(message, args)
{
    try 
    {
    const { link } = await fetch('https://some-random-api.ml/img/birb').then(response => response.json());
        
    const embed = new MessageEmbed()
    .setTitle('Random Bird!')
    .setColor('#EFFF00')
    .setImage(link);
    message.channel.send(embed);
    } catch (error) 
    {
        console.log(error);
    }
}

module.exports = 
{
    name: 'bird',
    description: 'Sends the user a random picture of a bird',
    guildOnly: true,
    execute(message, args)
    {
        randomBird(message,args);
    }
}
