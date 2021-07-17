const { MessageEmbed } = require("discord.js");

async function rps(message, args)
{
    const user = message.mentions.members.first();
    if (user.id === message.author.id) message.reply(`You can't play rps with yourself!`);
    else 
    {
        const options = ['rock', 'paper', 'scissors'];
        const filter = response => 
        {
            return options.some(o => o.toLowerCase() === response.content.toLowerCase())
        };

        message.channel.send(`Please enter your choice: 'rock', 'paper', 'scissors'`)
        .then(() => 
        {
            message.channel.awaitMessages(filter, { max : 1, time: 30000})
            .then(result => 
                {
                    const bot_choice = options[Math.floor(Math.random() * options.length)];
                    
                    var outcome = "";

                    // Paper beating rock
                    if (result.first().content === 'paper' && bot_choice === 'rock' || bot_choice === 'paper' && result.first().content === 'rock')
                    {
                        if (result.first().content === 'rock') 
                        {
                            var outcome = `<@${client.user.id}> has won the game`;
                        }
                        else 
                        {
                            var outcome = `<@${message.author.id}> has won the game`;
                        }
                    }

                    // Rock beating scissors
                    if (result.first().content === 'rock' && bot_choice === 'scissors' || bot_choice === 'rock' && result.first().content === 'scissors')
                    {
                        if (result.first().content === 'rock') 
                        {
                            var outcome = `<@${message.author.id}> has won the game`;
                        }
                        else 
                        {
                            var outcome = `<@${client.user.id}> has won the game`;
                        }
                    }

                    // Scissors beating paper
                    if (result.first().content === 'scissors' && bot_choice === 'paper' || bot_choice === 'scissors' && result.first().content === 'paper')
                    {
                        if (result.first().content === 'scissors') 
                        {
                            var outcome = `<@${message.author.id}> has won the game`;
                        }
                        else 
                        {
                            var outcome = `<@${client.user.id}> has won the game`;
                        }
                    }

                    // Tie game 
                    if (result.first().content === bot_choice)
                    {
                        var outcome = 'Tie!';
                    }

                    // Create the result embed
                    const resultEmbed = new MessageEmbed()
                    .setTitle(`Rock-Paper-Scissors Match between ${message.author.username} and ${client.user.username}`)
                    .setColor('#EFFF00')
                    .setThumbnail('https://ausm.org.uk/wp-content/uploads/2015/02/rock-paper-scissors-hands.jpg')
                    .addFields (
                        {name: `${message.author.username}'s Choice: `, value: result.first().content, inline: true},
                        {name: `${client.user.username}'s Choice: `, value: bot_choice, inline: true},
                        {name: 'Outcome', value: outcome}
                    )
                    .setTimestamp();

                    // Send the embed
                    message.channel.send(resultEmbed);
                })
        });

    }
}

module.exports =
{
    name: 'rps',
    description: 'Play Rock-Paper-Scissors with the mentioned user',
    args: true,
    usage: '<user>',
    guildOnly: true,
    execute(message, args)
    {
        rps(message,args);
    }
};