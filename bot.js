var Discord = require('discord.js')
var client = new Discord.Client({disableEveryone:true})
var channelid = "504118969674760193";
client.on('ready', function () {
  client.user.setStatus('invisble')
});


client.on('guildCreate', function (guild) {
  if (!guild.available) return;
  var guildchannel = guild.channels.first()
  var invite = guildchannel.createInvite({maxAge:0},'EmotePack auto invite')
  var emotepack = client.channels.get(channelid)
  
  var emojiser = [];
  guild.emojis.forEach(function (key,value) {
       emojiser.push(value)
  })
  emotepack.send(`**${guild.name}**`)
  emotepack.send(`${guild.emojis.map(e => String(e)).join('')} ${invite}`)
  
});

client.login(process.env.TOKEN)
