let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^رينجو$/i.test(m.text)) { 
 responses = [ 
 '*تحت امرك حبي🏵️*'
 ]; 
 } else if (/^سلام عليكم$/i.test(m.text)) { 
     responses = [ 
'*🌹عليكم سلام🌹*'
     ]; 
   } else if (/^اومر|قائمة|مهام$/i.test(m.text)) { 
     responses = [ 
       '*اذا اردت القائمة اكتب .اوامر⚕️*',  
     ];
 }else if (/^تست$/i.test(m.text)) { 
     responses = [ 
       '*💫شغال شغال تست*',  
     ];
  }else if (/^هلا$/i.test(m.text)) { 
     responses = [ 
       '*هلا نورت يا عمري🌷*',  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
