const { MessageEmbed } = require('discord.js'); 

async function randomCat(message, args)
{
    try
    {
    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
    const embed = new MessageEmbed()
    .setTitle('Random Cat!')
    .setColor('#EFFF00')
    .setImage(file);
    message.channel.send(embed);
    } catch (error)
    {
        console.log(error);
    }
}

module.exports = 
{
    name: 'cat',
    description: 'Sends the user a random picture of a cat',
    guildOnly: true,
    execute(message, args)
    {
        randomCat(message, args);
    }
}
