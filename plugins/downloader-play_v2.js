import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `*✳️ Uhm.. que estas buscando?*\n*👉🏻 Ingrese un texto o enlace de YT*\n\n*✅ Ejemplo:*\n*${usedPrefix + command} Begin you*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play.1') {
conn.reply(m.chat, `*_⏰ Enviando video..._*`, m)  
let json = await res.json()
let aa = conn.sendMessage(m.chat, { audio: { url: json.result.audio }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
if (!aa) return conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏰ Enviando audio..._*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_The Shadow Brokers - Bot - MD_`, m)}
} catch (e) {
m.reply('*⚠️ ERROR, INTENTALO DE NUEVO.*')
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
