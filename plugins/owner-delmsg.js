let handler = async (m, { command, usedPrefix, text }) => {
let which = command.replace(/eliminar/i, '')
if (!text) throw `*⚠️ USAR ${usedPrefix}list${which} PARA VER LA LISTA*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*⚠️ '${text}' NO REGISTRADO EN LA LISTA DE MENSAJES*`
delete msgs[text]
m.reply(`*✅ Eliminó con éxito la lista de mensajes llamada: '${text}'*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^eliminar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler
