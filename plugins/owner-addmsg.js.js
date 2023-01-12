let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/agregar/i, '')
    if (!m.quoted) throw '*⚠️ RESPONDE A UN TEXTO IMAGEN ETC, CON UNA PALABRA CLAVE'
    if (!text) throw `*⚠️ Utiliza *${usedPrefix}list${which}* Para ver la lista de Mensajes`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `*✅ '${text}' FUE AÑADIDO A LA LISTA DE MENSAJES`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`*✅ Mensaje agregado a la lista como '${text}'*\n*ACCEDE CON ${usedPrefix}ver${which} ${text}*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^agregar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler
