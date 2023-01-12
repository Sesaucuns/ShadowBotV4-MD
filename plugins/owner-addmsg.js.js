let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/agregar/i, '')
    if (!m.quoted) throw '*⚠️ RESPONDE A UN TEXTO IMAGEN ETC, CON UNA PALABRA CLAVE'
    if (!text) throw `*⚠️ Utiliza *${usedPrefix}list${which}* Para ver la lista de Mensajes`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `*✅ '${text}' FUE AÑADIDO A LA LISTA DE MENSAJES`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝙴𝚇𝙸𝚃𝙾𝚂𝙰𝙼𝙴𝙽𝚃𝙴 𝙰 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝙲𝙾𝙼𝙾 '${text}'*\n*𝙰𝙲𝙲𝙴𝙳𝙴 𝙲𝙾𝙽 ${usedPrefix}ver${which} ${text}*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^agregar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler
