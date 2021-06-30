
const discord = require('discord.js')
const fs = require('fs')
const korumaconfig = require('../koruma.json')



class DB {
    constructor(){

    }


    aç(veri, değer){
      let korumalar = Object.keys(korumaconfig).filter(k => k.includes('Protection'));
      let koruma = korumalar.find(k => k.includes(args[0]));
      korumaconfig[koruma] = !korumaconfig[koruma];
      fs.writeFile("../koruma.json", JSON.stringify(korumaconfig))
    }

    kapat(veri, değer){
      let korumalar = Object.keys(korumaconfig).filter(k => k.includes('Protection'));
      let koruma = korumalar.find(k => k.includes(args[0]));
      korumaconfig[koruma] = !korumaconfig[koruma];
      fs.writeFile("../koruma.json", JSON.stringify(korumaconfig))
    }



 bul(veri){
   const dosya = JSON.parse(fs.readFileSync('koruma.json', 'utf8'))
   if (!dosya[veri]) return console.log('Böyle bir veri yok')
   return dosya[veri]
 }

sil(veri) {
  const dosya = JSON.parse(fs.readFileSync('koruma.json', 'utf8'))
  if (!dosya[veri]) return message.channel.send('**Zaten bu sistem kapalı.**')
  delete dosya[veri]
  return fs.writeFileSync('koruma.json', JSON.stringify(dosya, null, 2))
}

kontrol(veri) {
  const dosya = JSON.parse(fs.readFileSync('koruma.json', 'utf8'))
  return dosya[veri] ? true : false
}


}
module.exports = new DB()
