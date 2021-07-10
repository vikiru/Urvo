const { MessageEmbed } = require('discord.js');

async function randomJoke(message, args)
{
    try
    {
        const jokes = await fetch('https://official-joke-api.appspot.com/jokes/ten').then(response => response.json());
        
        const embed = new MessageEmbed()
        .setColor('#EFFF00')
        .setTitle('Random Joke!')
        .setThumbnail('https://logos.textgiraffe.com/logos/logo-name/Joke-designstyle-summer-m.png')
        .addFields( 
            {name: 'Setup', value: jokes[0].setup},
            {name: 'Punchline', value: jokes[0].punchline}
        );
        message.channel.send(embed);
    }
    catch (error)
    {
        console.log(error);
    }
}

module.exports = 
{
    name: 'joke',
    description: 'Tells the user a random joke',
    guildOnly: true,
    execute(message, args)
    {
    }
}