var Discord = require('discord.js')
var client = new Discord.Client({disableEveryone:true})
var channelid = "504118969674760193";
client.on('ready', function () {
  client.setInterval(function (){
      client.user.setActivity(`with emote packs`, { type: 'PLAYING' })
  },6000)
});
client.on('message',function (message) {
    if (!message.guild) return;
    if (message.content.split(' ')[0] == "!invite") {
       if (!message.content.split(' ')[1]) return message.channel.send(':warning: empty. but cannot be added on our server.')
      var emotepack = client.channels.get(channelid)
       emotepack.send(`**${message.guild.name}**`)
       emotepack.send(`${message.guild.emojis.map(e => String(e)).join('')} ${message.content.split(' ')[1]}`)
       message.channel.send('good, your emote pack has been added. enjoy!')
    }
})



client.login(process.env.TOKEN)
