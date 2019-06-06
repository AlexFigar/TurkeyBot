const Discord = require('discord.js');
const publicIp = require('public-ip');
const Direwolf = require('./Direwolf');
const Vanilla = require('./Minecraft');
const GMod = require('./GarrysMod');
const fs = require('fs');
const os = require('os');
const bot = new Discord.Client();
const token = 'Your Token Here';
var ipadd = 'Your External IPv4 Here';

var GmodOn = false;
var DirewolfOn = false;
var VanillaOn = false;

//gets public IP for server
bot.on('message', function(message){
    if(message.content == 'Turkey IP')
    {
        (async () => {
            message.reply(await publicIp.v4());
        })();
    }
});

//Start Modded Direwolf20 Server
bot.on('message', function(message){
    if(message.content == 'Turkey Direwolf Start')
    {

        if(fs.existsSync('Direwolf.txt') == false){
            Direwolf.runServer();
            message.reply('Minecraft Direwolf Server Running at '+ipadd);    
        } 
        else if (fs.existsSync('Direwolf.txt')){
            message.reply('Server already running at '+ipadd);
        }
    }
});

//Start Minecraft Vanilla
bot.on('message', function(message){
    if(message.content == 'Turkey Minecraft Start')
    {

        if(fs.existsSync('Vanilla.txt') == false){
            Vanilla.runServer();
            message.reply('Minecraft Server Running at '+ipadd + ':25566');    
        } 
        else if (fs.existsSync('Vanilla.txt')){
            message.reply('Server already running at '+ipadd + ':25566');
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
        DirewolfOn = false;
        VanillaOn = false;

        if(fs.existsSync('GmodActive.txt')){
            GmodOn = true;  
        }
        
        if(fs.existsSync('Direwolf.txt')){
            DirewolfOn = true 
        }
        
        if(fs.existsSync('Vanilla.txt')){
            VanillaOn = true 
        } 

        if (GmodOn == true){
            message.reply('Gmod server is up and running at ' + ipadd);
        } else {
            message.reply('Gmod server is off.');
        }

        if (DirewolfOn == true){
            message.reply('Direwolf server is up and running at ' + ipadd);
        } else {
            message.reply('Direwolf server is off.');
        }

        if (VanillaOn == true){
            message.reply('Minecraft server is up and running at ' + ipadd + ':25566');
        } else {
            message.reply('Minecraft server is off.');
        }

    }
});

//Gets the amount of ram the server is using
bot.on('message', function(message){
    if(message.content == 'Turkey Ram')
    {
        var totalmem = os.totalmem();
        var freemem = os.freemem();
        var usedmem = totalmem - freemem;
        usedmem = usedmem/1024/1024/1024

        message.reply('server is using ' + usedmem.toPrecision(3) +'GB/16GB');

    }
});

//list of possible commands
bot.on('message', function(message){
    if(message.content == 'Turkey Help')
    {
        message.reply('\n Turkey Bot Commands: \n Turkey IP - Gets the IP address required to connect to servers. \n Turkey Direwolf Start - Starts a Direwolf server if one is not already running. \n Turkey Gmod Start - Starts a Gmod server. \n Turkey Minecraft Start - Starts a vanilla minecraft server. \n Turkey Status - Shows which servers are active and which are off. \n Turkey Ram - Shows the amount of ram the servers are using.');

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
