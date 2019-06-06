var execMCMod = require('child_process').spawn;
var minecraftModdedServerProcess
var Methods = {};

var Methods = {
runServer: function() {
    //var minecraftModdedServerProcess = execMCMod('java', ['-Xmx6G','-Xms5G','-jar','C:/SERVERS/MinecraftModded/Server/modpack.jar','nogui'], {cwd: 'C:/SERVERS/MinecraftModded/Server', detached: true});
    minecraftModdedServerProcess = execMCMod('screen -d -m -S mc sh /home/gameservers/DiscordBots/TurkeyBot/ServerScripts/MinecraftVanilla.sh', {cwd: '/home/gameservers/Servers/MinecraftVanilla', detached: true, shell: true}).unref();
    console.log('Running Minecraft server');
}};
module.exports = Methods;
