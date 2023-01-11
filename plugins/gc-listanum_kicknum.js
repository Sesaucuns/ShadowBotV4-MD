/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`*✳️ ESCRIBA UN CODIGO DE PAÍS PARA BUSCAR NÚMEROS EN ESTE GRUPO EJEMPLO: ${usedPrefix + command} 52*`) 
if (isNaN(args[0])) return m.reply(`**✳️ ESCRIBA UN CODIGO DE PAÍS PARA BUSCAR NÚMEROS EN ESTE GRUPO EJEMPLO: ${usedPrefix + command} 52*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`*⚠️ NO HAY NINGUN NÚMERO CON EL PREFIJO +${lol}*`)
let numeros = ps.map(v=> '⭔ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listanum": 
conn.reply(m.chat, `*Lista de números con el prefijo +${lol} Que están en este grupo:*\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
if (!bot.restrict) return m.reply('*[ ⚠️ ] MI CREADOR TIENE DESACTIVADO EL RESTRICT*') 
if (!isBotAdmin) return m.reply('⚠️ EL BOT NO ES ADMIN, NO PUEDE EXTERMINAR A LAS PERSONAS*')          
conn.reply(m.chat, `*[❗] INICIANDO ELIMINACION DE NUMEROS CON EL PREFIJO +${lol}, CADA 10 SEGUNDOS SE ELIMINARÁ A UN USUARIO.`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} ʏᴀ ʜᴀ sɪᴅᴏ ᴇʟɪᴍɪɴᴀᴅᴏ ᴏ ʜᴀ ᴀʙᴀɴᴅᴏɴᴀᴅᴏ ᴇʟ ɢʀᴜᴘᴏ*`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply('*☢️ERROR*')}
break            
}}
handler.command = /^(listanum|kicknum)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
