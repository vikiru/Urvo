const fs = require('fs');
const {Collection, Client, MessageEmbed} = require('discord.js');
const {token, prefix} = require('./config.json');
const { default: fetch } = require('node-fetch');

const client = new Client();

client.commands = new Collection();

const commandFolders = fs.readdirSync('./commands');


// Accessing the commands
for (const folder of commandFolders)
{
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles)
    {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }

}

// Handling async commands
client.on('message', async message =>
{
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    const querystring = require ('querystring');
    const query = querystring.stringify({query: args.join(' ')});
    const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str); 

    if (commandName === 'bird')
    {
        const { link } = await fetch('https://some-random-api.ml/img/birb').then(response => response.json());
        message.channel.send({files: [link]});
    }
    if (commandName === 'cat')
    {
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        message.channel.send(file);

    }
    if (commandName === 'dog')
    {
        const { url } = await fetch('https://random.dog/woof.json').then(response => response.json());
        message.channel.send({files: [url]});
    }
    if (commandName === 'anime')
    {
        const { results } = await fetch(`https://api.jikan.moe/v3/search/${commandName}?q=${query}`).then(response => response.json());;
        const animeInfo = results[0];
        
        const embed = new MessageEmbed()
        .setColor('#EFFF00')
        .setTitle(animeInfo.title)
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
    }
    if (commandName === 'joke')
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
    if (commandName === 'panda')
    {
        const { link } = await fetch('https://some-random-api.ml/img/panda').then(response => response.json());
        message.channel.send({files: [link]});
    }
    if (commandName === 'fox')
    {
        const { image } = await fetch('https://randomfox.ca/floof/').then(response => response.json());
        message.channel.send({files: [image]});
    }
    if (commandName === 'koala')
    {
        const { link } = await fetch('https://some-random-api.ml/img/koala').then(response => response.json());
        message.channel.send({files: [link]});
    }
    if (commandName === 'kangaroo')
    {
        const { link } = await fetch('https://some-random-api.ml/img/kangaroo').then(response => response.json());
        message.channel.send({files: [link]});
    }
    if (commandName === 'meal')
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
    if (commandName === 'quote')
    {
        const quote = await fetch('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json').then(response => response.json());
        console.log(quote.quoteText);
        console.log(quote.quoteAuthor);
        
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

});

// Handling Commands
client.on('message', message =>
{
if (message.author.bot === true) return;

const args = message.content.slice(prefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();

const command = client.commands.get(commandName);

if (command != undefined && command.guildOnly && message.channel.type === 'dm')
{
    return message.reply('The specified command is not meant to be used in DMS');
}

if (args && command != undefined)
{
try{
    if (command.name != 'help') command.execute(message, args);
    else command.execute(message);
} catch (commandError) {
    //console.error(commandError);
    if (command != undefined && command.args && !args.length)
    {
        let reply = `You didn't provide any arguments, ${message.author}`;
        if (command.usage)
        {
            reply+= `\nThe proper way to use the command is:\ ${prefix}${command.name} ${command.usage}`;
        }
    
    return message.channel.send(reply);
    }
    else message.reply('There was an error executing the specified command');
}
}
else message.reply('The entered command does not exist');
});

client.login(token);
client.on ('ready', () =>
{
    console.log(`${client.user.tag} has logged in`);
    //client.user.setAvatar('https://image.winudf.com/v2/image/Y29tLmNvb2xib3lhbmltZS5zeW1waG9ueV9zY3JlZW5fM18xNTI4MDc4Mjg4XzAwMw/screen-3.jpg?fakeurl=1&type=.jpg');
    client.user.setPresence({activity: {name: 'Evolving...'}, status: 'online'});
})
