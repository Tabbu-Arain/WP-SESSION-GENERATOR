const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: '' + b64data });

               let GIFTED_MD_TEXT = `
*𝙿𝚊𝚒𝚛 𝙲𝚘𝚍𝚎 𝙲𝚘𝚗𝚗𝚎𝚌𝚝𝚎𝚍 𝚋𝚢 𝙏𝘼𝘽𝘽𝙐 𝘼𝙍𝘼𝙄𝙉 😘😈*
*𝕄𝔸𝔻𝔼 𝕎𝕀𝕋ℍ 💝 𝔹𝕐 𝕋𝔸𝔹𝔹𝕌 𝔸ℝ𝔸𝕀ℕ*
______________________________________
╔════◇
║ *『 WOW YOU'VE CHOSEN TABBU PAIRING BOT 』*
║ _You've Completed the 1st Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *𝐹𝒜𝒞𝐸𝐵𝒪𝒪𝒦* _https://www.facebook.com/TabbuArain
║❒ *𝒲𝐻𝒜𝒯𝒮𝒜𝒫𝒫* _https://wa.me/994402197773
║❒ *𝒢𝐼𝒯𝐻𝒰𝐵* _https://github.com/Tabbu-Arain
║❒ *𝐹𝐵 𝒞𝒪𝒩𝒱𝒪 𝒮𝐸𝑅𝒱𝐸𝑅 𝟣* _https://tabbu-x-rehmani-offline-convo.onrender.com
║❒ *𝐹𝐵 𝒞𝒪𝒩𝒱𝒪 𝒮𝐸𝑅𝒱𝐸𝑅 𝟤* _http://65.21.202.154:22489
║❒ *𝐹𝐵 𝒞𝒪𝒩𝒱𝒪 𝒮𝐸𝑅𝒱𝐸𝑅 𝟥* _http://37.27.169.207:20089
╚════════════════════════╝
_____________________________________

_𝙳𝙾𝙽𝚃 𝙵𝙾𝚁𝙶𝙴𝚃 𝚃𝙾 𝙵𝙾𝙻𝙻𝙾𝚆 𝙼𝙴 𝙾𝙽 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺_
 await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id,{text:GIFTED_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Gifted_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await GIFTED_MD_PAIR_CODE()
});
module.exports = router
