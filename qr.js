// get qr  code of any bot using this ....................
//coded  by wasi


const express = require("express");
const app = express();





const pino = require("pino");
let { toBuffer } = require("qrcode");
const path = require('path');
const fs = require("fs-extra");
const { Boom } = require("@hapi/boom");
const PORT = process.env.PORT ||  5000
const MESSAGE = process.env.MESSAGE ||  `
┌───⭓『
❒ *𝙏𝘼𝘽𝘽𝙐 𝘼𝙍𝘼𝙄𝙉*
❒ _NOW DEPLOY YOUR BOT_
└────────────⭓
┌───⭓
❒  • Chat with Owner •
❒ *𝐹𝒜𝒞𝐸𝐵𝒪𝒪𝒦* _https://www.facebook.com/TabbuArain_
❒ *𝒲𝐻𝒜𝒯𝒮𝒜𝒫𝒫* _wa.me/994402197773_
❒ *𝒢𝐼𝒯𝐻𝒰𝐵* _https://github.com/Tabbu-Arain_
└────────────⭓ 
_𝙳𝙾𝙽𝚃 𝙵𝙾𝚁𝙶𝙴𝚃 𝚃𝙾 𝙵𝙾𝙻𝙻𝙾𝚆 𝙼𝙴 𝙾𝙽 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺_











if (fs.existsSync('./auth_info_baileys')) {
    fs.emptyDirSync(__dirname + '/auth_info_baileys');
  };
  
  app.use("/", async(req, res) => {

  const { default: WasiWASocket, useMultiFileAuthState, Browsers, delay,DisconnectReason, makeInMemoryStore, } = require("@whiskeysockets/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function WASI() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let Smd =WasiWASocket({ 
        printQRInTerminal: false,
        logger: pino({ level: "silent" }), 
        browser: [Browsers.Chrome, 'Windows 10', 'Chrome/89.0.4389.82'],
        auth: state 
        });


      Smd.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (qr) { res.end(await toBuffer(qr)); }


        if (connection == "open"){
          await delay(3000);
          let user = Smd.user.id;


//===========================================================================================\\
//=====================================  SESSION ID    ======================================\\
//===========================================================================================\\

          let CREDS = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json')
          var Scan_Id = Buffer.from(CREDS).toString('base64')
         // res.json({status:true,Scan_Id })
          console.log(`
====================  SESSION ID  ==========================                   
SESSION-ID ==> ${Scan_Id}
-------------------   SESSION CLOSED   -----------------------
`)


          let msgsss = await Smd.sendMessage(user, { text:  Scan_Id });
          await Smd.sendMessage(user, { text: MESSAGE } , { quoted : msgsss });
          await delay(1000);
          try{ await fs.emptyDirSync(__dirname+'/auth_info_baileys'); }catch(e){}


        }

        Smd.ev.on('creds.update', saveCreds)

        if (connection === "close") {            
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            // console.log("Reason : ",DisconnectReason[reason])
            if (reason === DisconnectReason.connectionClosed) {
              console.log("Connection closed!")
             // WASI().catch(err => console.log(err));
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server!")
            //  WASI().catch(err => console.log(err));
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...")
              WASI().catch(err => console.log(err));
            } else if (reason === DisconnectReason.timedOut) {
                console.log("Connection TimedOut!")
             // WASI().catch(err => console.log(err));
            }  else {
                console.log('Connection closed with bot. Please run again.');
                console.log(reason)
              //process.exit(0)
            }
          }



      });
    } catch (err) {
        console.log(err);
       await fs.emptyDirSync(__dirname+'/auth_info_baileys'); 
    }
  }








  WASI().catch(async(err) => {
    console.log(err)
    await fs.emptyDirSync(__dirname+'/auth_info_baileys'); 


    //// MADE BY ITXWASI

});


  })


app.listen(PORT, () => console.log(`App listened on port http://localhost:${PORT}`));
