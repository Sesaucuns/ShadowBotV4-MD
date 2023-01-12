import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*⚠️ Etiqueta al usuario  @𝚝𝚊𝚐*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*⚠️ Ingrese la cantidad que desea añadir*'
if (isNaN(txt)) throw '*⚠️ Simbolo no admitido, solo numeros!*'
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw '*⚠️ El mínimo para añadir es 𝟷*'
let users = global.db.data.users
users[who].limit += dmt
m.reply(`≡ *💎 Añadido*
┌──────────────
▢ *total:* ${dmt}
└──────────────`)
}
handler.command = ['añadirdiamantes','addd','dard','dardiamantes'] 
handler.rowner = true
export default handler
