const Discord = require('discord.js');
const publicIp = require('public-ip');
const ModPack = require('./MinecraftModded');
const GMod = require('./GarrysMod');
const fs = require('fs');
const bot = new Discord.Client();
const token = 'Your Token Here';
var ipadd = 'your ip';

var GmodOn = false;
var ModpackOn = false;

//gets public IP for server
bot.on('message', function(message){
    if(message.content == 'Turkey IP')
    {
        (async () => {
            message.reply(await publicIp.v4());
        })();
    }
});

//Start Modded Server
bot.on('message', function(message){
    if(message.content == 'Turkey Modpack Start')
    {

        if(fs.existsSync('ModpackActive.txt') == false){
            ModPack.runServer();
            message.reply('Minecraft Modpack Server Running at '+ipadd);    
        } 
        else if (fs.existsSync('ModpackActive.txt')){
            message.reply('Server already running at '+ipadd);
        }
    }
});
    
//Start Gmod Server
bot.on('message', function(message){
    if(message.content == 'Turkey Gmod Start')
    {

        if(fs.existsSync('GmodActive.txt') == false){
            GMod.runServer();
            message.reply('Gmod Server Running at '+ipadd);    
        } 
        else if (fs.existsSync('GmodActive.txt')){
            message.reply('Server already running at '+ipadd);
        }
    }
});

//Gets status of servers
bot.on('message', function(message){
    if(message.content == 'Turkey Status'){
        GmodOn = false;
        ModpackOn = false;

        if(fs.existsSync('GmodActive.txt')){
            GmodOn = true;  
        }
        
        if(fs.existsSync('ModpackActive.txt')){
            ModpackOn = true 
        } 

        if(GmodOn && ModpackOn){
                message.reply('\n Gmod server is up and running.\n Modpack server is up and running.');
        }

        else if(GmodOn == true){
                message.reply('\n Gmod server is up and running.\n Modpack server is off.');
        }
        
        else if(ModpackOn == true){
                message.reply('\n Gmod server is off.\n Modpack server is up and running.');
        }
        else if(GmodOn == false && ModpackOn == false){
                message.reply('\n Gmod server is off.\n Modpack server is off.');
        }
    }
});

//list of possible commands
bot.on('message', function(message){
    if(message.content == 'Turkey Help')
    {
        message.reply('\n Turkey Bot Commands: \n Turkey IP - Gets the IP address required to connect to servers. \n Turkey Modpack Start - Starts a modpack server if one is not already running. \n Turkey Gmod Start - Starts a Gmod server. \n Turkey Status - Shows which servers are active and which are off.');
    }
});

//says when bot is ready
bot.on('ready', function(){
    (async () => {
        ipadd = await publicIp.v4();
    })();
    console.log("Ready");
});

bot.login(token);