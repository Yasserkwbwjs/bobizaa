import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│👋 مرحبا يا , ${conn.getName(m.sender)}!
│🍁 أتمنى أنك بخير ♥ رينجو أون لاين الآن 
يمكنك إستخدامه عبر كتابة .اومر
╰────────────────────
*─[ BY NOUREDDINE_OUAFY ]*🌟✨
`.trim()
  m.reply(caption)
}
handler.help = ['رينجو']
handler.tags = ['infobot']
handler.command = /^(رينجو)$/i


export default handler
