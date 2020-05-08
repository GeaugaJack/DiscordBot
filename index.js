const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "*insert here*";

const PREFIX = '!';
var version = "1.0.1"

bot.on("ready", () => {
    console.log("This bot is online!");
})

bot.on("message", message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply('pong!')
            break;
        case 'website':
            message.reply("google.com")
            break;
        case 'info':
            if(args[1] === 'version'){
                message.reply('Version ' + version)
            }
            else{
                message.reply('Invalid argument')
            break;    
            }
        case 'clear':
            if(!args[1]) return message.reply("Error: Please define again with a second arg")
            message.channel.bulkDelete(args[1]);
            break;
        case 'asmr':
            message.reply('https://www.youtube.com/watch?v=oXp0hTkXiks&list=PLlm3loo5__JBrUCPhffoW9mIMWVr33ZXY')
            break;
        case 'embed':
            var embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Simp King')
            .setThumbnail(message.author.avatarURL())
            .setTimestamp()
            .addField('Current Server', message.guild.name, true)
            .addField('User', message.author.username);
            message.reply(embed);
            break;
        
    }
})

bot.login(token);
