import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `*╔══❰ 𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎 ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, 'ESTE ES UN COMUNICADO ESPECIAL\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 owner 🤖', '.owner'],['💎 donar 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'ᴄᴏᴍᴜɴɪᴄᴀᴅᴏ ᴏғɪᴄɪᴀʟ ᴀ ᴛᴏᴅᴏs ʟᴏs ᴄʜᴀᴛs',
body: '🔥 THE SHADOW BROKERS - BOT 🔥', 
sourceUrl: `https://github.com/DIEGO-OFC/ShadowBotV4-MD`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*⚠️ MENSAJE ENVIADO A TODOS LOS CHATS, ES POSIBLE QUE TENGA FALLOS*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler
