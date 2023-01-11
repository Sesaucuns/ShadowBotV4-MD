import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*✳️ INGRESE EL NUEVO NOMBRE PARA EL GRUPO*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*⚠️ Error, máximo de caracteres: 25*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(setname)$/i
handler.group = true
handler.admin = true
export default handler
