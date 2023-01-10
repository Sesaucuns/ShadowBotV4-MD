import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*✳️ Ingresa el nombre de alguna canción*`
try {
let res = await fetch(`https://api.akuari.my.id/search/searchsoundcloud?query=${text}`)
let json2 = await res.json()
let urlSC = await json2.hasil[0].url
let res2 = await fetch(`https://api.akuari.my.id/downloader/scdl?link=${urlSC}`)
let json = await res2.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.link}`)).text()
let soundcloudt = `❒═══❬ 𝐒𝐎𝐔𝐍𝐃𝐂𝐋𝐎𝐔𝐃 ❭═══╾❒
┬
├‣✨ *TÍTULO:* ${json.title}
┴
┬
├‣💚 *URL DIRECTO:* ${shortUrl}
┴
┬
├‣ *-⏰ ENVIANDO MUSICA...*
┴
┬
├ _﹫ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ_
┴`
conn.sendFile(m.chat, json.thumb, '', soundcloudt, m)
conn.sendMessage(m.chat, { audio: { url: json.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
//conn.sendFile(m.chat, json.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
throw '*⚠️ No se encontró la canción o la página está caída*'
}}
handler.command = /^(soundcloud|cover)$/i
export default handler
