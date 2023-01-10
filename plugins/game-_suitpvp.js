let handler = m => m
handler.before = async function (m) {
this.suit = this.suit ? this.suit : {}
if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
if (room) {
let win = ''
let tie = false
if (m.sender == room.p2 && /^(acc(ept)?|terima|aceptar|gas|aceptare?|nao|gamau|rechazar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
if (/^(tolak|gamau|rechazar|ga(k.)?bisa)/i.test(m.text)) {
let textno = `*⚠️ @${room.p2.split`@`[0]} RECHAZO EL PVP, EL JUEGO SE CANCELA*`
m.reply(textno, null, {mentions: this.parseMention(textno)})
delete this.suit[room.id]
return !0 }
room.status = 'play'
room.asal = m.chat
clearTimeout(room.waktu)
let textplay = `🎮 GAMES - PVP - GAMES 🎮\n\n—◉ EL JUEGO COMIENZA, LAS OPCIONES HAN SIDO ENVIADAS  A LOS CHATS PRIVADOS DE @${room.p.split`@`[0]} 𝚈 @${room.p2.split`@`[0]}\n\n◉ SELECCIONEN UNA OPCION EN SUS CHATS PRIVADOS, RESPECTIVAMENTE\n*◉ ELEGIR OPCIÓN EN wa.me/${conn.user.jid.split`@`[0]}*`
m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)})
let imgplay = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`    
if (!room.pilih) this.sendHydrated(room.p, 'POR FAVOR SELECCIONE UNA DE LAS SIGUIENTES OPCIONES', `GANADOR +${room.poin}𝚇𝙿\nPERDEDOR ${room.poin_lose}𝚇𝙿`, imgplay, null, null, null, null, [['PIEDRA 🗿', 'Piedra'], ['PAPEL 📄', 'Papel'], ['TIJERA ✂️', 'Tijera']], m)
if (!room.pilih2) this.sendHydrated(room.p2, 'POR FAVOR SELECCIONE UNA DE LAS SIGUIENTES OPCIONES', `GANADOR +${room.poin}𝚇𝙿\nPERDEDOR ${room.poin_lose}𝚇𝙿`, imgplay, null, null, null, null, [['PIEDRA 🗿', 'Piedra'], ['PAPEL 📄', 'Papel'], ['TIJERA ✂️', 'Tijera']], m)                             
room.waktu_milih = setTimeout(() => {
if (!room.pilih && !room.pilih2) this.sendButton(m.chat, `⚠️ NINGUN JUGADOR TOMO LA INICIO DE INICIAR EL JUEGO, EL PVP SE A CANCELADO`, wm, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '#menu']], m)
else if (!room.pilih || !room.pilih2) {
win = !room.pilih ? room.p2 : room.p 
let textnull = `*⚠️ @${(room.pilih ? room.p2 : room.p).split`@`[0]} NO ELEGISTE NINGUNA OPCIÓN, FIN DEL PVP*`
this.sendButton(m.chat, textnull, wm, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '#menu']], m, { mentions: this.parseMention(textnull)})
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
}
delete this.suit[room.id]
return !0
}, room.timeout)}
let jwb = m.sender == room.p
let jwb2 = m.sender == room.p2
let g = /tijera/i
let b = /piedra/i
let k = /papel/i
let reg = /^(tijera|piedra|papel)/i
if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
room.pilih = reg.exec(m.text.toLowerCase())[0]
room.text = m.text
m.reply(`*[ ✔ ] 𝙷𝙰𝚂 𝙴𝙻𝙴𝙶𝙸𝙳𝙾 ${m.text}, REGRESA AL GRUPO Y ${room.pilih2 ? `REVISA LOS RESULTADOS*` : 'ESPERA LOS RESULTADOS*'}`)
if (!room.pilih2) this.reply(room.p2, '*[⚠️] EL OPONENTE A ELEGIDO, ES TU TURNO, ELIJE!!*', 0)}
if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
room.pilih2 = reg.exec(m.text.toLowerCase())[0]
room.text2 = m.text
m.reply(`*[ ✔ ] 𝙷𝙰𝚂 𝙴𝙻𝙴𝙶𝙸𝙳𝙾 ${m.text}, REGRESA AL GRUPO Y ${room.pilih ? `REVISA LOS RESULTADOS*` : 'ESPERA LOS RESULTADOS*'}`)
if (!room.pilih) this.reply(room.p, '*[⚠️] EL OPONENTE A ELEGIDO, ES TU TURNO, ELIJE!!*', 0)}
let stage = room.pilih
let stage2 = room.pilih2
if (room.pilih && room.pilih2) {
clearTimeout(room.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = room.p
else if (b.test(stage) && k.test(stage2)) win = room.p2
else if (g.test(stage) && k.test(stage2)) win = room.p
else if (g.test(stage) && b.test(stage2)) win = room.p2
else if (k.test(stage) && b.test(stage2)) win = room.p
else if (k.test(stage) && g.test(stage2)) win = room.p2
else if (stage == stage2) tie = true 
this.reply(room.asal, `
*👑 RESULTADO DEL PVP 👑*${tie ? '\n*—◉ EMPATE!!*' : ''}

*@${room.p.split`@`[0]} (${room.text}) ${tie ? '' : room.p == win ? ` GANO 🥳 +${room.poin}XP*` : ` PERDIO 🤡 ${room.poin_lose}XP*`}
*@${room.p2.split`@`[0]} (${room.text2}) ${tie ? '' : room.p2 == win ? ` GANO 🥳 +${room.poin}XP*` : ` PERDIO 🤡 ${room.poin_lose}XP*`}
`.trim(), m, { mentions: [room.p, room.p2] } )
if (!tie) {
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose
}
delete this.suit[room.id]}}
return !0
}
handler.exp = 0
export default handler
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]}
