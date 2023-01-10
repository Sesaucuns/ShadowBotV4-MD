import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*LOS COMANDOS +18 ESTAN DESACTIVADOS EN ESTE GRUPO, SI ES ADMIN Y DESEA ACTIVARLOS  USE EL COMANDO #enable modohorny*'
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝚇𝙽𝚇𝚇, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`
try {
await conn.reply(m.chat, '[❗] 𝐸𝑙 𝑣𝑖𝑑𝑒𝑜 𝑒𝑠𝑡𝑎 𝑠𝑖𝑒𝑛𝑑𝑜 𝑝𝑟𝑜𝑐𝑒𝑠𝑎𝑑𝑜, 𝑒𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑚𝑜𝑚𝑒𝑛𝑡𝑜 𝑒𝑛 𝑙𝑜 𝑞𝑢𝑒 𝑒𝑠 𝑒𝑛𝑣𝑖𝑎𝑑𝑜..\n\n﹣ ᴇʟ ᴛɪᴇᴍᴘᴏ ᴅᴇ ᴇɴᴠɪᴏ ᴅᴇᴘᴇɴᴅᴇ ᴅᴇʟ ᴘᴇsᴏ ʏ ᴅᴜʀᴀᴄɪᴏ́ɴ ᴅᴇʟ ᴠɪᴅᴇᴏ', m)
let res = await fetch(`https://zenzapis.xyz/downloader/xnxx?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*\n\n*- 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝚂𝙴𝙰 𝚂𝙸𝙼𝙸𝙻𝙰𝚁 𝙰:*\n*◉ https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*')
}}
handler.command = /^(xnxxdl)$/i
export default handler
