/*
- Obten mas efectos en https://violetics.pw/api/ephoto360
- Usa la apikey "beta"
*/
let handler = async (m, { conn, args, command, usedPrefix }) => { 
let response = args.join(' ').split('|')
if (!args[0]) throw '*✳️ INGRESE UN TEXTO*'
if (command == 'logocorazon') {
try {  
await conn.reply(m.chat, '*CREANDO DISEÑO, POR FAVOR ESPERA...*', m)
let res = `https://violetics.pw/api/ephoto360/heart-flashlight?apikey=beta&text=${response[0]}`
await conn.sendFile(m.chat, res, 'error.jpg', null, m)
} catch {
await conn.reply(m.chat, '*⚠️ error, vuelva a intentarlo *', m)}}
if (command == 'logochristmas') {
try {  
await conn.reply(m.chat, '*Creando diseño por favor espera...*', m)  
let res = `https://violetics.pw/api/ephoto360/christmas-snow?apikey=beta&text=${response[0]}`
await conn.sendFile(m.chat, res, 'error.jpg', null, m)
} catch {
await conn.reply(m.chat, '*⚠️ Error, vuelva a intentarlo*', m)}}
}
handler.command = /^logocorazon|logochristmas/i
export default handler
