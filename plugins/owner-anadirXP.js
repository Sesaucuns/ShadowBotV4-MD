import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '⚠️ ETIQUETA A ALGUIEN*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*⚠️ INGRESA LA CANTIDAD DE EXPERIENCIA (XP) QUE QUIERAS AÑADIR*'
if (isNaN(txt)) throw '*⚠️ SÍMBOLO NO ADMITIDO, SOLO NUMEROS*'
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk
if (exp < 1) throw '*⚠️ EL NUMERO MINIMO PARA AÑADIR ES 𝟷*'
let users = global.db.data.users
users[who].exp += xp
  m.reply(`≡ *XP AÑADIDO*
┌──────────────
▢  *TOTAL:* ${xp}
└──────────────`)
}
handler.command = ['añadirxp','addexp'] 
handler.rowner = true
export default handler
