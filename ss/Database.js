
const discord = require('discord.js')
const fs = require('fs')

class DB {
    constructor(){

    }


    yaz(veri, değer){
        const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
        dosya[veri] = değer
        return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 1))
    }


 bul(veri){
   const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
   if (!dosya[veri]) return;
   return dosya[veri]
 }

sil(veri) {
  const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
  if (!dosya[veri]) return;
  delete dosya[veri]
  return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
}

kontrol(veri) {
  const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
  return dosya[veri] ? true : false
}


}
module.exports = new DB()
