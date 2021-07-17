module.exports =
{
   name: 'ready',
   once: true,
   execute(client)
   {
    console.log(`${client.user.tag} has logged in`);
    client.user.setPresence({activity: {name: 'Evolving...'}, status: 'online'});     
   } 
};