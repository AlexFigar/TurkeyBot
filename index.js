const Discord = require('discord.js');
const readline = require('readline');
const publicIp = require('public-ip');
const cfg = require('./config.json');
const servers = require('./servers.json');
const ports = require('./ports.json');
const server = require('./server.js')
const fs = require('fs');
const rcon = require('rcon');
var os = require('os');

const bot = new Discord.Client();
var ipadd = '69.69.69.69';
var serverList;
var portList;


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

//On Startup
bot.login(cfg.token);

bot.on('ready', function () {

    console.log("Servers Active:");
    serverList = [cfg.numberOfServers];
    portList = [cfg.numberOfServers];
    var i;
    for (i = 0; i < cfg.numberOfServers; i++) {
        serverList[i] = servers["server" + (i + 1)];
        portList[i] = ports["server" + (i + 1)];
        console.log(serverList[i]);
    }


    publicIp.v4().then(ip => {
        ipadd = (ip); // => 8.8.8.8
      });

    console.log("===================")
    console.log("Ready");
});



//On Message
bot.on('message', function (message) {
    var msg = message.content.toString();
    msg = msg.toLowerCase();

    var x;
    //Turkey Commands
    if (msg.startsWith("turkey")) {

        //Starting servers
        var j = 0;
        for (x of serverList) {
            if (msg == 'turkey ' + x.toLowerCase() + ' start') {
                if (fs.existsSync(x + '.txt') == false) {
                    server.runServer(x, cfg.serverPath);
                    message.reply(x + ' server started at ' + ipadd + ':' + portList[j]);
                } else {
                    message.reply(x + ' server already running at ' + ipadd + ':' + portList[j]);
                }
                return;
            }
            j++;
        }

        //Help Command
        if (msg == 'turkey help') {
            for (x of serverList) {

                message.reply('Turkey ' + x + ' Start- To start a ' + x + ' server')
                console.log(msg);
            }
        }
        //status
        var j = 0;
        if (msg == 'turkey status') {
            for (x of serverList) {

                if (fs.existsSync(x + '.txt') == false) {
                    message.reply(x + ' server is off');
                } else {
                    message.reply(x + ' server is up and running at ' + ipadd + ':' + portList[j]);
                }
                j++
            }
            console.log(msg);
        }

        //Ram Usage
        if (msg == 'turkey usage') {

            var mem = ((os.totalmem - os.freemem) / 1024 / 1024 / 1024).toPrecision(3);


            message.reply('Ram ' + mem + 'GB/' + (os.totalmem / 1024 / 1024 / 1024).toPrecision(3) + 'GB');
            console.log(msg);
        }

        //Get new IP
        if (msg == 'turkey ip') {

            publicIp.v4().then(ip => {
                ipadd = (ip); // => 8.8.8.8
              });

            message.reply(ipadd);
            console.log(msg);
        }
    }

});

function StartAllServers() {
    var j = 0;
    for (x of serverList) {
        if (fs.existsSync(x + '.txt') == false) {
            server.runServer(x, cfg.serverPath);
        }
        j++;
    }
}

rl.question('', (answer) => {
    answer = answer.toLowerCase();
    if(answer == 'start all'){
        console.log('starting all servers:');
        StartAllServers();
    }
    else {console.log('unknown command');
}
    //rl.close();
  });

