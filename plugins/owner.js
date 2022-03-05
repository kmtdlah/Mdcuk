const PhoneNumber = 

require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;FizzzMD;;;'
                    + 'FN: FizzXyzz\n' // full name
                    + 'ORG:Fizzz-MultiDevice;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6285892842367:+6285892842367\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'F i z z z', contacts: [{ vcard }] } }, { quoted: m })
}
 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
