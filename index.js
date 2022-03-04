const Discord = require('discord.js');
const client = new Discord.Client();

client.login("");

client.on('message', message => {
    const allowedChannels = ['music',  'musica', '『🎵』musica', 'música'];
    const musicChannel = client.channels.cache.find(channel => allowedChannels.includes(channel.name.toLocaleLowerCase()));
    const isMusicMessage = msg => msg.startsWith('!p ') || msg.startsWith('-p ') || msg.startsWith('p ');

    if(!message.author.bot &&
        isMusicMessage(message.content.toLocaleLowerCase()) &&
        !allowedChannels.includes(message.channel.name.toLocaleLowerCase()))
    {
        message.reply("Pone la musica donde se debe!")
        musicChannel.send(message.content)
        message.delete();
    }
});


