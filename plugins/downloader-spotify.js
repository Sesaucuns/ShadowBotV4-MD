import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗] INGRESA EL NOMBRE DE ALGUNA CANCIÓN*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists } = json2.result
let spotifyi = `❒═════❬ *SPOTIFY* ❭═════╾❒\n┬\n├‣✨ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}\n┴\n┬\n├‣🗣️ *𝙰𝚁𝚃𝙸𝚂𝚃𝙰:* ${artists}\n┴\n┬\n├‣🌐 *𝚄𝚁𝙻*: ${link}\n┴\n┬\n├‣💚 *𝚄𝚁𝙻 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰:* ${json2.result.link}\n┴`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch {
throw '*⚠️ ERROR, NO SE ENCONTRO LA CANCIÓN O LA PAGINA ESTA CAIDA*'
}}
handler.command = /^(spotify|music)$/i
export default handler
