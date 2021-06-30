const { MessageEmbed } = require('discord.js');
const emojiler = require("../emojiler.json");
const settings = require("../settings.json");
const Register = require("../models/Register.js");
const mongoose = require("mongoose")
exports.execute = async (client, message, args) => {

    let scaryemb = new MessageEmbed().setFooter('Voxi').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('RANDOM');  
   if (!message.member.roles.cache.has(settings.kayıtSorumlusu) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Hata: `Bu komutunu kullanabilmek için herhangi bir yetkiye sahip değilsin.`").then(x => x.delete({timeout: 10000}));
    
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   

    let registerData = await Register.findOne({ guildId: message.guild.id, userId: member.id });
    let staffData = await Register.findOne({ guildId: message.guild.id, userId: message.author.id });
    if (!member) return message.channel.send("Hata: `Üye belirtilmedi` Lütfen bir üye etiketleyin veya ID giriniz! Örn: `.kayıt <@voxi/ID> <Isim> <Yaş>`").then(x => x.delete({timeout: 10000}));
    let nick = args[1];
    if(!nick) return message.channel.send("Hata: `Üye belirtilmedi` Lütfen bir üye etiketleyin veya ID giriniz! Örn: `.kayıt <@voxi/ID> <Isim> <Yaş>`    ")
  
    let collector = message.createReactionCollector((reaction, user) => user.id === message.author.id);

    let erkek1 = message.guild.roles.cache.get(settings.erkekRolleri);
    let erkek2 = message.guild.roles.cache.get(settings.erkekRolleri2);
    let erkek3 = message.guild.roles.cache.get(settings.erkekRolleri2);
    let kadin1 = message.guild.roles.cache.get(settings.kızRolleri);
    let kadin2 = message.guild.roles.cache.get(settings.kızRolleri2);
    let kadin3 = message.guild.roles.cache.get(settings.kızRolleri2);
    let kayitsizRolu = message.guild.roles.cache.get(settings.kayıtsızRolu);
  

       message.react('<a:rie_e:859697890004172850>') //erkek emojisi
       message.react('<a:rie_k:859697890016493608>') //kız emojisi

        collector.on("collect", async(reaction, user) => {
            await message.reactions.removeAll()
            if (reaction.emoji.id == '859697890004172850') { //erkek

              member.roles.add(settings.erkekRolleri)
              member.roles.remove(settings.kayıtsızRolu);

    
              
member.setNickname(`Rie ${nick.charAt(0).toUpperCase() + nick.slice(1).toLowerCase()}`).catch();
         
    


                   if(!staffData) {
                    let newStaffData = new Register({
                      _id: new mongoose.Types.ObjectId(),
                      guildId: message.guild.id,
                      userId: message.author.id,
                      totalRegister: 1,
                      womanRegister: 0,
                      manRegister: 1,
                      userNames: []
                    }).save(); 
                  } else {
                    staffData.totalRegister++
                    staffData.manRegister++
                    staffData.save();
                  }
                  
                  if(!registerData) {
                    let newRegisterData = new Register({
                      _id: new mongoose.Types.ObjectId(),
                      guildId: message.guild.id,
                      userId: member.id,
                      totalRegister: 0,
                      womanRegister: 0,
                      manRegister: 0,
                      userNames: [{ nick: `Rie ${nick.charAt(0).toUpperCase() + nick.slice(1).toLowerCase()}`, type: `İsim Değiştirme`}]
                    }).save();
                  } else {
                    registerData.userNames.push({ nick: `Rie ${nick.charAt(0).toUpperCase() + nick.slice(1).toLowerCase()}`, type: `İsim Değiştirme`})
                    registerData.save();
                  }
                  
             message.react("<a:voxi_tik:859697889893416990>")
           }

if (reaction.emoji.id == '859697890016493608') { //kız

  member.roles.add(settings.kızRolleri)
  member.roles.remove(settings.kayıtsızRolu);

member.setNickname(`Rie ${nick.charAt(0).toUpperCase() + nick.slice(1).toLowerCase()}`).catch();
         
    


                   
                   if(!staffData) {
                    let newStaffData = new Register({
                      _id: new mongoose.Types.ObjectId(),
                      guildId: message.guild.id,
                      userId: message.author.id,
                      totalRegister: 1,
                      womanRegister: 1,
                      manRegister: 0,
                      userNames: []
                    }).save(); 
                  } else {
                    staffData.totalRegister++
                    staffData.womanRegister++
                    staffData.save();
                  }
                  if(!registerData) {
                    let newRegisterData = new Register({
                      _id: new mongoose.Types.ObjectId(),
                      guildId: message.guild.id,
                      userId: member.id,
                      totalRegister: 0,
                      womanRegister: 0,
                      manRegister: 0,
                      userNames: [{ nick: `${nick.charAt(0).toUpperCase() + nick.slice(1).toLowerCase()}`, type: `Kız`}]
                    }).save();
                  } else {
                    registerData.userNames.push({ nick: `${nick.charAt(0).toUpperCase() + nick.slice(1).toLowerCase()}`, type: `Kız`})
                    registerData.save();
                  }
                  
             message.react("<a:voxi_tik:859697889893416990>")
            }
        })
    }
   exports.conf = {
  command: "k",
  description: "Belirtilen üyenin erkek olarak kaydetmeye yarar.",
  aliases: ["kayıt"]
}

