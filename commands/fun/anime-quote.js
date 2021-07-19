const { MessageEmbed } = require('discord.js');
const queryString = require('querystring');

// Fetch a random anime quote, then use the anime name from the random quote
// to search for the MAL anime listing
async function randomAnimeQuote(message, args) {
  try {
    const animeQuote = await fetch('https://animechan.vercel.app/api/random').then((response) => response.json());
    const anime = animeQuote.anime; // the name of the anime from the random quote

    const query = queryString.stringify({ query: anime });

    const { results } = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}`).then((response) =>
      response.json()
    );
    const animeInfo = results[0];

    const embed = new MessageEmbed()
      .setTitle(`Random Quote from ${animeInfo.title}`)
      .setColor('#EFFF00')
      .setURL(animeInfo.url)
      .setThumbnail(animeInfo.image_url)
      .addFields({ name: 'Quote', value: animeQuote.quote }, { name: 'Character', value: animeQuote.character });
    message.channel.send(embed);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  name: 'anime-quote',
  description: 'Sends the user a random quote from an anime',
  guildOnly: true,
  execute(message, args) {
    randomAnimeQuote(message, args);
  }
};
