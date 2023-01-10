let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `*_A QUIEN QUIERE BANEAR?_*\n\n*_ETIQUETE A ALGUN USUARIO_*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*_EL USUARIO FUE BANEADO CON EXITO_*\n\n*_EL USUARIO NO TENDRA PERMISO PARA USAR EL BOT_*')    }
handler.command = /^banuser$/i
handler.rowner = true
export default handler
