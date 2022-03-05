/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `𝚋𝚘𝚝 𝚖𝚞𝚕𝚝𝚒 𝚍𝚎𝚟𝚒𝚌𝚎
━━━━━━━━━━━━
◕ 𝑖𝑛𝑓𝑜𝑏𝑜𝑡

「version 0.5.1」
⌜ 𝚋𝚊𝚒𝚕𝚢𝚎𝚜 𝚕𝚊𝚝𝚎𝚜𝚝⁴⁰⁴ ⌟
`
let message = await prepareWAMessageMedia({ image: {url: 'https://i.ibb.co/0jYFSb7/03e384dfd0f4.png' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '𝚜𝚌𝚘𝚞𝚛𝚎 𝚌𝚘𝚍𝚎',
               url: 'https://github.com/DikaArdnt'
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
               displayText: '⟲ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚎𝚛',
               id: '.allmenu',
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
handler.command = /^menu$/i

module.exports = handler
