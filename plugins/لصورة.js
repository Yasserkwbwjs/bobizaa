 import sharp from 'sharp'

 const TIMEOUT = 10000; // 10 detik

 let handler = async (m, { conn, usedPrefix, command }) => {
   const notStickerMessage = `المرجو الاشارة للملصق الذي تريد ان تحوله لصورة ثم تكتب \n *${usedPrefix + command}*`;

   if (!m.quoted) throw notStickerMessage;

   const q = m.quoted || m;
   const mime = q.mimetype || '';

   if (!/image\/webp/.test(mime)) throw notStickerMessage;

   try {
     // Download sticker
     const media = await q.download();

     // Dekoding WebP tanpa webp-js
     const decodedBuffer = await sharp(media).toFormat('png').toBuffer();

     // Send PNG image
     if (decodedBuffer.length > 0) {
       await conn.sendFile(m.chat, decodedBuffer, 'out.png', '*R i n g o🍒*', m);
     } else {
       throw 'فشل تحويل الملصق إلى صورة.';
     }
   } catch (error) {
     console.error(error);
     if (error.message === 'Timeout of 10000ms exceeded') {
       m.reply('فشلت عملية التحويل.');
     } else {
       m.reply(`فشلت عملية التحويل`);
     }
   }
 };

 handler.help = ['*لصورة*']
 handler.tags = ['sticker']
 handler.command = ['لصورة']

 

 export default handler
