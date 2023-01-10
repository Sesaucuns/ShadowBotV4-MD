import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*LOS COMANDOS +18 ESTAN DESACTIVADOS EN ESTE GRUPO, SI ES ADMIN Y DESEA ACTIVARLOS  USE EL COMANDO #enable modohorny*'
if (!text) throw `*EJEMPLO DE USO DEL COMANDO ${usedPrefix + command} Con mi prima*`
try {
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `*Videos relacionados con : ${args.join(" ")}*`
const sections = [{
title: `ⓡⓔⓢⓤⓛⓣⓐⓓⓞⓢ`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '*Elija una opción y presione enviar*',
title: " 『 𝗩𝗜𝗗𝗘𝗢𝗦 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡𝗔𝗗𝗢𝗦 』",
buttonText: "[🔘 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 🔘]",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: '⇧ sᴇʟᴇᴄᴄɪᴏɴᴀ ᴇsᴛᴀ ᴏᴘᴄɪᴏɴ ᴘᴀʀᴀ ᴅᴇsᴄᴀʀɢᴀʀ ᴇsᴛᴇ ᴠɪᴅᴇᴏ ⇧', rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*⚠️ ERROR, POR FAVOR VUELVA A INTENTARLO*')
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i
export default handler
