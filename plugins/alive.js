import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│👋 مرحبا يا , ${conn.getName(m.sender)}!
│🍁 أتمنى أنك بخير ♥ رينجو أون لاين الآن 
يمكنوك اعطائي اي امر 
╰────────────────────
*🌟[ 🌹R I N G O🌹 ]*🌟
`.trim()
  m.reply(caption)
}
handler.help = ['رينجو']
handler.tags = ['infobot']
handler.command = /^(رينجو)$/i


export default handler
