let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "🖤",
 key: m.key,
   }
  })

  await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: global.veeeee }, { quoted: m })
}

handler.help = ['شادو']
handler.tags = ['anime']
handler.command = /^(شادو)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/6d903f989707de79e567b.mp4',
'https://telegra.ph/file/22ecc343f08752befd263.mp4',
'https://telegra.ph/file/ceccbf7b0430ea3e540df.mp4',
'https://telegra.ph/file/c41394beb1d1dc75c21b2.mp4',
'https://telegra.ph/file/7e83a6c0581f1ac6fc896.mp4',
'https://telegra.ph/file/6459a5571aa37b3ff4d09.mp4',
'https://telegra.ph/file/9de72c2d414605c800898.mp4',
'https://telegra.ph/file/c6c9f0e8d39fd59e386dd.mp4',
'https://file.io/S9S79GaGEITB',
'https://telegra.ph/file/46477c73c9a14ed3726ea.mp4',
'https://telegra.ph/file/e1204862b247b4d183595.mp4',
'https://telegra.ph/file/baaf8f74eba302654582a.mp4',
'https://telegra.ph/file/76de4b8a80f74e719df25.mp4',
'https://telegra.ph/file/6ba95d552f91c36e905bc.mp4',
'https://telegra.ph/file/61e63420d4e4fb9c01cbe.mp4',
'https://telegra.ph/file/2517f8f82eb46c2c28436.mp4',
'https://telegra.ph/file/b9313a30e8588ddbe6b3b.mp4',
'https://telegra.ph/file/bf2436f3a0871ed62d2a1.mp4',
'https://telegra.ph/file/03a2038386e90065488cd.mp4',
'https://telegra.ph/file/062287dc08e35d4bd8e12.mp4',
'https://telegra.ph/file/e99f002d29444cd7ab7df.mp4',
'https://telegra.ph/file/3ace589d56398c30dd61b.mp4',
'https://telegra.ph/file/6ba95d552f91c36e905bc.mp4',
'https://telegra.ph/file/ed58d6cd02a454ba5c631.mp4',
'https://telegra.ph/file/0ed49fdd54964a0719703.mp4',
'https://telegra.ph/file/d32f8c8a710c7f9cab998.mp4',
'https://telegra.ph/file/e306814b329bfcf2b0110.mp4',
'https://telegra.ph/file/03a2038386e90065488cd.mp4',
'https://telegra.ph/file/baaf8f74eba302654582a.mp4',
'https://telegra.ph/file/48ca82fb90bfb3b7f6012.mp4',
'https://telegra.ph/file/2eb02d19a91105e27f310.mp4',
'https://telegra.ph/file/3ad4ed8c29c192b22a930.mp4',
'https://telegra.ph/file/1e63ce87956a957887a3d.mp4',
'https://telegra.ph/file/14e90c9ac77744abdc5f9.mp4',
'https://telegra.ph/file/c6c2c4dd92183ca3bfecc.mp4',
'https://telegra.ph/file/a7c10cb422b59edd696a8.mp4',
'https://telegra.ph/file/2819457009827c17ea108.mp4',
'https://telegra.ph/file/06ef445a005324fe5651e.mp4',
'https://telegra.ph/file/f512d6b6a89dfd74e47da.mp4',
'https://telegra.ph/file/73906e7624294958d641e.mp4',
'https://telegra.ph/file/54c4c1cedb7fa9e1fcbd0.mp4',
'https://telegra.ph/file/65750aa0ab5b438cd9e53.mp4',
'https://telegra.ph/file/3cc40f103da437f36587a.mp4',
'https://telegra.ph/file/4405dd1bade6e82a3a0fc.mp4',
'https://telegra.ph/file/cca277024cc30d63585b4.mp4',
'https://telegra.ph/file/60ce944ddf7d58f92cece.mp4',  
'https://telegra.ph/file/6b01a95fce815b19665c8.mp4',
'https://telegra.ph/file/e8669380855d38d00e09a.mp4',
'https://telegra.ph/file/a61749fd08f4d11b06fb0.mp4',
'https://telegra.ph/file/badc7c45af4c15ec485a6.mp4',
]
