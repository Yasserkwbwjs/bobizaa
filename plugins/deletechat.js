async function handler(m, { conn }) {

  conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
  let a = await m.reply("😂تم حذف رسائل هذه المحاذثة بنجاح") 

}
handler.help = ['حدف'],
handler.tags = ['owner'],
handler.command = /^(حدف)$/i
handler.owner = true
export default handler
