var execGMod = require('child_process').spawn;
var GModServerProcess
var Methods = {};

var Methods = {
runServer: function() {
    //var minecraftModdedServerProcess = execMCMod('java', ['-Xmx6G','-Xms5G','-jar','C:/SERVERS/MinecraftModded/BassServer/modpack.jar','nogui'], {cwd: 'C:/SERVERS/MinecraftModded/BassServer', detached: true});
    GModServerProcess = execGMod('screen -d -m -S gm sh /home/gameservers/DiscordBots/TurkeyBot/ServerScripts/Gmod.sh', {cwd: '/home/gameservers/Servers/Gmod', detached: true, shell: true}).unref();
    console.log('Running Gmod server')}};

module.exports = Methods;