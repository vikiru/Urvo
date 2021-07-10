const { MessageEmbed } = require('discord.js');

async function randomQuote(message, args)
{
    try
    {
        const quote = await fetch('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json').then(response => response.json());

        const embed = new MessageEmbed()
        .setTitle('Random Quote!')
        .setColor('#EFFF00')
        .setURL(quote.quoteLink)
        .addFields(
            {name: 'Quote', value: quote.quoteText},
            {name: 'Author', value: quote.quoteAuthor}
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
    name: 'quote',
    description: 'Sends the user a random quote',
    guildOnly: true,
    exectute(message, args)
    {
        randomQuote(message, args);
    }
}
