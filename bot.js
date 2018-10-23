var Discord = require('discord.js')
var client = new Discord.Client({disableEveryone:true})
var channelid = "504118969674760193";
client.on('ready', function () {
  client.setInterval(function (){
      client.user.setActivity(`with ${client.guilds.length} guilds in emote pack`, { type: 'PLAYING' })
  },6000)
});
client.on('message',function (message) {
    if (!message.guild) return;
    if (message.content.split(' ')[0] == "!invite") {
       if (!message.content.split(' ')[1]) return message.channel.send(':warning: empty. but cannot be added on our server.')
      var emotepack = client.channels.get(channelid)
       emotepack.send(`**${guild.name}**`)
       emotepack.send(`${guild.emojis.map(e => String(e)).join('')} ${message.content.split(' ')[1]}`)
    }
})



client.login(process.env.TOKEN)
