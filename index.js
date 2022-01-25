const Discord = require('discord.js')
const client = new Discord.Client(
    { intents: [ 'GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES' ] }
)

client.login(process.env.token)

client.on('ready', () => {
    console.log('Bot ONLINE')
} )

client.on('messageCreate', (message) => {
    if (message.content == '!youtube') {
        message.channel.send('Questo è il mio canale: https://www.youtube.com/')
    }

    if(message.content == 'Ciao') {
        message.channel.send('Benvenuto nella nostra community')
    }

    if (message.content == '!embed') {
        var embed = new Discord.MessageEmbed()
            .setTitle('Titolo embed')
            .setDescription(`${message.author.username} ha scritto il messaggio`)
        message.channel.send({ embeds: [embed] })
    }
} )
