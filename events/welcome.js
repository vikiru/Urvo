const Canvas = require('canvas');
const { MessageAttachment } = require('discord.js');

async function welcome(member) {
  const channel = member.guild.channels.cache.get(member.guild.systemChannelID);

  const canvas = Canvas.createCanvas(700, 250);
  const context = canvas.getContext('2d');

  const background = await Canvas.loadImage('./wallpaper.jpg');
  context.drawImage(background, 0, 0, canvas.width, canvas.height);

  context.strokeStyle = `#74037b`;
  context.strokeRect(0, 0, canvas.width, canvas.height);

  context.font = '40px sans-serif';
  context.fillStyle = '#ffffff';
  context.fillText(`\nWelcome to the server, \n${member.displayName}`, canvas.width / 2.5, canvas.height / 3.5);

  context.beginPath();
  context.arc(125, 125, 100, 0, Math.PI * 2, true);
  context.closePath();
  context.clip();

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
  context.drawImage(avatar, 25, 25, 200, 200);

  const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome.png');
  channel.send(`Welcome to the server!, ${member.displayName}`, attachment);
}

module.exports = {
  name: 'guildMemberAdd',
  execute(member) {
    welcome(member);
  }
};
