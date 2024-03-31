import fetch from 'node-fetch';

 async function handler(m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) {
  let response = args.join(' ').split('|');
  if (!args[0]) throw 'يمكنك صناعة شعار مثال :\n\n*.الوغو* Uchiha|Away';
  conn.sendMessage(m.chat, {
    react: {
      text: '💝',
      key: m.key,
    }
  });
  let res = `https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=Gatadios&text1=${response[0]}&text2=${response[1]}`;
  conn.sendFile(m.chat, res, 'R I N G O.jpg', `R I N G O🌹`, m, false);
}

handler.help = ['*الوغو*']
handler.tags = ['logo'];
handler.command = /^(الوغو)$/i;
export default handler
