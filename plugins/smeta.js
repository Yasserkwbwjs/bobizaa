const { default: { Image }} = await import('node-webpmux')

let handler = async (m, { conn, text }) => {
  if (!m.quoted) throw 'هذا الأمر يخول لك ان تمسح حقوق اي ملصق يكفي فقط ان ترسل للبوت الملصق الذي سوف تحذف حقوقه ثم تشير له و تكتب هكذا \n\n*.smeta*'
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw '🌒المرجو الاشارة للملصق!'
    let img = await m.quoted.download()
    if (!img) throw 'المرجو الاشارة للملصق!'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
    else throw 'وقع خطأ'
  }
}
handler.help = ["بدون-حقوق"]
handler.tags = ["sticker"]
handler.command = /^(بدون-حقوق)$/i
export default handler

async function addExif(buffer, packname, author, categories = [''], extra = {}) {
  const img = new Image()
  const json = { 'sticker-pack-id': 'parel-kntll', 'sticker-pack-name': packname, 'sticker-pack-publisher': author, 'emojis': categories, 'is-avatar-sticker': 1, ...extra }
  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
  let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
  let exif = Buffer.concat([exifAttr, jsonBuffer])
  exif.writeUIntLE(jsonBuffer.length, 14, 4)
  await img.load(buffer)
  img.exif = exif
  return await img.save(null)
}
