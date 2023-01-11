import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*Responde al sticker que desea agregar un paquete y un nombre*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*Responde al sticker que desea agregar un paquete y un nombre*'
let img = await m.quoted.download()
if (!img) throw '*Responde al sticker que desea agregar un paquete y un nombre*'
stiker = await addExif(img, packname || global.packname, author || global.author)
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*⚠️ OCURRIO UN ERROR, COMPRUEBE QUE HAYA RESPONDIDO A UN STICKER Y HAYA PUESTO NOMBRE DE PAQUETE Y USUARIO.*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^take|robar|wm$/i
export default handler
