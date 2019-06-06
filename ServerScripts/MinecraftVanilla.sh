cd /home/gameservers/DiscordBots/TurkeyBot
echo 'Active' >Vanilla.txt
cd /home/gameservers/Servers/MinecraftVanilla 
java -Xms1024m -Xmx3096M -jar server.jar nogui false 
rm /home/gameservers/DiscordBots/TurkeyBot/Vanilla.txt