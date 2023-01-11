let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*✅ MENSAJE DE DESPEDIDA CONFIGURADO COM EXITO*')
} else throw `*⚠️ Ingrese el mensaje de despedida que desee agregar, use:*\n*- @user (mención)*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
export default handler
