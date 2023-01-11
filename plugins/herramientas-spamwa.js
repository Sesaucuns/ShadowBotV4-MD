let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*[ ⚠️ ] Por favor ingrese el numero que dese enviar el spam de mensaje #spamwa numero|texto|cantidad*'
if (!pesan) throw '*[ ⚠️ ] Por favor ingrese el mensaje para hacer spam*\n*USO CORRECTO:*\n*—◉ #spamwa numero|texto|cantidad*\n*EJEMPLO:*\n*—◉ #spamwa 5219999999999|responde :v|25*'
if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] La cantidad debe ser un numero!*\n*USO CORRECTO:*\n*—◉ #spamwa numero|texto|cantidad*\n*EJEMPLO:*\n*—◉ #spamwa 5219999999999|responde :v|25*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*[ ⚠️ ] DEMASIADOS MENSAJES LA CANTIDAD DEBE SER MENOR A 𝟻0 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂*️'
await m.reply(`*✅ EL SPAM DE MENSAJES AL NÚMERO ${nomor} FUE REALIZADA CON EXITO*\n*CANTIDAD ENVIADA:*\n*—◉ ${fixedJumlah} VECES!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.limit = true
export default handler
