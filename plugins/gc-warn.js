let handler = async (m, { conn, text, command, usedPrefix }) => {
if (m.mentionedJid.includes(conn.user.jid)) return	
let pp = './src/warn.jpg'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
let bot = global.db.data.settings[conn.user.jid] || {}
let warntext = `*✳️ ETIQUETA A ALGUIEN O RESPONDE AL MENSAJE PARA ADVERTIR AL USUARIO*\n\n*—◉ EJEMPLO:*\n*${usedPrefix + command} @${global.suittag}*`
if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
user.warn += 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} RECIBIO UNA ADVERTENCIA EN ESTE GRUPO`, `*ADVERTENCIAS ${user.warn}/3*\n\n${wm}`, pp, [['📋 𝙻𝙸𝚂𝚃𝚆𝙰𝚁𝙽 📋', '#listwarn']], m, { mentions: [who] })
	
if (user.warn >= 3) {
if (!bot.restrict) return m.reply('*[ ⚠️ ] MI CREADOR TIENE DESACTIVADO EL RESTRICT*')        
user.warn = 0
await m.reply(`TE LO ADVERTIR VARIAS VECES!!\n*@${who.split`@`[0]}* SUPERASTE LAS *3* ADVERTENCIAS, AHORA SERAS ELIMINADO/A 👽`, null, { mentions: [who]})
//user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') 
} 
return !1
}
handler.command = /^(advertir|advertencia|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
