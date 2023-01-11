let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix, text }) => {
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[❗] 𝚃𝙴𝚁𝙼𝙸𝙽𝙰 𝚃𝚄 𝙿𝙰𝚁𝚃𝙸𝙳𝙰 𝙰𝙽𝚃𝙴𝚂 𝙳𝙴 𝙸𝙽𝙲𝙸𝙰𝚁 𝙾𝚃𝚁𝙰*'
let textquien = `*⚠️ A QUIEN QUIERE RETAR? ETIQUETA A LA PERSONA*\n\n*—◉ EJEMPLO:*\n${usedPrefix}suit @${global.suittag}`
if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, { mentions: conn.parseMention(textquien)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[❗] 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝙰 𝙻𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙳𝙴𝚂𝙰𝙵𝙸𝙰𝚁 𝙰𝚄𝙽 𝙴𝚂𝚃𝙰 𝙹𝚄𝙶𝙰𝙽𝙳𝙾 𝙾𝚃𝚁𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰, 𝙴𝚂𝙿𝙴𝚁𝙰 𝙰 𝚀𝚄𝙴 𝚃𝙴𝚁𝙼𝙸𝙽𝙴 𝙳𝙴 𝙹𝚄𝙶𝙰𝚁`
let id = 'suit_' + new Date() * 1
let caption = `🎮 GAMES - PVP - GAMES 🎮\n\n—◉ @${m.sender.split`@`[0]} DESAFÍA A @${m.mentionedJid[0].split`@`[0]} A UN PVP DE PIEDRA, PAPEL O TIJERA`.trim()
let footer = `◉ 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 "aceptar" 𝙿𝙰𝚁𝙰 𝙰𝙲𝙴𝙿𝚃𝙰𝚁\n◉ 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 "rechazar" 𝙿𝙰𝚁𝙰 𝚁𝙴𝙲𝙷𝙰𝚉𝙰𝚁`
let imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, imgplaygame, [[`Aceptar`], [`Rechazar`]], null, {mentions: conn.parseMention(caption)}),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `⏰ TIEMPO DE ESPERA FINALIZADO, EL PVP SE CANCELÓ POR FALTA DE RESPUESTA`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.command = /^pvp|suit(pvp)?$/i
handler.group = true
handler.game = true
export default handler
