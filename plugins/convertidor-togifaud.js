/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `*[❗] Responda a un vídeo que desee convertir en gif con audio*`
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `*[❗] El tipo de archivo  ${mime} no es correcto, Responda a un vídeo que desee convertir en gif con audio*`
m.reply(global.wait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: '*AQUI ESTA SU GIF CON AUDIO, AL ABRIRLO SE REPRODUCE CON AUDIO*' }, { quoted: m })}
handler.command = ['togifaud']
export default handler
