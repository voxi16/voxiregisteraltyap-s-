const Discord = require("discord.js");
const client = global.client;

exports.execute = async () => {
  
client.user.setPresence({ activity: { name: "Rie Developed By Voxi"}, status: "online" });

//Bu altyapı LinLord tarafından paylaşılmıştır,
//Çalıcak kadar şerefsiz olanlara sesleniyorum :D
//Yazık kafanıza :D
//Hadi ben kaçtım, discord: https://discord.gg/nQwPZ5Q4CF

};

exports.conf = {
  event: "ready"
};
