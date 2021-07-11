const { MessageEmbed } = require('discord.js');
const queryString = require('querystring');

// Fetch the MAL listing of an anime given by the user's args 
// and display its respective info
async function retrieveAnime(message, args)
{
    try
    {
        const query = queryString.stringify({query: args.join(' ')});

        const { results } = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}`).then(response => response.json());;
        const animeInfo = results[0];
        
        const embed = new MessageEmbed()
        .setTitle(animeInfo.title)
        .setColor('#EFFF00')
        .setURL(animeInfo.url)
        .setThumbnail(animeInfo.image_url)
        .addFields (
            {name: 'Rating', value: animeInfo.rated, inline: true},
            {name: 'Type', value: animeInfo.type, inline: true},
            {name: 'Score', value: animeInfo.score, inline: true}, 
            {name: 'Episodes', value: animeInfo.episodes, inline: true},
            {name: 'Start Date', value: animeInfo.start_date = animeInfo.start_date.split('T')[0], inline: true},
            {name: 'End Date', value: animeInfo.end_date = animeInfo.end_date.split('T')[0], inline: true},
            {name: 'Description', value: animeInfo.synopsis}
        );
        message.channel.send(embed);
    } catch (error)
    {
        console.log(error);
    }
}

module.exports = 
{
    name: 'anime',
    description: 'Sends the user information about a queried anime, obtained from MAL',
    guildOnly: true,
    execute(message, args)
    {
        retrieveAnime(message, args);
    }
}
