/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `Sossial Media Saya : 

Dont forget to follow & Star

Tik Tok

tiktok.com/@fizzxyzz

github 

https://github.com/hafizzganss678/`
let message = await prepareWAMessageMedia({ image: {url: 'https://i.ibb.co/0jYFSb7/03e384dfd0f4.png' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '𝚐𝚛𝚘𝚞𝚙',
               url: 'https://chat.whatsapp.com/BiqOIZIr16YHuRuZ1yjdbK'
             }

           },
                 
           

               
               {
             quickReplyButton: {
               displayText: '✆ 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛',
               id: '.owner',
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
handler.command = /^sos$/i

module.exports = handler
