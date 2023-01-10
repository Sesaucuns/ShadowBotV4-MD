import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*✳️ Uhm.. que estas buscando?*\n*👉🏻 Ingrese un texto o enlace de YT*\n\n*✅ Ejemplo:*\n*${usedPrefix + command} Begin you*`
  await m.reply(wait)
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '*El video no se encontró, intente ingresar el nombre original de la canción o video*'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId

  let captvid = `╭──── 〔 Y O U T U B E 〕 ─⬣
*🔥 Titulo:* _${title}_
*⏰ Duración:* ${durationH}
*🔍 Vistas:* ${viewH}
*🗓️ Publicado:* ${publishedTime}
*📎 Link:* ${vid.url}
╰────────⬣`
  conn.sendButton(m.chat, `╭──── 〔 Y O U T U B E 〕 ─⬣
*🔥 Titulo:* _${title}_
*⏰ Duración:* ${durationH}
*🔍 Vistas:* ${viewH}
*🗓️ Publicado:* ${publishedTime}
*📎 Link:* ${vid.url}
╰────────⬣`, author.trim(), await( await conn.getFile(thumbnail)).data, ['📽VIDEO', `${usedPrefix}getvid ${url} 360`], false, { quoted: m, 'document': { 'url':'https://wa.me/12522518391' },
'mimetype': global.dpdf,
'fileName': `𝕐𝕠𝕦𝕋𝕦𝕓𝕖 ℙ𝕝𝕒𝕪𝕤`,
'fileLength': 666666666666666,
'pageCount': 666,contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: `${url}`,
title: `⏰ Enviando audio`,
body: wm,
sourceUrl: 'http://wa.me/12522518391', thumbnail: await ( await conn.getFile(thumbnail)).data
  }
 } 
})
  
  
  const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
	}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play$/i

handler.exp = 0
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
