import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `⚠️ YA ESTAS REGISTRADO/A\n\n¿QUIERE VOLVER A REGISTRARSE?\n\n 📌USE ESTE COMANDO\n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `*⚠️ FORMATO INCORRECTO*\n\n*—◉ USO DEL COMANDO: ${usedPrefix + command} nombre.edad*\n*—◉ Ejemplo: ${usedPrefix + command} Shadow.18*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*⚠️ DEBES PONER UN NOMBRE*'
  if (!age) throw '*⚠️ LA EDAD NO PUEDE ESTAR VACIA*'
  if (name.length >= 30) throw '⚠️ EL NOMBRE ES DEMASIADO LARGO' 
  age = parseInt(age)
  if (age > 100) throw '*⚠️ como sigues vivo con esa edad viejo? 👴🏻*'
  if (age < 5) throw '*⚠️ un bebé que sabe usar WhatsApp? 😲*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `┏━━°❀❬ *PERFIL* ❭❀°━━┓
┃
┣┅ ━━━━━━━━━━━━ ┅ ━
┃• 🔥 *NOMBRE:* ${name}
┃• 📋 *EDAD:* ${age} años
┃• 🖊️ *NÚMERO DE SERIE:* 
┃ ${sn}
┗━━━━━━━━━━━━━━`
let author = global.author
conn.sendButton(m.chat, caption, `¡EL NUMERO DE SERIE SIRVE PARA BORRAR TU RESGISTRO EN EL BOT!\n${author}`, [['PERFIL COMPLETO', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|reg|registrar)$/i
export default handler
