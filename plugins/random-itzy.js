import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/ShadowBotV4-MD/master/src/JSON/itzy.json`)).data  
let Shadow = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`, author, Shadow, [['🔄 SIGUIENTE 🔄', `/${command}`]], m)}
handler.help = ['itzy','kpopitzy']
handler.tags = ['internet']
handler.command = /^(itzy|kpopitzy)$/i
export default handler
