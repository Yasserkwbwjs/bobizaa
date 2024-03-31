let handler = async (m, { conn }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = conn.getName(who)
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg')
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/wasted', {
      avatar: pp, 
    }), 'waste.png', `* لقد اصبحت مقتول ☠️:* ${name}\n\ 『༄✿𝑹 𝑰 𝑵 𝑮 𝑶࿐』`, m)
  }
  
  handler.help = ['waste @user']
  handler.tags = ['fun']
  handler.command = ['قتل'] 
  
  export default handler
