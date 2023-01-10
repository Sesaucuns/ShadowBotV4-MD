let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*Este chat ha sido baneado\nel bot no responderá a ningún comando hasta que sea debaneado*.')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.rowner = true
export default handler
