import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝙴𝚂𝚃𝙰𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾\n\n¿𝚀𝚄𝙸𝚁𝚁𝙴 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁𝚂𝙴?\n\n 📌𝚄𝚂𝙴 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙿𝙰𝚁𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝚂𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾\n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾*\n\n*—◉ 𝚄𝚂𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${usedPrefix + command} nombre.edad*\n*—◉ Ejemplo: ${usedPrefix + command} Shadow.18*`
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
conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|reg|registrar)$/i
export default handler
