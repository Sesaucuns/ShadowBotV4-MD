let handler = async (m, { conn, text}) => {
if (!text) throw '*A quien quiere desbanear? etiquete a la persona con el @*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*A quien quiere desbanear? etiquete a la persona con el @*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*✅ Listo, usuario desbaneado*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
