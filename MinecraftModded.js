var execMCMod = require('child_process').spawn;
var minecraftModdedServerProcess
var Methods = {};

var Methods = {
runServer: function() {
    //var minecraftModdedServerProcess = execMCMod('java', ['-Xmx6G','-Xms5G','-jar','C:/SERVERS/MinecraftModded/BassServer/modpack.jar','nogui'], {cwd: 'C:/SERVERS/MinecraftModded/BassServer', detached: true});
    minecraftModdedServerProcess = execMCMod('C:/SERVERS/MinecraftModded/BassServer/Run.bat', {cwd: 'C:/SERVERS/MinecraftModded/BassServer', detached: true, shell: true}).unref();
    console.log('Running ModPack server');
}};


module.exports = Methods;
