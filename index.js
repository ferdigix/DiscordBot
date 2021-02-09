const Discord = require('discord.js');

const bot = new Discord.Client();
const ytdl = require("ytdl-core");
const PREFIX = 'xd!';

bot.on ('ready', () => {
    console.log(`${bot.user.tag} is now online.`);
    bot.user.setActivity('with myself | xd!help');
});

bot.on ('message', async message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    let args = message.content.slice(PREFIX.length).trim().split(" ");
    const command = args.shift().toLowerCase();

    const users = (message.mentions.users.first() || message.author);

    if(command === 'hello'){
        message.channel.send(`Hello <@${users.id}>, How is your day?`);
    }
    else if(command === 'guru'){
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/178396872778448896/774245083381235722/1.gif')

        message.channel.send(attachment);
    }
    else if(command === 'help'){

        const embed = new Discord.MessageEmbed()
        .setTitle('Pepega Bot Commands')
        .setAuthor('Mr.Pepega', 'https://imgur.com/zTarVk1.png')
        .setThumbnail('https://imgur.com/PkfvOMt.png')
        .addFields(
            { name: 'xd!hello', value: 'Gets a hello from our lovely bot!'},
            { name: 'xd!guru', value: 'See our lovely PE teacher at DKIS'},
            { name: 'xd!roll', value: "Rolls a dice"},
            { name: 'xd!depressed', value: "I'm ready, depression" },
            { name: 'xd!emotes', value:'Sends a random emote'},
            { name: 'xd!rage1', value:'A dude raging'},
            { name: 'xd!greedy', value:'You Greedy '},
            { name: 'xd!rage2', value:'Fuck you guys seriously'},
            { name: 'xd!dogshit', value:'Dog shit'},
            { name: 'xd!rage3', value:'A dude raging'},
            { name: 'xd!stupid', value:'Stupid'},
        )
        .setFooter('Ferdigix#1337', 'https://imgur.com/vpJmrLP.gif')
        .setColor('0x03fcf4')
        message.channel.send(embed);

    }
    else if(command === 'roll'){
        const Dice = (Math.floor(Math.random() * 6) + 1);
        message.channel.send(`<@${users.id}> Rolled a ` + Dice);
    }
    else if(command === 'depressed'){
        const path = require('path');
        
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel){
            return message.channel.send("You need to be in a voice channel!");
        }
        voiceChannel.join().then((connection) =>{
            connection.play(path.join(__dirname,'depressed.mp4'));
        });

    }
    else if(command === 'rage1'){
        const path = require('path');
        
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel){
            return message.channel.send("You need to be in a voice channel!");
        }
        voiceChannel.join().then((connection) =>{
            connection.play(path.join(__dirname,'rage1.mp4'));
        });
    }else if(command === 'greedy'){
        const path = require('path');
        
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel){
            return message.channel.send("You need to be in a voice channel!");
        }
        voiceChannel.join().then((connection) =>{
            connection.play(path.join(__dirname,'rage2.mp4'));
        });
    }else if(command === 'rage2'){
        const path = require('path');
        
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel){
            return message.channel.send("You need to be in a voice channel!");
        }
        voiceChannel.join().then((connection) =>{
            connection.play(path.join(__dirname,'rage3.mp4'));
        });
    }else if(command === 'dogshit'){
        const path = require('path');
        
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel){
            return message.channel.send("You need to be in a voice channel!");
        }
        voiceChannel.join().then((connection) =>{
            connection.play(path.join(__dirname,'rage.mp4'));
        });
    }else if(command === 'rage3'){
        const path = require('path');
        
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel){
            return message.channel.send("You need to be in a voice channel!");
        }
        voiceChannel.join().then((connection) =>{
            connection.play(path.join(__dirname,'rage5.mp4'));
        });
    }else if(command === 'stupid'){
        const path = require('path');
        
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel){
            return message.channel.send("You need to be in a voice channel!");
        }
        voiceChannel.join().then((connection) =>{
            connection.play(path.join(__dirname,'stupid.mp4'));
        });
    }
    else if(command === 'play'){
        const path = require('path');
        const songInfo = await ytdl.getInfo(args[1]);
        const serverQueue = queue.get(message.guild.id);
        const song = {
            title: songInfo.title,
            url: songInfo,video_url
        };
        const voiceChannel = message.member.voice.channel;

        voiceChannel.join().then((connection) => {
            connection.play(ytdl(song.url));
        });
        if(!song.url){
            message.reply("You didn't provide any URLs");
        }
    }
    else if(command === 'emotes'){
        var images = [];
        index = 0;
        images[0] = "https://imgur.com/p8NMAFM.png";
        images[1] = "https://imgur.com/t94838G.png";
        images[2] = "https://imgur.com/Kym7e2Q.png";
        images[3] = "https://imgur.com/6G3UOqr.png";
        images[4] = "https://imgur.com/BSXThi9.png";
        images[5] = "https://imgur.com/GNSKOiY.png";

        index = Math.floor(Math.random() * images.length);
        message.channel.send(images[index]);
    }
    else if(command === 'greet'){
        message.channel.send(`${message.author} says ${args}`);
    }
    else{
        message.reply(`The command ${command} doesn't exists.\n`);
        message.channel.send("> Do xd!help to see the list of available commands");
    }
    
});

bot.login(process.env.token);