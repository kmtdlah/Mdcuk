let fs = require('fs')

global.owner = ['6285892842367'] // Put your number here
global.mods = [6285892842367] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix

  // name: 'https://website'

  amel: 'https://melcanz.com',

    bx: 'https://bx-hunter.herokuapp.com',

  dhnjing: 'https://dhnjing.xyz',

  hardianto: 'https://hardianto-chan.herokuapp.com',

  jonaz: 'https://jonaz-api-v2.herokuapp.com',

  neoxr: 'https://neoxr-api.herokuapp.com',

  nrtm: 'https://nurutomo.herokuapp.com',

  xteam: 'https://api.xteam.xyz',

  nzcha: 'http://nzcha-apii.herokuapp.com',

  bg: 'http://bochil.ddns.net',

  fdci: 'https://api.fdci.se',

  dzx: 'https://api.dhamzxploit.my.id',

  bsbt: 'https://bsbt-api-rest.herokuapp.com',

  zahir: 'https://zahirr-web.herokuapp.com',

  zeks: 'https://api.zeks.xyz',

  zekais: 'http://zekais-api.herokuapp.com',

  hardianto: 'https://hardianto-chan.herokuapp.com',

  pencarikode: 'https://pencarikode.xyz', 

  erdwepe: 'https://erdwpe-api.herokuapp.com',

  lolhuman: 'https://api.lolhuman.xyz',

  LeysCoder: 'https://leyscoders-api.herokuapp.com'

}

global.APIKeys = { // APIKey Here

  // 'https://website': 'apikey'

  'https://melcanz.com': 'dUtJxxvp',

  'https://api.xteam.xyz': '9287183216dd1eb3',

  'https://zahirr-web.herokuapp.com': 'zahirgans',

  'https://bsbt-api-rest.herokuapp.com': 'benniismael',

  'https://api.zeks.xyz': 'apivinz',

  'https://hardianto-chan.herokuapp.com': 'hardianto',

  'https://pencarikode.xyz': 'pais', 

  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',

  'https://zekais-api.herokuapp.com': 'f4nczIeU',

  'https://api.lolhuman.xyz': 'ba45c79d85fbd1c42101c6df',

}

// Sticker WM
global.stiker_wait = 'Stiker sedang dibuat'
global.packname = 'bot multi device '
global.author = 'F i z z '
global.email = 'mhmmdsalah22@gmail.com'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = 'bot multi device '
global.media = 'https://i.ibb.co/0jYFSb7/03e384dfd0f4.png'

global.wait = '_*tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})



