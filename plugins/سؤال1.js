import fetch from "node-fetch";
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `معك الذكاء الاصطناعي *GEMINI* الـخاص بغوغل كيف يمكنني مساعدتك ? يكفي ان تكتب هكذا على سبيل المثال :\n*.gemini2* من هو إبن القيم ?`;
  await m.reply("جاري البحث عن سؤالك سيد(ت)ي انتظر قليلا ...");
  let putra = await fetch(
    `https://www.putz.my.id/api/ai?type=gemini&q=${text}`,
  );
  let hasil = await putra.json();
  let txt = `${hasil.result}`.trim();
  conn.sendMessage(m.chat, {
    text: txt,
    contextInfo: {
      externalAdReply: {
        title: `Gemini Ai`,
        body: wm,
        thumbnailUrl: "https://telegra.ph/file/3d3535f2ea5f0f2034fff.jpg",
        sourceUrl: "https:/bard.google.com",
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  });
};
handler.help = ["سؤال"];
handler.tags = ['ai'];
handler.command = /^(سؤال)$/i;
export default handler;
