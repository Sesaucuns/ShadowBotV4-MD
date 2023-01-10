let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「 INFORMACIÓN DEL GRUPO 」*\n
*𝙸𝙳𝙴𝙽𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:* 
${groupMetadata.id}

*Nombre:* 
${groupMetadata.subject}

*DESCRIPCIÓN:* 
${groupMetadata.desc?.toString() || '𝚂𝙸𝙽 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽'}

*TOTAL DE PARTICIPANTES:*
${participants.length} Participantes

*CREADOR DEL GRUPO :* 
@${owner.split('@')[0]}

*ADMINS DEL GRUPO:*
${listAdmin}

*OPCIONES AUTOMÁTICAS:*
—◉ WELCOME: ${welcome ? '✅' : '❌'}
—◉ DETECT: ${detect ? '✅' : '❌'} 
—◉ ANTILINK: ${antiLink ? '✅' : '❌'} 
—◉ ANTILINK 𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ MODO HORNY: ${modohorny ? '✅' : '❌'} 
—◉ AUTOSTICKERS: ${autosticker ? '✅' : '❌'} 
—◉ AUDIOS: ${audios ? '✅' : '❌'} 
—◉ ANTIVIEWONCE: ${antiviewonce ? '✅' : '❌'} 
—◉ ANTITOXIC: ${antiToxic ? '✅' : '❌'} 
—◉ ANTITRABA: ${antiTraba ? '✅' : '❌'} 
—◉ MODOADMIN: ${modoadmin ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
