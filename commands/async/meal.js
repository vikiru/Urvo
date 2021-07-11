const { MessageEmbed } = require('discord.js');

// Fetch a random meal and send into the chat via an embed
async function randomMeal(message, args)
{
    try
    {
        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

        const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(response => response.json());
               
        const embed = new MessageEmbed()
        .setTitle(meals[0].strMeal)
        .setColor('#EFFF00')
        .setThumbnail(meals[0].strMealThumb)
        .setURL(meals[0].strSource)
        .addFields(
            {name: 'Category', value: meals[0].strCategory, inline: true},
            {name: 'Area', value: meals[0].strArea, inline: true},
            {name: 'Instructions', value: trim(meals[0].strInstructions, 1024)}
        );
        message.channel.send(embed);
    } catch (error)
    {
        console.log(error);
    }
}
module.exports = 
{
    name: 'meal',
    description: 'Sends the user a random meal recipe',
    guildOnly: true,
    execute(message, args)
    {
        randomMeal(message, args);
    }
}
