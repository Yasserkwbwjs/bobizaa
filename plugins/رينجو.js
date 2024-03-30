import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│يا قلبي  , ${conn.getName(m.sender)}!
│🌷 اتمنى أنك بخير 
│ 
╰────────────────────
*🌟[ 🌹R I N G O🌹 ]*🌟
`.trim()
  m.reply(caption)
}
handler.help = ['*رينجو*']
handler.tags = ['infobot']
handler.command = /^(رينجو)$/i


export default handler
