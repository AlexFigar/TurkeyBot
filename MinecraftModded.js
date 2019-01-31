var execMCMod = require('child_process').spawn;
var minecraftModdedServerProcess
var Methods = {};

var Methods = {
runServer: function() {
    //var minecraftModdedServerProcess = execMCMod('java', ['-Xmx6G','-Xms5G','-jar','C:/SERVERS/MinecraftModded/BassServer/modpack.jar','nogui'], {cwd: 'C:/SERVERS/MinecraftModded/BassServer', detached: true});
    //Executes the servers run.bat which will create a text file in the bot directory called ModpackActive.txt so that the bot can check if the server is active.
    minecraftModdedServerProcess = execMCMod('C:/SERVERS/MinecraftModded/BassServer/Run.bat', {cwd: 'C:/SERVERS/MinecraftModded/BassServer', detached: true, shell: true}).unref();
    console.log('Running ModPack server');
}};


module.exports = Methods;
