cd /home/gameservers/DiscordBots/TurkeyBot
echo 'Active' >Direwolf.txt
cd /home/gameservers/Servers/Direwolf20 
java -Xms1024m -Xmx5096M -jar FTBserver-1.12.2-14.23.5.2821-universal.jar nogui false 
rm /home/gameservers/DiscordBots/TurkeyBot/Direwolf.txt
