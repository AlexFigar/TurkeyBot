var execGMod = require('child_process').spawn;
var GModServerProcess
var Methods = {};

var Methods = {
runServer: function() {
    //var minecraftModdedServerProcess = execMCMod('java', ['-Xmx6G','-Xms5G','-jar','C:/SERVERS/MinecraftModded/BassServer/modpack.jar','nogui'], {cwd: 'C:/SERVERS/MinecraftModded/BassServer', detached: true});
    GModServerProcess = execGMod('C:/SERVERS/GarrysMod/BassGmodServer/Run.bat', {cwd: 'C:/SERVERS/GarrysMod/BassGmodServer', detached: true, shell: true}).unref();
    console.log('Running Gmod server')
}};

module.exports = Methods;