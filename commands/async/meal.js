const { MessageEmbed } = require('discord.js');

async function randomMeal(message, args)
{
    try
    {
        const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(response => response.json());
                
        const embed = new MessageEmbed()
        .setTitle(meals[0].strMeal)
        .setColor('#EFFF00')
        .setThumbnail(meals[0].strMealThumb)
        .setURL(meals[0].strSource)
        .addFields(
            {name: 'Category', value: meals[0].strCategory, inline: true},
            {name: 'Area', value: trim(meals[0].strArea, 1024), inline: true},
            {name: 'Instructions', value: meals[0].strInstructions}
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
    name: 'meal',
    description: 'Sends the user a random meal recipe',
    guildOnly: true,
    exectute(message, args)
    {
        randomMeal(message, args);
    }
}
