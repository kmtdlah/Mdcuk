let moment = require('moment-timezone')

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')

let fs = require('fs')

let handler = async (m, {conn}) => {

    let _uptime = process.uptime() * 1000

    let uptime = clockString(_uptime)

    let d = new Date

    let date = d.toLocaleDateString('id', {

        day: 'numeric',

        month: 'long',

        year: 'numeric'

    })

    let who

    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender

    else who = m.sender

    let user = global.db.data.users[who]

let anu = `𝚌𝚊𝚝𝚣𝚢 - 𝚋𝚘𝚝 𝚖𝚞𝚕𝚝𝚒 𝚍𝚎𝚟𝚒𝚌𝚎

「version 0.5.1」
𝚋𝚊𝚒𝚕𝚢𝚎𝚜 𝚕𝚊𝚝𝚎𝚜𝚝⁴⁰⁴


uptime : ${uptime}`

     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({

     templateMessage: {

         hydratedTemplate: {

           hydratedContentText: anu,

           locationMessage: { 

           jpegThumbnail: gambar() }, 

           hydratedFooterText: `${date}`,

           hydratedButtons: [{

             urlButton: {

               displayText: '𝚏𝚘𝚕𝚕𝚘𝚠 𝚖𝚎',

               url: 'https://www.instagram.com/il_skhyzi12/'

             }

           },

               {

             quickReplyButton: {

               displayText: '𝚌𝚘𝚖𝚖𝚊𝚗𝚍',

               id: '.menu',

             }

           }]

         }

       }

     }), { userJid: m.sender, quoted: m });

    //conn.reply(m.chat, text.trim(), m)

    return await conn.relayMessage(

         m.chat,

         template.message,

         { messageId: template.key.id }

     )

}

handler.customPrefix = /^(bot|alive|good night|good morning|hi|mk|good morning|ko)$/i // ketik bot (tanpa prefix)

handler.command = /^alive$/i

handler.command = new RegExp

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

module.exports = handler

function ucapan() {

  const time = moment.tz('Asia/Colombo').format('HH')

  if (time >= 4) {

    res = "සුභ උදෑසනක්🌄"

  }

  if (time > 8) {

    res = "සුභ දහවලක්🏞️"

  }

  if (time >= 14) {

    res = "සුභ සවසක්🌇"

  }

  if (time >= 18) {

    res = "සුභ රාත්‍රියක්🌃"

  }

  return res

}

function gambar() {

  const time = moment.tz('Asia/Colombo').format('HH')

  if (time >= 4) {

    res = fs.readFileSync('./media/gm.jpg')

  }

  if (time > 9) {

    res = fs.readFileSync('./media/evening.jpg')

  }

  if (time >= 14) {

    res = fs.readFileSync('./media/evening2.jpg')

  }

  if (time >= 18) {

    res = fs.readFileSync('./media/gn.jpg')

  }

  return res

}

function clockString(ms) {

    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}
