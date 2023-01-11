import { join } from 'path' 
import { promises } from 'fs'
let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
if (user.health >= 100) return conn.sendButton(m.chat, `*TU SALUD ESTA LLENA*❤️`, wm, imgr + `SALUD: ${user.health}`, [
[`🏕️ AVENTURAR`, `${usedPrefix}adventure`]], m)
const heal = 40 + (user.cat * 4)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1
if (user.potion < count) return conn.sendButton(m.chat,`${htki} 𝚂𝙸𝙽 𝙿𝙾𝙲𝙸𝙾𝙽𝙴𝚂 ${htka}`, 
`𝙽ECESITAS ${count - user.potion} POCION 🥤 PARA CURARTE
SALUD » ${user.health} ❤️
POCION » ${user.potion} 🥤
COMPRA POCION O PIDELE A ALGUIEN`.trim(), imgr + 'POCION BAJA', [
[`COMPRAR POCIÓN 🥤`, `${usedPrefix}buy potion ${count - user.potion}`],
[`PEDIR AYUDA 📣`, `${usedPrefix}pedirayuda *Por Favor alguien ayudeme con ${count - user.potion} de POCION* 🥤 
*» AYUDA TRANSFIRIENDO:*
*${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], m)
user.potion -= count * 1 //1 potion = count (1) 
user.health += heal * count 
conn.sendButton(m.chat, `*━┈━《 ✅ 𝚂𝙰𝙻𝚄𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙰 》━┈━*`, `EEXITOSAMENTE USO ${count} DE POCION🥤 PARA RECUPERAR SU SALUD\n\𝚗SALUD » ${user.health} ❤️`, imgr + 'SALUD COMPLETADA', [
[`AVENTURAR 🏕️`, `${usedPrefix}adventure`]], m)}
handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|curar)$/i
export default handler
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)}
