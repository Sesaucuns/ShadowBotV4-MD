let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*⚠️ Etiqueta a la persona que desees quitar premium.*`
if (!global.prems.includes(who.split`@`[0])) throw '*⚠️ EL USUARIO NO ES PREMIUM*'
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
let textdelprem = `*⚠️ @${who.split`@`[0]} YA NO ES PREMIUM*`
m.reply(textdelprem, null, { mentions: conn.parseMention(textdelprem) })
}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.rowner = true
export default handler
