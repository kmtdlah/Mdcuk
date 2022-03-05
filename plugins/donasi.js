/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `Kalian bisa mendukung saya agar bot ini tetap up to date dengan

𝘿𝙊𝙉𝘼𝙎𝙄 𝙑𝙄𝘼 •
➥ 𝙂𝙊𝙋𝘼𝙔
➥ 𝙊𝙑𝙊
➥ 𝘿𝘼𝙉𝘼
➥ 𝙋𝘼𝙔𝙋𝘼𝙇
➥ 𝘽𝘼𝙉𝙆
➥ 𝙋𝙃𝙊𝙉𝙀𝙉𝙐𝙈𝘽𝙀𝙍
❍ 𝙉𝙀𝙓𝙏 → 𝙆𝙇𝙄𝙆 𝘽𝙐𝙏𝙏𝙊𝙉 ↓`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/1ef90db60907d6083a23a.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '𝚗𝚞𝚖𝚋𝚎𝚛 𝚞𝚛𝚕',
               url: 'https://wa.me/qr/3NPBSZBJKZYYN1'
             }

           },
               {
             callButton: {
               displayText: '𝚙𝚑𝚘𝚗𝚎 𝚗𝚞𝚖𝚋𝚎𝚛',
               phoneNumber: '+6285892842367'
             }
           },           
               {
             quickReplyButton: {
               displayText: '⎋ 𝚜𝚘𝚜𝚒𝚊𝚕 𝚖𝚎𝚍𝚒𝚊',
               id: '.sos',
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

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
