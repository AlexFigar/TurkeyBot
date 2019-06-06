var execMCMod = require('child_process').spawn;
var minecraftModdedServerProcess
var Methods = {};

var Methods = {
runServer: function() {
    //var minecraftModdedServerProcess = execMCMod('java', ['-Xmx6G','-Xms5G','-jar','C:/SERVERS/MinecraftModded/BassServer/modpack.jar','nogui'], {cwd: 'C:/SERVERS/MinecraftModded/BassServer', detached: true});
    minecraftModdedServerProcess = execMCMod('screen -d -m -S dw sh /home/gameservers/DiscordBots/TurkeyBot/ServerScripts/Direwolf.sh', {cwd: '/home/gameservers/Servers/Direwolf20', detached: true, shell: true}).unref();
    console.log('Running Direwolf server');
}};

module.exports = Methods;
