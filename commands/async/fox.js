const { MessageEmbed } = require('discord.js');

async function randomFox(message, args)
{
    try
    {
        const { image } = await fetch('https://randomfox.ca/floof/').then(response => response.json());

        const embed = new MessageEmbed()
        .setTitle('Random Fox!')
        .setColor('#EFFF00')
        .setImage(image);
        message.channel.send(embed);
    }
    catch (error)
    {
        console.log(error);
    }
}

module.exports = 
{
    name: 'fox',
    description: 'Sends the user a random picture of a fox',
    guildOnly: true,
    exectute(message, args)
    {
        randomFox(message, args);
    }
}
