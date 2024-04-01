let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "😂",
 key: m.key,
   }
  })

  await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: global.veeeee }, { quoted: m })
}

handler.help = ['ميمز']
handler.tags = ['anime']
handler.command = /^(ميمز)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/ced37a360c24ca64ea429.jpg',
'https://telegra.ph/file/8752597efcc78077b933f.jpg',
'https://telegra.ph/file/265300d2d86077491a2ce.jpg',
'https://telegra.ph/file/04599c84389366fc1c609.jpg',
'https://telegra.ph/file/a9aaa6058776a57367a94.jpg',
'https://telegra.ph/file/98a261843f2d9034489b1.jpg',
'https://telegra.ph/file/4dbb896232bc4a37dad7d.jpg',
'https://telegra.ph/file/3a28fae0e73440586e8d2.jpg',
'https://telegra.ph/file/2e8dfcd432ed36b670dd5.jpg',
'https://telegra.ph/file/dcea24215a8daeb305fe6.jpg',
'https://telegra.ph/file/e34d4b42f498559cc16b0.jpg',
'https://telegra.ph/file/1847a329ba7abd653adf7.jpg',
'https://telegra.ph/file/54d30f4cfa4d75477f8f8.jpg',
'https://telegra.ph/file/14998db193fc96add1af3.jpg',
'https://telegra.ph/file/8dad5d37701e07822f240.jpg',
'https://telegra.ph/file/29eb2c12aba06f87015d0.jpg',
'https://telegra.ph/file/21e61d4915cc8abbabe41.jpg',
'https://telegra.ph/file/52999cb43ed5eded80767.jpg',
'https://telegra.ph/file/0041c4f825cb590eeaf96.jpg',
'https://telegra.ph/file/40e2919ddc0b2b0cce626.jpg',
'https://telegra.ph/file/37ecb49ff1f72f969ea34.jpg',
'https://telegra.ph/file/75391ac64c74590aa7e0e.jpg',
'https://telegra.ph/file/5238ac61a098f5e79d825.jpg',
'https://telegra.ph/file/bab419d1483d9104977ea.jpg',
'https://telegra.ph/file/bc24a5912818606f17757.jpg',
'https://telegra.ph/file/d62c2734d97be31a687ea.jpg',
'https://telegra.ph/file/19862daaa8e3f7236b6ce.jpg',
'https://telegra.ph/file/f669b294f94641d9ce841.jpg',
'https://telegra.ph/file/9a3e00787a6bf3dd32ab9.jpg',
'https://telegra.ph/file/f5ff2dc1d29b78d29bdca.jpg',
'https://telegra.ph/file/e9fc1265440da99af97bd.jpg',
'https://telegra.ph/file/34a059eaf451081812703.jpg',
'https://telegra.ph/file/0682f6027ff0f690954bd.jpg',  
'https://telegra.ph/file/658683c35c5a220ce2b79.jpg',
'https://telegra.ph/file/ddd89804d67f101b6cf14.jpg',
'https://telegra.ph/file/c05faa3053825da75dec5.jpg',
'https://telegra.ph/file/0dee14ee03af5835daf64.jpg',
'https://telegra.ph/file/977c5ee44d4c46ae1c234.jpg',
'https://telegra.ph/file/e161acfdfcfa1a44e3d66.jpg',
'https://telegra.ph/file/452005026b3de758aba5a.jpg',
'https://telegra.ph/file/83019b30a95f14ec99eb4.jpg',
'https://telegra.ph/file/8333abed1577ad7666760.jpg',
'https://telegra.ph/file/effdaad1230c8271b058c.jpg',
'https://telegra.ph/file/a83066a404b79a89be733.jpg',
'https://telegra.ph/file/36a5c6e7efd2d7c57e391.jpg'
'https://telegra.ph/file/61bb1bcded0a7def488af.jpg'
'https://telegra.ph/file/d56e12818aab40856f1f3.jpg'
'https://telegra.ph/file/abcf944c3e404f0a87ab6.jpg'
'https://telegra.ph/file/16f658ad63b121604fd7f.jpg'
'https://telegra.ph/file/45845e864ad7c76537ec9.jpg'
'https://telegra.ph/file/c8348de2a1a464926bb97.jpg'
'https://telegra.ph/file/1e4fe4d5346d2c6d3a789.jpg'
'https://telegra.ph/file/0fff5ed71af722be88430.jpg'
'https://telegra.ph/file/446e07e95dc8f9854c07c.jpg'
'https://telegra.ph/file/9a49c8da9454a1c36dea8.jpg'
'https://telegra.ph/file/ce92531b212b83d475151.jpg'
'https://telegra.ph/file/7d68eb7e664dc09e9b8c4.jpg'
'https://telegra.ph/file/690369e209e3535552b9b.jpg'
'https://telegra.ph/file/78ff5a0e540b14c3b20fd.jpg'
'https://telegra.ph/file/09746201d2037e40d6369.jpg'
'https://telegra.ph/file/5145aa0129c7054fd3536.jpg'
'https://telegra.ph/file/873df8810c1ec1bd1ade8.jpg'
'https://telegra.ph/file/3b61f8ffee27ef4bf3f35.jpg'
'https://telegra.ph/file/d4bc13dd1033ff6b24887.jpg'
'https://telegra.ph/file/9fd9a0cc041b367e569b4.jpg'
'https://telegra.ph/file/b58982537a0eabed7cc3d.jpg'
'https://telegra.ph/file/b9b140c0c5864846a7167.jpg'
'https://telegra.ph/file/dad8f6cfb4fcb9e7a02a9.jpg'
'https://telegra.ph/file/6e2b5e7fb2ced87dcf873.jpg'
'https://telegra.ph/file/63630cc2a1fc5d82336a4.jpg'
'https://telegra.ph/file/5a6d3c148acc65d0bc1e1.jpg'
'https://telegra.ph/file/aaa465d5a4cedefb51865.jpg'
'https://telegra.ph/file/d80a147b2c3deaaef0e11.jpg'
'https://telegra.ph/file/b7c80921a04276a13e882.jpg'
'https://telegra.ph/file/fa6052daf8dc48280f30e.jpg'
'https://telegra.ph/file/1092db30c47facbf6dcfe.jpg'
'https://telegra.ph/file/8e8d23c4ff4a166d1031f.jpg'
'https://telegra.ph/file/c108761fa2e983897e6a0.jpg'
'https://telegra.ph/file/9840c16dec1ef76e72a43.jpg'
'https://telegra.ph/file/53458fc3990e582154dd4.jpg'
'https://telegra.ph/file/4440a279b0d7d2ced4fd0.jpg'
'https://telegra.ph/file/5e50e0802dac709b295b8.jpg'
'https://telegra.ph/file/b2d4ab50b61763355013e.jpg'
'https://telegra.ph/file/67aa0e8a9ec7d8a8f2661.jpg'
'https://telegra.ph/file/ca11630a42e6bbb74043e.jpg'
'https://telegra.ph/file/264cbf8d29bf3ec6d0b64.jpg'
'https://telegra.ph/file/106b1d4cc05ccabad3179.jpg'
''
''
''
''
''
''
''
''
''
''
''
''

'',
]
