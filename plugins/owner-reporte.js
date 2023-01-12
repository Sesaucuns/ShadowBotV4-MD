let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*_Ingrese un reporte_*\n\n*_Ejemplo:_*\n*_#report El comando #owner tiene fallos, no manda el numero del creador_*`
if (text.length < 10) throw `*⚠️ EL REPORTE DEBE SER MINIMO 10 CARACTERES!*`
if (text.length > 1000) throw `*⚠️ EL REPORTE DEBE DE SER MAXIMO 1000 CARACTERES!*`
let teks = `*❒═════[𝐑𝐄𝐏𝐎𝐑𝐓𝐄]═════❒*\n*┬*\n*├❧ NUMERO:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ MENSAJE:* ${text}\n*┴*`
conn.reply('593959425714@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply('5219992095479@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply(`*_✅ El problema se ha informado al propietario del Bot ✅_*\n\n*_Nos pondremos en contacto contigo a la brevedad posible️_*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
