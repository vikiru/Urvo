const { MessageEmbed } = require('discord.js');

// Fetch a random fox and send into the chat via an embed
async function randomFox(message, args) {
  try {
    const { image } = await fetch('https://randomfox.ca/floof/').then((response) => response.json());

    const embed = new MessageEmbed().setTitle('Random Fox!').setColor('#EFFF00').setImage(image);
    message.channel.send(embed);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  name: 'fox',
  description: 'Sends the user a random picture of a fox',
  guildOnly: true,
  execute(message, args) {
    randomFox(message, args);
  }
};
