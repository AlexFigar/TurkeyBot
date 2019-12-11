var execServer = require('child_process').spawn;
var ServerProcess;
var Methods = {};

var Methods = {
runServer: function(serverName, serverPath) {
    //var minecraftModdedServerProcess = execMCMod('java', ['-Xmx6G','-Xms5G','-jar','C:/SERVERS/MinecraftModded/BassServer/modpack.jar','nogui'], {cwd: 'C:/SERVERS/MinecraftModded/BassServer', detached: true});
    //ServerProcess = execServer('screen -d -m -S ' + serverName +' sh /home/gameservers/DiscordBots/TurkeyBot/ServerScripts/'+ serverName +'.sh', {cwd: serverPath + '/'+ serverName, detached: true, shell: true}).unref();
    ServerProcess = execServer( serverPath + '/'+ serverName + '/' + serverName +'.bat', {cwd: serverPath + '/'+ serverName, detached: true, shell: true}).unref;
    console.log('Running ' + serverName + ' server');
}};

module.exports = Methods;