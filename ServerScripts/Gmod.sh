cd /home/gameservers/DiscordBots/TurkeyBot
echo 'Active' >GmodActive.txt
cd /home/gameservers/Servers/Gmod 
sh srcds_run -console -game garrysmod +gamemode terrortown +maxplayers 20
rm /home/gameservers/DiscordBots/TurkeyBot/GmodActive.txt