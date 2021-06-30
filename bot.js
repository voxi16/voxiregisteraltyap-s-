const { Client, Collection } = require("discord.js");
const client = global.client = new Client({ fetchAllMembers: true });
const config = require("./config.json");
const mongoose = require("mongoose")
const fs = require("fs");

client.commands = new Collection();
client.aliases = new Collection();

fs.readdirSync("./commands").filter(file => file.endsWith(".js")).forEach(file => {
    let command = require(`./commands/${file}`);
    client.commands.set(command.conf.command, command);
    console.log(`[Command] ${file.replace(".js", "")} command loaded.`);
    command.conf.aliases.forEach(aliases => {
    client.aliases.set(aliases, command)  
    });
});

fs.readdirSync("./events").filter(file => file.endsWith(".js")).forEach(file => {
    let event = require(`./events/${file}`);
    client.on(event.conf.event, event.execute);
    console.log(`[Event] ${file.replace(".js", "")} event loaded.`);
});

mongoose.connect(``, {useNewUrlParser: true, useUnifiedTopology: true}).then(c => console.log(`Bot başarıyla MongoDBye bağlandı! youtube.com/linlords LinLords Community`)).catch(err => console.error(`Bot mongodbye bağlanamadı bir hata var!`));
client.login(config.Token).then(c => console.log(`${client.user.tag} isimli bota bağlanıldı, artık hazırım!`)).catch(err => console.error(`Bota bağlanılamadı, bir hata mevcut!`));

//Karsılama-tag

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'tag') { 
      msg.channel.send('`Rie`, `0616`');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'Voxi') { 
      msg.channel.send('Yapımcım noldu?');
    }
  });


  

client.on("ready", () => {
  const channel = client.channels.cache.get("859049479108689980");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    // Yay, it worked!
    console.log("Successfully connected.");
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
  });
});

