let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('تم حظرك من استعمال البوت يا عزيزي لانك تخالف سياسة استعماله ♥ يمكنك معرفة سياسة استخدام البوت لدى صاحبه اوتشيها ديابلو \https://chat.whatsapp.com/Ix7LABj7QzXLannMxaG4OK 😄!')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['*بان*']
handler.tags = ['owner']
handler.command = /^بان$/i

handler.owner = true

export default handler
