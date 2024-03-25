import moment from 'moment-timezone';

const handler = async (m, {conn}) => {

  const tzAF = moment().tz('Africa/Casablanca').format('DD/MM HH:mm');
  await conn.sendMessage(m.chat, {text: `\`\`\`
الوقت الحالي في المغرب هو :


▢ morocco     : ${tzAF}
  ${String.fromCharCode(8206).repeat(850)}
  ▢ `}, {quoted: m});
  };
handler.help = ["رت"]
handler.tags = ["infobot"]
handler.command = /^(رت)$/i
  export default handler;
