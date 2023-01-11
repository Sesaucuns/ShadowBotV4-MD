import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '*⚠️ Ingresa tu número de serie, si no lo recuerdas usa  #myns*'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '*⚠️Número de serie incorrecto, comprueba que lo escribiste correctamente!*\n\n*SI NO LO RECUERDAS USA EL COMANDO #myns*'
user.registered = false
m.reply(`*✅ REGISTRO ELIMINADO*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
