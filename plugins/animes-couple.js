import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '_أرسلها لصديقتك♂️_ \nولا تنسى متابعتي هنا \ninstagram.com/noureddine_ouafy', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '_ارسلها لصديقك♀️_\n ولا تنسى متابعتي هنا \ninstagram.com/noureddine_ouafy', m)
}
handler.help = ['تطقيم','تطقيم']
handler.tags = ['anime']
handler.command = ['تطقيم','تطقيم'] 


export default handler
