const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`${client.user.tag} has logged in`);
    client.user.setPresence({ activities: [{ name: '/help' }], status: 'online' });
  },
};
