let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*⚠️ Ingresa el tag de la persona*`
if (global.prems.includes(who.split`@`[0])) throw '*⚠️ El usuario ya es premium *'
global.prems.push(`${who.split`@`[0]}`)
let textprem = `*✅ @${who.split`@`[0]} Ahora es premium, No tendrá límites al usar el bot*`
m.reply(textprem, null, { mentions: conn.parseMention(textprem) })
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.rowner = true
export default handler
