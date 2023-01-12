let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*_Ingrese un reporte_*\n\n*_Ejemplo:_*\n*_#report El comando #owner tiene fallos, no manda el numero del creador_*`
if (text.length < 10) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙳𝙴 𝙼𝙸𝙽𝙸𝙼𝙾 𝟷0 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂!*`
if (text.length > 1000) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙳𝙴 𝙼𝙰𝚇𝙸𝙼𝙾 𝟷000 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂!*`
let teks = `*❒═════[𝐑𝐄𝐏𝐎𝐑𝐓𝐄]═════❒*\n*┬*\n*├❧ 𝙽𝚄𝙼𝙴𝚁𝙾:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ MENSAJE:* ${text}\n*┴*`
conn.reply('593959425714@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply('5219992095479@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply(`*_✅ El problema se ha informado al propietario del Bot ✅_*\n\n*_Nos pondremos en contacto contigo a la brevedad posible️_*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
