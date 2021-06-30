const Discord = require("discord.js");
const mongoose = require("mongoose");
const moment = require("moment");
const client = global.client;
const Register = require("../models/Register.js");

exports.execute = async (member) => {
  
let Users = client.users.cache.get(member.id)

var Tarih = "";
if (moment(Users.createdAt).format("MM") === "01") {
var Tarih = `${moment(Users.createdAt).format("DD")} Ocak ${moment(Users.createdAt).format("YYYY (HH:mm:ss)")} `;
  }
if (moment(Users.createdAt).format("MM") === "02") {
var Tarih = `${moment(Users.createdAt).format("DD")} Şubat ${moment(Users.createdAt).format("YYYY (HH:mm:ss)")} `;
  }
if (moment(Users.createdAt).format("MM") === "03") {
var Tarih = `${moment(Users.createdAt).format("DD")} Mart ${moment(Users.createdAt).format("YYYY (HH:mm:ss)")} `;
  }
if (moment(Users.createdAt).format("MM") === "04") {
var Tarih = `${moment(Users.createdAt).format("DD")} Nisan ${moment(Users.createdAt).format("YYYY (HH:mm:ss)")} `;
  }
if (moment(Users.createdAt).format("MM") === "05") {
var Tarih = `${moment(Users.createdAt).format("DD")} Mayıs ${moment(Users.createdAt).format("YYYY (HH:mm:ss)")} `;
  }
if (moment(Users.createdAt).format("MM") === "06") {
var Tarih = `${moment(Users.createdAt).format("DD")} Haziran ${moment(Users.createdAt).format("YYYY (HH:mm:ss)")} `;
  }
if (moment(Users.createdAt).format("MM") === "07") {
var Tarih = `${moment(Users.createdAt).format("DD")} Temmuz ${moment(Users.createdAt).format("YYYY (HH:mm:ss)")} `;
  }
if (moment(Users.createdAt).format("MM") === "08") {
var Tarih = `${moment(Users.createdAt).format("DD")} Ağustos ${moment(Users.createdAt).format("YYYY (HH:mm:ss)")} `;
  }
if (moment(Users.createdAt).format("MM") === "09") {
var Tarih = `${moment(Users.createdAt).format("DD")} Eylül ${moment(Users.createdAt).format("YYYY (HH:mm:ss)")} `;
  }
if (moment(Users.createdAt).format("MM") === "10") {
var Tarih = `${moment(Users.createdAt).format("DD")} Ekim ${moment(Users.createdAt).format("YYYY (HH:mm:ss)")} `;
  }
if (moment(Users.createdAt).format("MM") === "11") {
var Tarih = `${moment(Users.createdAt).format("DD")} Kasım ${moment(Users.createdAt).format("YYYY (HH:mm:ss)")} `;
  }
if (moment(Users.createdAt).format("MM") === "12") {
var Tarih = `${moment(Users.createdAt).format("DD")} Aralık ${moment(Users.createdAt).format("YYYY (HH:mm:ss)")} `;
}


  
    let control;
    if(Date.now() - member.user.createdAt.getTime() < 1000*60*60*24*7) control = "Güvensiz!"
    else control = "Güvenli!"
  
   // <a:deuslra_parilti:837386687713509477> ${member} Sunucumuza hoş geldin! seninle birlikte **${member.guild.memberCount}** üye olduk. <a:deuslra_kutlama:807682312871084070>     
    //\n<a:deuslra_parilti:837386687713509477> Hesabın oluşturulma tarihi: **${Tarih}**
   // \n<a:deuslra_parilti:837386687713509477> Hesap durumu: **${control}**
   // \n<a:deuslra_parilti:837386687713509477> <@&786986113909915650> Rolüne sahip yetkililer seninle ilgilenecektir.
//<a:deuslra_siyah6:854780499415007233>
//
  member.setNickname("Rie İsim | Yaş")
  client.channels.cache.get("859049472575012874").send(`
  <a:voxi_parlt:859699736431820810>  ${member} Sunucumuza hoş geldin! seninle birlikte **${member.guild.memberCount}** üye olduk. :tada:    
  \n<a:voxi_parlt:859699736431820810>  Hesabın oluşturulma tarihi: **${Tarih}**
  \n<a:voxi_parlt:859699736431820810> Hesap durumu: **${control}**
  \n<a:voxi_parlt:859699736431820810> <@&859049041950146571> Rolüne sahip yetkililer seninle ilgilenecektir.
  `)
                                                            };   
exports.conf = {
  event: "guildMemberAdd"
};
