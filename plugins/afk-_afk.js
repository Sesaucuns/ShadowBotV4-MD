export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *_✳️ Dejaste de estar inactivo (AFK)${user.afkReason ? ' después de estar inactivo (AFK) por el motivo: ' + user.afkReason : ''}_*

*_⌛ Tiempo de inactividad: ${clockString(new Date - user.afk)}_*
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
*⚠ ️No lo etiquetes!!! ⚠️*

*✳️ El usuario que mencionas está inactivo (AFK)*

*👉${reason ? 'Motivo de inactividad: ' + reason : 'Motivo de inactividad: El usuario no especifico un motivo'}*

*⌛ Tiempo transcurrido de inactividad: ${clockString(new Date - afkTime)}*
`.trim())
    }
    return true
}
