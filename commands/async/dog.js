const { MessageEmbed } = require('discord.js'); 

// Fetch a random dog and send into the chat via an embed
async function randomDog(message, args)
{
    try 
    {
        const { url } = await fetch('https://random.dog/woof.json').then(response => response.json());
        
        const embed = new MessageEmbed()
        .setTitle('Random Dog!')
        .setColor('#EFFF00')
        .setImage(url);
        message.channel.send(embed);
    } catch (error) 
    {
        console.log(error);
    }
}
module.exports = 
{
    name: 'dog',
    description: 'Sends the user a random picture of a dog',
    guildOnly: true,
    execute(message, args)
    {
        randomDog(message, args);
    }
}
