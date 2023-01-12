import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/ShadowBotV4-MD/master/src/JSON/navidad.json`)).data  
let shadow = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_Navidad 🧑‍🎄_`, author, shadow, [['🔄 SIGUIENTE 🔄', `${usedPrefix + command}`]], m)}
handler.help = ['navidad']
handler.tags = ['internet']
handler.command = /^(navidad)$/i
export default handler
