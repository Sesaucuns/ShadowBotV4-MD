let handler = async (m, { conn, command, usedPrefix }) => {
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
conn.sendButton(m.chat, `ミ💖 Hola estimado usuario 💖彡*
*ミ🤖 Estado del Bot 🤖彡*
*=> Bot activo ✔️*
*=> Bot uso público ✔️*`.trim(), wm, [['🔷️ MENÚ 🔷', `#menu`]],m)}

handler.command = /^(estado|status|estate|state|stado|stats)$/i

export default handler
