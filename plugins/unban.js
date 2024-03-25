let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('🌹عليكم سلام ورحمه الله وبركاته!')
}
handler.help = ['سلام عليكم']
handler.tags = ['owner']
handler.command = /^سلام عليكم$/i
handler.owner = true

export default handler
