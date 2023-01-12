let handler = async(m, { conn, text }) => {
  if (!text) throw `*⚠️ NO SE A DETECTADO NINGUN PREFIJO...`
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
  await m.reply(`*✅ EL PREFIJO A SIDO CAMBIADO A* *${text}*`)
    // conn.fakeReply(m.chat, '*✅ EL PREFIJO A SIDO CAMBIADO A ${text}*', '0@s.whatsapp.net', 'Set Prefix Bot')
}
handler.help = ['setprefix'].map(v => v + ' [prefix]')
handler.tags = ['owner']
handler.command = /^(setprefix)$/i
handler.rowner = true

export default handler 
