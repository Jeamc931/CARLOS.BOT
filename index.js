const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { cmdadd } = require('./lib/totalcmd.js')
const { imunes } = require('./src/imunes')
const { membrocm } = require('./src/membrocm')
const { utils } = require('./src/utils')
const { help } = require('./src/help')
const { dono } = require('./src/dono')
const { menuvoz } = require('./src/menuvoz')
const { custom } = require('./src/custom')
const { logos } = require('./src/logos')
const { ajudantes } = require('./src/ajudantes')
const { interativos } = require('./src/interativos')
const { infodono } = require('./src/infodono')
const { efeitoaudio } = require('./src/efeitoaudio')
const { especifico} = require('./src/especifico')
const { grupo } = require('./src/grupo')
const { premiuns } = require('./src/premiuns')
const { outros } = require('./src/outros')
const { rank } = require('./src/rank')
const { m18 } = require('./src/m18')
const { modapk } = require('./src/modapk')
const { pack } = require('./src/pack')
const { destrava } = require('./src/destrava')
const { menu2 } = require('./src/menu2')
const { destrava2 } = require('./src/destrava')
const { gbin } = require('./src/gbin')
const { gpessoa } = require('./src/gpessoa')
const { chentai } = require('./src/chentai')
const { gcpf } = require('./src/gcpf')
const { addsay } = require('./src/addsay')
const { listsay } = require('./src/listsay')
const { addfoto } = require('./src/addfoto')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const autofigu = JSON.parse(fs.readFileSync('./database/group/autofigu.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const antitelegram = JSON.parse(fs.readFileSync('./database/group/antitelegram.json'))
const antilinkig = JSON.parse(fs.readFileSync('./database/group/antilinkig.json'))
const antilinkfb = JSON.parse(fs.readFileSync('./database/group/antilinkfb.json'))
const antilinkytv = JSON.parse(fs.readFileSync('./database/group/antilinkyt.json'))
const antilinkytc = JSON.parse(fs.readFileSync('./database/group/antilinkytchannel.json'))
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const premium = JSON.parse(fs.readFileSync('./database/vip.json'))
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const { cekvip } = require('./src/cekvip')
const { TobzApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { daftarvip } = require('./src/daftarvip')
const { daftatvip } = require('./src/daftarvip')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
/*const { xp } = require('./database/menu/xp')
const { limit } = require('./database/menu/limit*/
const apivhtear = 'apivhtear';
const apibarbar = 'apibarbar';
const tobzkey = 'apitobz';
const BotName = 'CARLOS BOT'; 
const instagram = 'http://www.instagram.com/'; 
const aktif = '08:00 - 22:00';
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Tio Carlos\n' // Nama kamu
            + 'ORG:Tio Carlos;\n' // Nama bot
            + 'TEL;type=CELL;type=VOICE;waid=559492856640:+55 92856640\n' //Nomor whatsapp kamu
            + 'END:VCARD'
prefix = '-','!','#'
blocked = []
limitawal = '999999999'
cr = '*CARLOS*'
/**MAIS FUNÇÕES**/
const totalcmd = JSON.parse(fs.readFileSync('./data/totalcmd.json'))[0].totalcmd

/*********** LOAD FILE ***********/
const comandost = totalcmd
const { metodos } = require('./src/metodos')
const { pack18 } = require('./src/pack18')
const { compras } = require('./src/compras')
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const { ptbr } = require('./tomioka/ptbr.js')
const { webp2gifFile } = require("./tomioka/gif.js")
/********** FUNCTION ***************/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }        

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            
            const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        }
        
                const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
        
                const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        
                const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Conectando qr code quase la...')
	})
	client.on('open', () => {
		success('2', 'Prontinho ^-^')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        
		// client.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log(`${time}: Bot by ig:@affis_saputro123`)

client.on('group-participants-update', async (anu) => {
	const mdata = await client.groupMetadata(anu.jid)
	if(antifake.includes(anu.jid)) {
		if (anu.action == 'add'){
			num = anu.participants[0]
			if(!num.split('@')[0].startsWith(55)) {
				client.sendMessage(mdata.id, 'Tchau numero fake leia as regras antes de entrar!', MessageType.text)
				setTimeout(async function () {
					client.groupRemove(mdata.id, [num])
				}, 1000)
			}
		}
	}
})

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Olá @${num.split('@')[0]}\nBem vindo ao grupo *${mdata.subject}*\n\nleia as regras para nao ser banido!\n\nEspero que goste do grupo 😊❤️`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Tchau @${num.split('@')[0]} espero que não se arrependa`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const speed = require('performance-now');
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
            const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			

			mess = {
			    
					wait: '❬❗❭ Espere',
					success: '️❬ ✔ ❭ Sucesso 🖤',
					levelon: '❬ ✔ ❭ *leveling* *ativado*',
					leveloff: ' ❬ X ❭  *leveling* *desativado*',
					levelnoton: '❬ X ❭ *leveling não ativado*',
					levelnol: '*error* 0 °-°',
					error: {
				stick: '*Bem... falhou , tente novamente ^_^*',
				Iv: 'link inválido☹️'
				},
				only: {
					group: '[❗] Este comando só pode ser usado em grupos! ❌',
					premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
      		mod: '[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD CARLOS BOT*',
					benned: 'Você será banido do bot, por favor, contate o proprietário para retirar seu ban',
					ownerG: '[❗] CARLOS ? Este é um recurso especial para o CARLOS  ❌',
					ownerB: '[❗] CARLOS ? Este é um recurso especial para o CARLOS  ❌',
					userB: `──「 LISTA 」──\nOlá Kak !\nDesculpe, irmã. Você não está registrado como amigo de CARLOS. Registre-se para fazer amizade com o bot CARLOS por meio, \n\nCommand : ${prefix}daftar nama|idade\nExemplo : ${prefix}daftar seunome|17\n\n──「 CARLOS BOT 」──`,
					admin: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
					Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
				}
			}
			

			const botNumber = client.user.jid
			const totalchat = await client.chats.all()
			const ownerNumber = ["559492856640@s.whatsapp.net"] // replace this with your number
			const mod = [ownerNumber,"559492856640@s.whatsapp.net"]//ubah nomor lo
			const adminbotnumber = ["559492856640@s.whatsapp.net"]//ubah nomor lo
			const frendsowner = ["559492856640@s.whatsapp.net"]//ubah nomor l
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const groupId = isGroup ? groupMetadata.jid : ''
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isUser = user.includes(sender)
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
            const isAntiLinkTelegram = isGroup ? antitelegram.includes(from) : false
			const isAntiLinkig = isGroup ? antilinkig.includes(from) : false
            const isAntiLinkfb = isGroup ? antilinkfb.includes(from) : false
			const isAntiLinkytc = isGroup ? antilinkytc.includes(from) : false
            const isAntiLinkytv = isGroup ? antilinkytv.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : true
            const isAntiLink = isGroup ? antilink.includes(from) : false
	    	const isAnime = isGroup ? anime.includes(from) : false
	    	const isAntiRacismo = isGroup ? antiracismo.includes(from) : false
            const isAutofigu = isGroup ? autofigu.includes(from) : false
			const isAntiFake = isGroup ? antifake.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPremium = premium.includes(sender)
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
            const isBanned = ban.includes(sender)

			const ismod = mod.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
/*          //_XP COM LEVELING ATIVO
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
const requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
const getLevel = getLevelingLevel(sender)
const namelv = checkId
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
const lvup = {
text:
`    ════❖LEVEL UP❖════

  ╭╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ Nome: @${namelv.split('@')[0]}
  ├╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ XP: ${getLevelingXp(sender)}
  ├╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ Level: ${getLevel} -> ${getLevelingLevel(sender)}
  ╰╼╾╼╾╼╾╼╾╼╾╼╾╼
  
   ════❖LEVEL UP❖════`,
contextInfo: {mentionedJid: [namelv]}}
client.sendMessage(from, lvup, text, {quoted: mek})
//client.sendMessage(from, lvup, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}}
}
} catch (err) {
console.error(err)
}
}*/
if (text.includes("ip"))
  { const aris = text.replace(/!ip /, "") 
  axios.get(`https://mnazria.herokuapp.com/api/check?ip=${aris}`).then((res) =>{ 
  let hasil = ` *🔍CONSULTA REALIZADA🔍* \n\n ➸ *CIDADE:*  ${res.data.city}\n ➸ *Latitude* : ${res.data.latitude}\n ➸ *Longtitude* : ${res.data.longitude}\n ➸ *REGIÃO* : ${res.data.region_name}\n ➸ *UF* : ${res.data.region_code}\n ➸ *IP* : ${res.data.ip}\n ➸ *TIPO* : ${res.data.type}\n ➸ *CEP* : ${res.data.zip}\n ➸ *LOCALIDADE* : ${res.data.location.geoname_id}\n ➸ *CAPITAL* : ${res.data.location.capital}\n ➸ *DDD* : ${res.data.location.calling_code}\n ➸ *PAÍS* : ${res.data.location.country_flag_emoji}\n *📌BY:May Bot*` 
  conn.sendMessage(id, hasil, MessageType.text); 
 })
 }
	
if (text.includes('cry')){
  var teks = text.replace(/!randomcry /, '')
    axios.get(`https://tobz-api.herokuapp.com/api/cry`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}	

if (text.includes("cnpj")){
const aris = text.replace(/!cnpj /, "")
axios.get(`https://www.receitaws.com.br/v1/cnpj/${aris}`).then((res) => {
	conn.sendMessage(id, '[❗] ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let cep = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *ATIVIDADE PRINCIPAL:* ${res.data.atividade_principal[0].text} \n\n ➸ *DATA SITUAÇÃO:* ${res.data.data_situacao}\n\n ➸ *TIPO:* ${res.data.tipo} \n\n ➸ *NOME:* ${res.data.nome} \n\n ➸ *UF:* ${res.data.uf} \n\n ➸ *TELEFONE:* ${res.data.telefone}\n\n ➸ *SITUAÇÃO:* ${res.data.situacao} \n\n ➸ *BAIRRO:* ${res.data.bairro} \n\n ➸ *RUA:* ${res.data.logradouro} \n\n ➸ *NÚMERO :* ${res.data.numero} \n\n ➸ *CEP :* ${res.data.cep} \n\n ➸ *MUNICÍPIO:* ${res.data.municipio} \n\n ➸ *PORTE:* ${res.data.porte}\n\n ➸ *ABERTURA:* ${res.data.abertura}\n\n ➸ *NATUREZA JURÍDICA:* ${res.data.natureza_juridica} \n\n ➸ *FANTASIA:* ${res.data.fantasia}\n\n ➸ *CNPJ:* ${res.data.cnpj}\n\n ➸ *ÚLTIMA ATUALIZAÇÃO:* ${res.data.ultima_atualizacao}\n\n ➸ *STATUS:* ${res.data.status}\n\n ➸ *COMPLEMENTO:* ${res.data.complemento}\n\n ➸ *EMAIL:* ${res.data.email}\n\n *📌BY:May Bot* `;
    conn.sendMessage(id, cep ,MessageType.text);
}) 
}

if (text.includes("cpf")){
const aris = text.replace(/!cpf /, "")
axios.get(`http://geradorapp.com/api/v1/cpf/generate?token=${aris}`).then((res) => {
	conn.sendMessage(id, '[❗] ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let ecpf = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CPF:* ${res.data.CPF} \n\n ➸ *NOME:* ${res.data.Nome}\n\n ➸ *MÃE:* ${res.data.NomeMae} \n\n ➸ *NASCIMENTO:* ${res.data.DataNascimento} \n\n ➸ *RUA:* ${res.data.Rua} \n\n ➸ *N°:* ${res.data.NumeroRua}\n\n ➸ *COMPLEMENTO:* ${res.data.Complemento}\n\n ➸ *BAIRRO:* ${res.data.Bairro}\n\n ➸ *CEP:* ${res.data.CEP}\n\n ➸ *UF:* ${res.data.EstadoSigla}\n\n ➸ *CIDADE:* ${res.data.Cidade}\n\n ➸ *ESTADO:* ${res.data.Estado}\n\n ➸ *PAIS:* ${res.data.Pais}  \n\n *📌BY:May Bot* `;
    conn.sendMessage(id, ecpf ,MessageType.text);
}) 
}

if (text.includes("geradorcpf")){
const aris = text.replace(/!geradorcpf/, "")
axios.get(`http://geradorapp.com/api/v1/cpf/generate?token=40849779ec68f8351995def08ff1e2fa`).then((res) => {
	conn.sendMessage(id, '[❗] ESPERE ESTA PROCESSANDO', MessageType.text)
         let cpf = `*🔍CPF GERADOS🔍* \n\n ➸ *CPF:* ${res.data.data.number}  \n\n *📌BY:May Bot*`;
    conn.sendMessage(id, cpf ,MessageType.text);
})
}	

if (text.includes("cep")){
const aris = text.replace(/!cep /, "")
axios.get(`https://viacep.com.br/ws/${aris}/json/`).then((res) => {
	conn.sendMessage(id, '[❗] ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let cep = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CEP:* ${res.data.cep} \n\n ➸ *ENDEREÇO:* ${res.data.logradouro}\n\n ➸ *COMPLEMENTO:* ${res.data.complemento} \n\n ➸ *BAIRRO:* ${res.data.bairro} \n\n ➸ *LOCALIDADE:* ${res.data.localidade} \n\n ➸ *UF:* ${res.data.uf}\n\n ➸ *DDD:* ${res.data.ddd} \n\n *📌BY: CARLOS BOT* `;
    conn.sendMessage(id, cep ,MessageType.text);
}) 
}


if (text.includes("placa"))
  { const aris = text.replace(/!placa /, "") 
  axios.get(`https://apicarros.com/v1/consulta/${aris}/json`).then((res) =>{ 
  let hasil = ` *🔍CONSULTA REALIZADA🔍* \n\n ➸ *ANO:*  ${res.data.ano}\n ➸ *ANO MODELO* : ${res.data.anoModelo}\n ➸ *CHASSI* : ${res.data.chassi}\n ➸ *CODIGO RETORNO* : ${res.data.codigoRetorno}\n ➸ *CODIGO SITUACAO* : ${res.data.codigoSituacao}\n ➸ *COR* : ${res.data.cor}\n ➸ *MARCA* : ${res.data.marca}\n ➸ *MUNICIPIO* : ${res.data.municipio}\n ➸ *SITUACAO* : ${res.data.situacao}\n ➸ *UF* : ${res.data.uf}\n *📌BY:CARLOS BOT*` 
  conn.sendMessage(id, hasil, MessageType.text); 
 })
 }		        

        if (messagesC.includes("preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo!`)
	}
	
	        if (messagesC.includes("seupreto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo!`)
	}
	
	        if (messagesC.includes("macaco")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo!`)
	}
	
	        if (messagesC.includes("pretoimundo")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo!`)
	}
	
	        if (messagesC.includes("pq vc e preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo!`)
	}
	
                if (messagesC.includes("wa.me/")){
         if (!isGroup) return
         if (!isAntiLink) return
         if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
         client.updatePresence(from, Presence.composing)
         if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
         var kic = `${sender.split("@")[0]}@s.whatsapp.net`
         reply(`link detectado ${sender.split("@")[0]} voce sera expulso deste grupo!`)
     }
     
	
	/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("facebook.com/")){
		if (!isGroup) return
		if (!isAntiLinkfb) return
		if (isGroupAdmins) return reply('*Admin detectado, o bot não removerá o administrador do grupo, porque o administrador do grupo é livre para enviar links do Facebook*')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link do Facebook detectado 」 wa.me/${sender.split("@")[0]} Desculpe, você foi removido. *`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("*「 LEIA OS REGULAMENTOS DO GP 」Adeus amigo, da próxima vez se você entrar no grupo, leia as regras primeiro...*\n\n*Promoção apenas aos domingos.*")
		}, 0)
	}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("instagram.com/")){
		if (!isGroup) return
		if (!isAntiLinkig) return
		if (isGroupAdmins) return reply('*Admin detectado, o bot não removerá o administrador do grupo, porque o administrador do grupo é livre para enviar links do Instagram *')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Instagram Detectado 」 wa.me/${sender.split("@")[0]} Desculpe, você foi removido. *`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("*「 LEIA OS REGULAMENTOS DO GP 」Adeus amigo, da próxima vez se você entrar no grupo, leia as regras primeiro...*\n\n*Promoção apenas aos domingos.*")
		}, 0)
	}
	
/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙂𝙍𝙊𝙐𝙋***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('*Admin detectado, o bot não removerá o administrador do grupo, porque o administrador do grupo é livre para enviar links do grupo*')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Grupo de links detectado 」 wa.me/${sender.split("@")[0]} Desculpe, você foi removido. *`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("*「 LEIA OS REGULAMENTOS DO GP 」Adeus amigo, da próxima vez se você entrar no grupo, leia as regras primeiro...*\n\n*Promoção apenas aos domingos.*")
		}, 0)
	}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘾𝙃𝘼𝙉𝙉𝙀𝙇***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("://youtube.com/")){
		if (!isGroup) return
		if (!isAntiLinkytc) return
		if (isGroupAdmins) return reply('*Admin detectado, o bot não removerá o administrador do grupo, porque o administrador do grupo é livre para enviar Link do canal do YouTube*')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link de canal do YouTube Detectado 」 wa.me/${sender.split("@")[0]} Desculpe, você foi removido. *`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("*「 LEIA OS REGULAMENTOS DO GP 」Adeus amigo, da próxima vez se você entrar no grupo, leia as regras primeiro...*\n\n*Promoção apenas aos domingos.*")
		}, 0)
	}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙑𝙄𝘿𝙀𝙊***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("://youtu.be/")){
		if (!isGroup) return
		if (!isAntiLinkytv) return
		if (isGroupAdmins) return reply('*Admin detectado, o bot não removerá o administrador do grupo, porque o administrador do grupo é livre para enviar Link YouTube Video*')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link YouTube Video Terdeteksi 」 wa.me/${sender.split("@")[0]} Desculpe, você foi removido. *`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("*「 LEIA OS REGULAMENTOS DO GP 」Adeus amigo, da próxima vez se você entrar no grupo, leia as regras primeiro...*\n\n*Promoção apenas aos domingos.*")
		}, 0)
	}
	
/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("://t.me/")){
		if (!isGroup) return
		if (!isAntiLinkTelegram) return
		if (isGroupAdmins) return reply('*Admin detectado, o bot não removerá o administrador do grupo, porque o administrador do grupo é livre para enviar Link Telegram*')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Telegram Detectado 」 wa.me/${sender.split("@")[0]} Desculpe, você foi removido. *`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("*「 LEIA OS REGULAMENTOS DO GP 」Adeus amigo, da próxima vez se você entrar no grupo, leia as regras primeiro...*\n\n*Promosi Link Hanya Di Hari Ahad.*")
		}, 0)
	}
    
	if (messagesC.includes("CARLOSbot")){
			client.updatePresence(from, Presence.composing)
			reply("oi?")
	}
	
		if (messagesC.includes("cadebot")){
			client.updatePresence(from, Presence.composing)
			reply("olha eu aquiiiii🥰")
	}
	
	if (messagesC.includes("botlindo")){
			client.updatePresence(from, Presence.composing)
			reply("obrigado amor😍")
	}
	
    if (messagesC.includes("teamobot")){
			client.updatePresence(from, Presence.composing)
			reply("tbm te amo amor🥰")
	}
	
	if (messagesC.includes("tmnc")){
			client.updatePresence(from, Presence.composing)
			reply("olha a boca🙄")
	}
	
	if (messagesC.includes("fds")){
			client.updatePresence(from, Presence.composing)
			reply("olha a boca🙄")
	}
	
	if (messagesC.includes("porra")){
			client.updatePresence(from, Presence.composing)
			reply("olha a boca🙄")
	}
	
	if (messagesC.includes("tmnc")){
			client.updatePresence(from, Presence.composing)
			reply("olha a boca🙄")
	}
	
    if (messagesC.includes("desgraçado")){
			client.updatePresence(from, Presence.composing)
			reply("olha a boca🙄")
	}
	
	if (messagesC.includes("fuder")){
			client.updatePresence(from, Presence.composing)
			reply("olha a boca🙄")
	}
	
	if (messagesC.includes("desgraça")){
			client.updatePresence(from, Presence.composing)
			reply("olha a boca🙄")
	}
	
	if (messagesC.includes("viado")){
			client.updatePresence(from, Presence.composing)
			reply("algum problema ou preconceito com eles??🤨")
	}
	
	if (messagesC.includes("gay")){
			client.updatePresence(from, Presence.composing)
			reply("algum problema ou preconceito com eles??🤨")
	}
	
	if (messagesC.includes("chato")){
			client.updatePresence(from, Presence.composing)
			reply("vc que é 😼")
	}
	
	if (messagesC.includes("rsrs")){
			client.updatePresence(from, Presence.composing)
			reply("vishh... nem vou falar nd.. 🤭")
	}
	
	if (messagesC.includes("#menu")){
			client.updatePresence(from, Presence.composing)
			reply(`meu prefixo é: ${prefix}🙄`)
	}
	
	if (messagesC.includes("$menu")){
			client.updatePresence(from, Presence.composing)
			reply(`meu prefixo é: ${prefix}🙄`)
	}
	
	if (messagesC.includes("!menu")){
			client.updatePresence(from, Presence.composing)
			reply(`meu prefixo é: ${prefix}🙄`)
	}
	
	if (messagesC.includes("*menu")){
			client.updatePresence(from, Presence.composing)
			reply(`meu prefixo é: ${prefix}🙄`)
	}
	
	if (messagesC.includes("/menu")){
			client.updatePresence(from, Presence.composing)
			reply(`meu prefixo é: (${prefix}) 🙄`)
	}
	
	if ((budy === 'LINDO') || (budy === 'Lindo') || (budy === 'lindo')) {
			client.updatePresence(from, Presence.composing)
			reply('eu?🥺')
	}
	if ((budy === 'OI') || (budy === 'Oi') || (budy === 'oi')) {
			client.updatePresence(from, Presence.composing)
			reply('mt gado mds🙄')
	}
	
	if ((budy === 'NHA') || (budy === 'Nha') || (budy === 'nha')) {
			client.updatePresence(from, Presence.composing)
			reply('nha')
	}
	
	if ((budy === 'PREFIXO') || (budy === 'Prefixo') || (budy === 'prefixo')) {
			client.updatePresence(from, Presence.composing)
			reply(`meu prefixo é: ${prefix}`)
	}
	
	if (messagesC.includes("mt1")){
		if (!isPremium) return reply(mess.only.premium)
			client.updatePresence(from, Presence.composing)
			reply("Você escolheu Kiny painel \n copie e cole cada um desses comandos no seu termux") 
			client.updatePresence(from, Presence.composing)
			reply("💻COMANDOS💻\n\npkg update\n\npkg upgrade\n\npkg install python\n\npkg install python2\n\npkg intall python3\n\npkg install git\n\ngit clone  https://github.com/Kiny-Kiny/Kiny-Painel ​ \n\ncd Kiny-Painel\n\npython3 main.py\n\nUsername: Kiny\n\nPassword: VirtualInsanity") 
	}
	
			if (messagesC.includes("bah")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/bahc.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("dbz")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/Dbz.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	        if (messagesC.includes("sexo")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/Sexo.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
	if (messagesC.includes(".faustinho")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/faustin/olk1.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            tujuh = fs.readFileSync('./assets/faustin/olk2.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            tujuh = fs.readFileSync('./assets/faustin/olk3.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            tujuh = fs.readFileSync('./assets/faustin/olk4.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            tujuh = fs.readFileSync('./assets/faustin/olk5.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            tujuh = fs.readFileSync('./assets/faustin/olk6.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            tujuh = fs.readFileSync('./assets/faustin/olk7.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            tujuh = fs.readFileSync('./assets/faustin/olk8.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            tujuh = fs.readFileSync('./assets/faustin/olk9.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            tujuh = fs.readFileSync('./assets/faustin/olk10.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            tujuh = fs.readFileSync('./assets/faustin/olk11.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            tujuh = fs.readFileSync('./assets/faustin/olk12.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            tujuh = fs.readFileSync('./assets/faustin/olk13.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            tujuh = fs.readFileSync('./assets/faustin/olk14.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("canta")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/canto.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	            if (messagesC.includes("tomioka")){
                result = fs.readFileSync(`./figurinhas/tomioka.webp`)
                client.sendMessage(from, result, sticker, {quoted: mek })
             
    }
	            if ((budy === 'AÉ') || (budy === 'Aé') || (budy === 'aé')) {
                result = fs.readFileSync(`./figurinhas/Aé.webp`)
                client.sendMessage(from, result, sticker, {quoted: mek })
}
                  if ((budy === 'QUE') || (budy === 'Que') || (budy === 'que')) {
                result = fs.readFileSync(`./figurinhas/Q.webp`)
                client.sendMessage(from, result, sticker, {quoted: mek })
    }
                  if ((budy === 'SIM') || (budy === 'Sim') || (budy === 'sim')) {
                result = fs.readFileSync(`./figurinhas/sim.webp`)
                client.sendMessage(from, result, sticker, {quoted: mek })
}
                if ((budy === 'OIBOT') || (budy === 'Oibot') || (budy === 'oibot')) {
                result = fs.readFileSync(`./figurinhas/oibot.webp`)
                client.sendMessage(from, result, sticker, {quoted: mek })
}
                   if ((budy === 'TOOP') || (budy === 'Toop') || (budy === 'toop')) {
                result = fs.readFileSync(`./figurinhas/tudo.webp`)
                client.sendMessage(from, result, sticker, {quoted: mek })
}

                  if ((budy === 'TOMIOKINHA') || (budy === 'Tomiokinha') || (budy === 'tomiokinha')) {
                result = fs.readFileSync(`./figurinhas/tomiokinha.webp`)
                client.sendMessage(from, result, sticker, {quoted: mek })
             
    }
	            
	            if (budy.match('ksks')) {
result = fs.readFileSync(`./figurinhas/kkk.webp`)
client.sendMessage(from, result, sticker, {quoted: mek })
}

					if (messagesC.includes("grita")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/a.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("bv")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/bv.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("mandememe")){
			client.updatePresence(from, Presence.composing)
			data = fs.readFileSync('./src/tomiokajokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*Boo :V*')
	}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'do mano', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'do mano', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'do mano', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'do mano', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			if (isCmd && isBanned) {
           return console.log(color('[BAN] Ignorando comando', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}

				function addMetadata(packname, author) {	
				if (!packname) packname = 'CARLOS'; if (!author) author = '559492856640';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	
				
}
				switch(command) {
					//_BANIR E DESBANIR USUARIO DE MEXER NO BOT 
		  case 'ban':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono 🌚🤙🏼 * ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e você não poderá mais usar comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unban':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono 🌚🤙🏼 * ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]}foi desbloqueado e você pode reutilizar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break
				//_EFEITO NIGHTCORE PARA AUDIO         
case 'nightcore':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'slow':
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await client.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await client.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await client.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=50 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
/*case 'tts':
					if (args.length < 1) return client.sendMessage(from, 'Qual é o código da linguagem?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto tio', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('A maior parte do texto não é nada')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('falha:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break*/
                case 'registrar':
				case 'daftar':
				case 'rg':
				if (isUser) return reply('「 ❗ 」Você já está cadastrado no bot 📌')
				try {
				ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://i.ibb.co/mtb6pC8/Polish-20210702-233258050.jpg' //ubah sesuka kamu, bisa upload di imgbb.com
				veri = sender
				user.push(sender)

				fs.writeFileSync('./database/user.json', JSON.stringify(user))
				const kentod = 

`
╭─「 REGISTRO DO ÚSUARIO 」
│Registro bem-sucedido com
│horário ${date} ${time}
│Nome: ${pushname}
│Número: wa.me/${sender.split('@')[0]}
│Obrigado por se registrar😊
│Para usar o bot digite ${prefix}menu
│Total de usuários registrados: ${user.length}
╰────────────────────
`

                let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${user.length}&seri=Tomioka&pp=${ppimg}&bg=${imglu}`)

                client.sendMessage(from, buff, MessageType.image, {quoted: mek, caption: kentod, contextInfo: {'mentionedJid': [sender]}})

                break
//_RANKS 
case 'rankgay':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🏳️‍🌈 Rank dos mais gays🏳️‍🌈\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankiludidos':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🌝 Rank dos mais iludidos do grupo🌝\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🌝❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankcornos':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '😎Rank dos mais cornos do grupo😎\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `😎❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankloucos':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🤡Rank dos mais loucos do grupo🤡\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤡❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankalfa':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🐺 Rank dos alfas do grupo🐺\n'
for(i = 0; i < 4; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🐺❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankcaco':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
try{
if(!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
d = []
teks = '🐒 Rank dos camacos do grupo🐒\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍🐒❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranklindos':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🤩Rank dos mais lindos do grupo🤩\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤩❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankfeios':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🤢Rank dos mais feios do grupo🤢\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤢❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankprincesas':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '👸🏻Rank das princesas do grupo👸🏻\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `👸🏻❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankprincipes':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🤴🏻Rank dos principes do grupo🤴🏻\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤴🏻❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'figutag':
             if (!isPremium) return reply(mess.only.premium)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*[❗] MARQUE A FIGURINHA 😐*`)
            }
            break
            
              case 'supertag':
               if (!isPremium) return reply(mess.only.premium)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`[❗] responder imagem/adesivo/áudio/vídeo com a legenda ${p}supertag para marcar`)
        }
        break
//_MOSTRA O CASAL DO GRUPO 
case 'casal':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
if (!isGroup) return reply(mess.only.group)
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
teks = `*Hmmm.... Shippo os dois 💟💟*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.jid)
membr.push(teupai21.jid)
mentions(teks, membr, true)
break
case 'antilinkgroup':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('digite 1 para ativar')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o grupo anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Ativar grupo anti-link com sucesso neste grupo ✔️')
						client.sendMessage(from,`Atenção a todos os membros ativos do grupo anti-link. Se você enviar um link de grupo, você será expulso do grupo`, text) 
					} else if (Number(args[0]) === 0) {
						if (isAntiLink) return reply('O modo de grupo anti-link foi desativado')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
case 'antilinkytv':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('digite 1 para ativar')
					if (Number(args[0]) === 1) {
						if (isAntiLinkytv) return reply('o link do anti vídeo do YouTube está ativo')
						antilinkytv.push(from)
						fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(antilinkytv))
						reply('Ativado com sucesso o anti-link do YouTube neste grupo️')
						client.sendMessage(from,`「 *AVISO DE GRUPO * 」Se não for um administrador, não envie o link do vídeo do YouTube`, text)
					} else if (Number(args[0]) === 0) {
						if (isAntiLinkytv) return reply('O modo anti-link de vídeo do YouTube está desligado')
						var ini = antilinkytv.indexOf(from)
						antilinkytv.splice(ini, 1)
						fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(antilinkytv))
						reply('Desativando com sucesso os vídeos anti-link do YouTube neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
case 'antilinkytc':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('digite 1 para ativar')
					if (Number(args[0]) === 1) {
						if (isAntiLinkytc) return reply('anti link YouTube channel sudah aktif')
						antilinkytc.push(from)
						fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
						reply('Ativou com sucesso o canal anti-link do YouTube neste grupo✔️')
						client.sendMessage(from,`「 *AVISO DE GRUPO * 」Se não for um administrador, não envie o link do canal do YouTube`, text)
					} else if (Number(args[0]) === 0) {
						if (isAntiLinkytc) return reply('O modo anti-link do canal do YouTube está morto')
						var ini = antilinkytv.indexOf(from)
						antilinkytc.splice(ini, 1)
						fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
						reply('Desativando com sucesso o canal anti-link do YouTube neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
case 'antilinkinsta':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('digite 1 para ativar')
					if (Number(args[0]) === 1) {
						if (isAntiLinkig) return reply('*JÁ ATIVADO ANTERIORMENTE*')
						antilinkig.push(from)
						fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
						reply('BEM SUCEDIDO ATIVAR ANTI LINK INSTAGRAM')
						client.sendMessage(from,`「 *AVISO DE GRUPO * 」Se não for o administrador, não envie o link IG`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLinkig) return reply('1 para ativar, 0 para desativar')
						var ini = antilinkig.botLangsexOf(from)
						antilinkig.splice(ini, 1)
						fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
						reply('SUCESSO DESLIGANDO O ANTI LINK IG NO GRUPO')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
case 'antilinktele':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('digite 1 para ativar')
					if (args[0] === '1') {
					if (isAntiLinkTelegram) return reply('*JÁ ATIVADO ANTERIORMENTE*')
						antitelegram.push(from)
						fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
						reply('「 *DETECTOR DE TELEGRAM* 」PEDIDO ACEITO, TELEGRAM ANTI LINK JÁ ATIVADO!')
						client.sendMessage(from,`「 *AVISO DE GRUPO * 」Se não for um administrador, não envie o link do telegrama! Se você enviar, o bot irá ejetar você.`, text)
					} else if (args[0] === '0') {
						var ini = antitelegram.indexOf(from)
						antitelegram.splice(ini, 1)
						fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
						reply('「 *TELEGRAM DETECTOR * 」PEDIDO ACEITO, TELEGRAMA ANTI LINK JÁ DESATIVADO!')
					} else {
						reply('1 para ativar, 0 para desabilitar')
					}
					break
//_LISTAR USUÁRIO ONLINE
case 'online':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
msgFilter.isFiltered(from)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
client.sendMessage(from, 'Lista de usuários online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
contextInfo: { mentionedJid: online }
})
break
//_CHANCES MOSTRA PORCENTAGEM DO QUE ESPECIFICAR
case 'chance':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
client.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return client.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance da vaca nao dar leite amanha`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
client.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break
//_FOTOS SHITPOST
case 'shiti':
case 'shit':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
data = fs.readFileSync('./src/shitii.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
client.sendMessage(from, buffer, image, {caption: 'aqui está:)', quoted: mek})
break
//_PLAQUINHAS
                  case 'pmake':
				    if (!isPremium) return reply(mess.only.premium)
                    if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ta na mão 😈'})
					break
                  case 'pmake2':
				    if (!isPremium) return reply(mess.only.premium)
                    if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://ighteede.sirv.com/pack%20plaquinha%20%2B18%20BY%20sombrio/pack%20plaquinha%20%2B18%20BY%20sombrio/Screenshot_2021-04-10-22-59-23-1.png?text.0.text=${teks}&text.0.position.x=-36%25&text.0.position.y=-39%25&text.0.size=23&text.0.color=000000&text.0.opacity=54&text.0.font.family=Shadows%20Into%20Light`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Toma ai 😈💅 '})
					break
                  case 'gostosas':
      if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
      if (!isGroup) return reply(mess.only.group)
                        member = []
                        const p1 = groupMembers
                        const p2 = groupMembers
                        const p3 = groupMembers
                        const p4 = groupMembers
                        const p5 = groupMembers
                        const o1 = p1[Math.floor(Math.random() * p1.length)]
                        const o2 = p2[Math.floor(Math.random() * p2.length)]
                        const o3 = p3[Math.floor(Math.random() * p3.length)]
                        const o4 = p4[Math.floor(Math.random() * p4.length)]
                        const o5 = p5[Math.floor(Math.random() * p5.length)]
                        teks = `
                  Paradas!🤚🤚\n\n1=🤚🤭@${o1.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.jid.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
                        member.push(o1.jid)
                        member.push(o2.jid)
                        member.push(o3.jid)
                        member.push(o4.jid)
                        member.push(o5.jid)
                        mentions(teks, member, true)
                                        break
//_RANKS E %
case '%f':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
client.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
random = `${Math.floor(Math.random() * 100)}`
hasil = `  ${body.slice(7)}\n\      ${random}% `
client.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break
case '%b':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
client.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
random = `${Math.floor(Math.random() * 100)}`
hasil = `  ${body.slice(7)}\n\      ${random}% `
client.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break
//_COMANDOS ABRIR FECHAR GRUPO
case 'abrir':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
open = {
  text: `Grupo aberto por: @${sender.split("@")[0]}`,
  contextInfo: {
mentionedJid: [sender]
  }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false)
client.sendMessage(from, open, text, {
  quoted: mek
})
break
case 'fechar':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *apenas administrador* quem pode enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
case 'togif': 
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
if ((isMedia && !client.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply("⏳Aguarde alguns instantes...⏳\n\nA seu gif será enviada em até 2 minutos\nCaso não envie, mande novamente ;)")
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break
               case 'swm':
	    case 'stickerwm':
const fgif = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: "Feito", seconds: 999, gifPlayback: true, caption: "", jpegThumbnail: fs.readFileSync('me.jpg')} } }
const { convertSticker } = require('./plugins/swm.js')
			        if (type === 'imageMessage' || isQuotedImage){
                    const kls = body.slice(5)
                    const pack = arg.split('|')[0]
                    const author = arg.split('|')[1]
                    const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    const dlfile = await client.downloadMediaMessage(getbuff)
                    const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
                    var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
                    var imageBuffer = new Buffer.from(mantap, 'base64');
                    client.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: fgif})
                    } else {
                    reply('Formato incorreto marque uma imagem!')
                    }
                    break   
//GIF
case 'cumgif':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw()) 
axios.get('https://nekos.life/api/v2/img/cum').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
a = webp2gifFile(buf)
mp4 = getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
				case 'tourl':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply('espere')
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imurl = `${anu.display_url}`
reply(imurl)
}
break
case 'cep':
if (args.length < 1) return reply('digite o cep que deseja buscar')
cep = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO CEP
  ‣ Cep: ${hehe.cep}
  ‣ Estado: ${hehe.state}
  ‣ Cidade: ${hehe.city}`
client.sendMessage(from, ccg, text, {quoted:mek})
break

/*case 'ddd':
if (args.length < 1) return reply('digite o ddd que deseja buscar')
ddd = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO DDD
  ‣ Estado: ${hehe.state}
  ‣ Cidades: 
    ${hehe.cities}\n`
client.sendMessage(from, ccg, text, {quoted:mek})
break*/
case 'ddd':
if (!isPremium) return reply(mess.only.premium)
if (args.length < 1) return reply('BOT PRECISA DE ALGUM DDD DE UM NUMERO')
luc4rio1 = body.slice(5)
luc4rio2 = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/internacional?ddd=${luc4rio1}`, {method: 'get'})
if (luc4rio2.Erro) return reply(luc4rio2.Erro)
luc4rio3 = 
` BEM VINDO AO MENU DE CONSULTA\n\n〘 INFORMAÇÕES 〙
⧴ 〘 CIDADES 〙 : ${luc4rio2.Cidades}
⧴ 〘 ESTADO 〙 : ${luc4rio2.Estado}
〘 ${luc4rio2.Mensagem} 〙\n\nNÃO E POSSÍVEL PUXA CONSULTA DE TELEFONE\n\nBY : TioCARLOS`
client.sendMessage(from, luc4rio3, text, {quoted: mek})
break
				case 'play1':
reply (mess.wait)
teks = body.slice(6)
musica = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
buffer1 = await getBuffer(musica.result.thumb)
buffer2 = await getBuffer(musica.result.dl_link)
teks =`𝚈𝚘𝚞𝚝𝚞𝚋𝚎 𝙿𝚕𝚊𝚢 𝙼𝚞𝚜𝚒𝚌
𝚄𝚜𝚞𝚊́𝚛𝚒𝚘 @${sender.split("@")[0]}
𝚝𝚒𝚝𝚞𝚕𝚘 ${musica.result.title}`
client.sendMessage(from, buffer1, image, {quoted: mek, caption: teks })
client.sendMessage(from, buffer2, MessageType.audio, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: "<//>" })
                break
                 case 'play':
				if (args.length < 1) return reply('Digite o nome da música')
                reply(mess.wait)
                play = body.slice(7)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
             //    infomp3 = `*MUSICA ENCONTRADA!!!*\nTítulo : ${anu.result.title}\nUrl : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE UM POUQUINHO, N SPAME O CHAT*`
             msg = ('Musica encontrada enviando...\nFonte:YouTube ')
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: msg })
                client.sendMessage(from, lagu, MessageType.audio, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: "<//>" })
                break
               case 'play2':
if (args.length < 1) return reply('Digite o nome da música')
                reply('Procurando sua musica..')
                anu = await fetchJson(`http://kratosdevofc-api.herokuapp.com/downloads/ytmp3&titulo=${teks}&apikey=kratosbotofc`)
                if (anu.error) return reply(anu.error)
         //       ingfomp3 = `*Musica encontrada*\n Titulo : ${anu.title}\nCanal: ${anu.channel}\nPublicado: ${anu.published}\nViews: ${anu.views}\n\n*Enviando audio🎶*`
         msg = ('Musica encontrada enviando...\nFonte:YouTube ')
                buffer = await getBuffer(anu.thumb)
                lagu = await getBuffer(anu.url)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: msg})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true})
                break
                case 'play3':
if (args.length < 1) return reply('Digite o nome da música')
play = body.slice(6)
reply('Procurando sua música...⏳')
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=apivinz&q=${play}`)
if (anu.message) return reply('Música não encontrada...\nTente específicar o nome dela.')
//aanu = await fetchJson(`https://api-client.italuh.repl.co/api/yta?url=${anu.result.source}`)
aanu = await fetchJson(`https://api-exteam.herokuapp.com/api/yt/playmp3?query=${play}&apikey=estreia`)
infomp3 = 
`    MÚSICA ENCONTRADA
‣ Título: ${anu.result.title}
‣ Fonte: ${anu.result.source}`
buffer = await getBuffer(anu.result.thumbnail)
//lagu = await getBuffer(anu.result.url_audio)
lagu = await getBuffer(aanu.url)
setTimeout( () => {
client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
}, 1500)
reply('Baixando e enviando sua música...')
client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case  'play6':
teks = body.slice(5)
krat4ss = await fetchJson (`http://kratosdevofc-api.herokuapp.com/downloads/ytmp3&titulo=${teks}&apikey=kratosbotofc`)
kratos = await getBuffer(krat4ss.resultado.audio)
reply('Enviando Aguarde')
client.sendMessage(from, kratos, audio, {quoted: mek})
break
					case 'dado2':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
client.sendMessage(from, dador, sticker, {quoted: mek})
break
case 'gerarnick': 
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
teks = body.slice(10)
send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=brizaloka&text=${teks}`)
teks = ` 🧙🏻‍♂️NICKS GERADOS COM SUCESSO!🧙🏻‍♂️
🍙Primeiro ${send.random_1} 
🍙Segundo ${send.random_2} 
🍙Térceiro ${send.random_3} 
??Quarto ${send.random_4} 
🍙Quinto ${send.random_5}
 
   👾EXTRAS👾
 👾${send.squares}
 👾${send.inverted_squares}
 👾${send.italic}
 👾${send.bold}
 👾${send.future_alien}
 👾${send.asian_1}
 👾${send.asian_2}
 👾${send.squiggle}
 👾${send.squiggle_2}
 👾${send.squiggle_3}
 👾${send.squiggle_4}
 👾${send.neon}
 
 
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
    
    ©ᬊ⃔⃕͜ 亇ł❍ 亇❍ᛖł❍Ҡ么↯愛
 `
client.sendMessage(from, teks, text, {quoted: mek})
break
case 'tts': 
                    		if (!isGroup) return reply(`[❗] *Olá ${pushname} para poder usar os comandos do bot entre nesse grupo:*\n\n➻ *GRUPO 1* = ${grupo1}`)
				    if (args.length < 1) return client.sendMessage(from, 'O Código de idioma e obrigatório!!', text, {quoted: mek})					 
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto?', text, {quoted: mek})
					dtt = body.slice(8)
					const gtts = require('./lib/gtts')(args[0])
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('O texto e muito grande!!!')
					: gtts.save(ranm, dtt, function() {
					exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
					fs.unlinkSync(ranm)
					buffer = fs.readFileSync(rano)
					if (err) return reply('ERROR')
					client.sendMessage(from, buffer, audio, {ptt:true, quoted:mek})
					fs.unlinkSync(rano)
					})
					})
					break
case 'rename':
if (!isPremium) return reply(mess.only.premium)
		    		if (!isQuotedSticker) return reply('Apenas figurinha mano')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await client.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `YT`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `TioCARLOS559492856640`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, client, mek, from)
					break
case 'pucep':
if (!isPremium) return reply(mess.only.premium)
 if (args.length < 1) return reply('Cad� O Cep')
cep = body.slice(6)
send = await fetchJson(`http://brizas-api.herokuapp.com/consulta/cep?apikey=brizaloka&cep=${cep}`)
teks = `
        
CEP ${send.resultado.cep} 
RUA ${send.resultado.logradouro} 
BAIRRO ${send.resultado.bairro} 
Cidade ${send.resultado.localidade} 
Estado ${send.resultado.uf}  
DDD ${send.resultado.ddd}   
                    
 `
client.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('kk/sticker/botlogo.webp')}}}})
break
case 'wikipedia':
     if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
	 teks = body.slice(11)
	send = await fetchJson(`https://api-exteam.herokuapp.com/api/info/wikipedia?search=${teks}&apikey=pip`)
	teks = ` ${send.result.result}`
	client.sendMessage(from, teks, text, {quoted: mek})
	break
//_ATTPs	
	case 'attp1':	
	if (!isPremium) return reply(mess.only.premium)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	     
case 'attp2':	
if (!isPremium) return reply(mess.only.premium)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp3': 
	if (!isPremium) return reply(mess.only.premium)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp4': 
	if (!isPremium) return reply(mess.only.premium)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
		case 'attp5':	
		if (!isPremium) return reply(mess.only.premium)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break
case 'attp6':	
if (!isPremium) return reply(mess.only.premium)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	   
case 'play4':
if (args.length < 1) return reply('Digite o link da música')
reply (mess.wait)
play = body.slice (6)
anu = await fetchJson(`https://enolaholmes.herokuapp.com/api/yutub/audio?url=${play}&apikey=Alphabot`)
//Info = 'Musica\ntitulo ${anu.result.title}\ntamanho ${anu.result.filesize}'
info2 = 'MUSICA ENCONTRADA!!!\nFonte:YouTube\nJa estou te enviando sua musica...'
buffer = await getBuffer(anu.result.thumb)
lagu = await getBuffer(anu.result.result)
client.sendMessage(from, buffer, image, {quoted: mek, caption: info2})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
case 'play5':
reply (mess.wait)
anu = await fetchJson('https://luc4rio.herokuapp.com/api/social/play/audio?video=${body.slice(6)}')
Info = '${anu.Mensagem}\nTitulo ${anu.Titulo_Encontrado} Duração ${anu.Duracao_Do_Video}Fonte ${Link_Do_Video}'
buffer = await getBuffer(anu.Imagem_Do_Video)
lagu = await getBuffer(anu.Link_De_Download)
client.sendMessage(from, buffer, image, {quoted: mek,caption:info})
client.sendMessage(from, lagu, audio, {mimetype:'audio/mp4',filename: '${anu.Titulo_Encontrado}.mp3' , quoted: mek})
break
case 'cc':
case 'caracoroa':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
const cara = fs.readFileSync('./database/cara/cara.webp');
const coroa = fs.readFileSync('./database/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
reply(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
client.sendMessage(from, cararoa, sticker, {quoted: mek})
break
case 'sn':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return client.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O CARLOS  é um baiano preguiçoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break
				case 'gadometro':
case 'gado':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
reply(hisil) 
break
				case 'abraço':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `Que fofo... @${sender.split("@")[0]} deu um abraço apertado em @${mentioned[0].split('@')[0]}`
mentions(yhb, yhb, true)
break
				case 'contar':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
if (args.length == 0) return reply( '0 caracteres, pois obviamente não há texto😀')
const count = body.slice(8).length
if (count === 1) {
reply(`O texto possui ${count} caractere.`)
} else if (count > 1) {
reply(`O texto possui ${count} caracteres.`)
}
break

				case 'reiniciar':
if (!isOwner) return reply("quem é tu mano")
npm = `npm start`
reply('Reiniciando em alguns segundos...')       
exec(npm, (err, stdout) => {
if(err) return client.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
client.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break
				case 'attp' :
				case 'sttp' :
					if (args.length < 1) return reply(`ERROR: kd o texto?? \nUso: ${prefix}attp (seu texto aqui)`)
					try {
						var chollotxt = body.slice(5).trim()
						reply(mess.wait)
						url = encodeURI(`https://api.xteam.xyz/attp?file&text=${chollotxt}`)
						textofigu = await getBuffer(url)
						client.sendMessage(from, textofigu, sticker, { quoted: mek })
					}
					catch (e) {
						reply("Error: Use apenas caracteres alfanuméricos")
					}
					break
				case 'membrocm':
				if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
		client.sendMessage(from, membrocm(prefix, sender), text, {quoted: mek})
                break
				case 'utils':
				if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
		client.sendMessage(from, utils(prefix, sender), text, {quoted: mek})
                break
case 'imunes':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
		client.sendMessage(from, imunes(prefix, sender), text, {quoted: mek})
                break
				case 'metodos':
				if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
		client.sendMessage(from, metodos(prefix, sender), text, {quoted: mek})
                break
			  case 'compras':
			if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
		client.sendMessage(from, compras(prefix, sender), text, {quoted: mek})
                break
			  case 'pack18':
		         if (!isPremium) return reply(mess.only.premium)
                 client.sendMessage(from, pack18(prefix, sender), text, {quoted: mek})
                break
case 'menu':

case 'comandos':

if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
wew = fs.readFileSync('./assets/vidmenu.mp4')

     client.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: help(pushname, prefix ) })

break
				/*case 'menu':
				 if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                wew = fs.readFileSync('./assets/foto.png')
                client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: help(prefix) })
                break*/
case 'infodono':
                if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					   client.sendMessage(from, infodono(prefix) , text, {quoted: mek})
					   break
				case 'menuvoz':
				      if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					  client.sendMessage(from, menuvoz(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
					break
                    case 'picpay':
                    msg 
                         client.sendMessage(from, buffer, image, {quoted: mek, caption: msg })
                         break
                    case 'modsapks':
				      if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					  client.sendMessage(from, ajudantes(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "AJUDANTES 🥰", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
					break
                    case 'logopremium':
				      if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					  client.sendMessage(from, logos(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
					   break
					case 'ranks':
					  if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					  client.sendMessage(from, rank(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
					    break
                        case 'customfig':
                      if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					  client.sendMessage(from, custom(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
					    break
                case 'interativos':
                      if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					  client.sendMessage(from, interativos(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
					    break
                case 'especifico':
                      if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					  client.sendMessage(from, especifico(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
			            break
				case 'efeitos':
				      if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					  client.sendMessage(from, efeitoaudio(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
				        break
                case 'premium':
                      if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					  client.sendMessage(from, premiuns(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
				        break
                case 'grupo':
                      if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					  client.sendMessage(from, grupo(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
						break
                         if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                         case 'mdono':
					  client.sendMessage(from, dono(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "", 'jpegThumbnail': fs.readFileSync('./me.jpg')}}}})
					   break
                   case 'modapk':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    client.sendMessage(from, modapk(prefix), text, { quoted: mek })
                    break
                   case 'gbin':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gbin(prefix), text, { quoted: mek })
                    break
                   case 'gpessoa':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gpessoa(prefix), text, { quoted: mek })
                    break
                   case 'destrava':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, destrava(prefix), text, { quoted: mek })
                    break
                   case 'pack':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, pack(prefix), text, { quoted: mek })
                    break
                   case 'chentai':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, chentai(prefix), text, { quoted: mek })
                    break
                   case 'gcpf':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gcpf(prefix), text, { quoted: mek })
                    break
				case 'ytmp4':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (args.length < 1) return reply('Cadê o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
case 'gay2':

              if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
			     	await limitAdd(sender)                

                try {

				ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)

				} catch {

				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

				}          

				                random = `${Math.floor(Math.random() * 100)}`

boiola = random

if (boiola < 20) {bo = 'hmm... você é hetero 😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'}  else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né???'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'}

teks = `Você é ${random}% Gay\n\n${bo}`

                gay = await getBuffer(`https://api-exteam.herokuapp.com/api/rainbow?img=${ppimg}`)

               client.sendMessage(from, gay, image, { quoted: freply, caption: teks})

				break
			break
					case 'antifake':
						try {
				        if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
						if (!isGroup) return reply(mess.only.group)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiFake) return reply('Ja esta ativo')
							antifake.push(from)
							fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
							reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antifake.splice(from, 1)
							fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
							reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
						} catch {
							reply('Deu erro, tente novamente :/')
						}
					break	
				case 'modoanime':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === '1') {
						if (isAnime) return reply('O modo anime já está ativo')
						anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Ativado com sucesso o modo anime no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === '0') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Modo anime desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
					case 'antiracismo':
					if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAntiRacismo) return reply('O modo antiracismo já está ativo')
						antiracismo.push(from)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Ativado com sucesso o modo antiracismo no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antiracismo.splice(from, 1)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Modo antiracismo desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
				case 'modonsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('O modo nsfw já está ativo')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Ativado com sucesso o modo nsfw no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Modo nsfw desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
				case 'rtext':
					if (args.length < 1) return reply(mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return reply('O texto é longo, com até 10 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: tels5})
					break
				case 'water':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                 case 'nomegp':
		             if (args.length < 1) return reply ('o nome do grupo é: *${groupMetadata.subject}*')
		             break
					case 'xd':				
					if (args.length < 1) return reply(mess.wait)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/pin?q=${pin}&apikey=APIKEY`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pineq = await getBuffer(trest)
					client.sendMessage(from, pineq, image, { caption: '*Pinterest*\n\n*Resultado Pesquisa : '+pinte+'*', quoted: mek })
					break
//_Figurinhas customizadas
                           case 'trash':
                           if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/shit?img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break                                         
                           case 'trash2':
                           if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/trash?img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break                              
                    
                    case 'morto':
                           case 'morte':
                           if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/rip?img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break                                                 
                    case 'hitler':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/hitler?img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break                             
                case 'figulgbt':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/rainbow?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR ??`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
                    
                     case 'figuc':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break                                        
                                        case 'borra':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-gdr2.herokuapp.com/api/pixelate?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break              
                      case 'joke':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://lolhuman.herokuapp.com/api/creator1/jokeOverHead?apikey=genbotkey&img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break
                case 'animerosto':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://lolhuman.herokuapp.com/api/creator1/facepalm?apikey=genbotkey&img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break                                                 
                    case 'quadro':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://lolhuman.herokuapp.com/api/creator1/beautiful?apikey=genbotkey&img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break 
                case 'afetar':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://lolhuman.herokuapp.com/api/creator1/affect?apikey=genbotkey&img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break                                                                      
                    case 'procurado':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/procurado?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
                case 'wasted':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break                  
                    case 'arma':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break                  
                    case 'drip':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/dripp?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
                case 'inverter':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/invert?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break                  
                    case 'preso':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/jail?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break          
                    case 'shit':
                case 'figushit':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/shit?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
  case 'triggered':
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break                   
                      case 'figupet':               
                    		if (!isUser) return reply(`「 ❗ 」Registre-se primeiro Como registrar : ${prefix}registrar`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
//@Tio CARLOS YT					
				case 'pokemon':
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
                    await limitAdd(sender)
					break
case 'wolf':  
                   if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=rimurubotz&text2=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: mek})
                   break    
              case 'circlesticker':
    const pack = arg.split('|')[0]
    const author = arg.split('|')[1]
    if (isMedia && mimetype == 'image/jpeg') {
      await createExif(pack,author)
      await sleep(5000)
      decryptMedia(message).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            sqlter.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/jpeg') {
      await createExif(pack, author)
      await sleep(5000)
      decryptMedia(quotedMsg).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            client.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (isMedia && mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (isMedia && mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    }
    break
    
				case 'ytsearch':
					if (args.length < 1) return reply('Yang mau di cari apa?')
					reply(mess.wait)
					anu = await fetchJson(`https://api.arugaz.my.id/api/media/ytsearch?query=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `\`\`\`Título\`\`\` : *${i.title}*\n\`\`\`Link\`\`\` : *https://youtu.be/${i.id}*\n\`\`\`Publicados\`\`\` : *${i.uploadDate}*\n\`\`\`Duração\`\`\` : *${i.duration}*\n\`\`\`Visualizadores: \`\`\`*${h2k(i.viewCount)}*\n\`\`\`Canal:\`\`\` *${i.channel.name}*\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break
				case 'textblue':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=blue_metal&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
					case 'outros':
					if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					client.sendMessage(from, outros(prefix) , text, { quoted: mek })
					break
					break
				case 'rize':
					reply(mess.wait)
					anu = await fetchJson(`https://imgur.com/gallery/s1ecUj8`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'mia':
				  	if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					reply(mess.wait)
					anu = await fetchJson(`https://testesw.herokuapp.com/`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'i love you, mia 🥺❤️', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'texteng':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=sand_engraved&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('O que você quer escrever??') 
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/nulis?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
                    await limitAdd(sender)
					break
					case 'brainly':
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '♡───────────♡\n'
					for (let Y of res.data) {
						teks += `\n*「 BRAINLY 」*\n\n*➸ Questão:* ${Y.pertanyaan}\n\n*➸ Resposta:* ${Y.jawaban[0].text}\n♡───────────♡\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break
				case 'premiumlist':
					teks = '╭────*「 *USUÁRIOS PREMIUM👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${premium.length}\n╰──────*「 *CARLOS BOT* 」`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
                  case 'qrcode':
        			if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-compras* para adquirir o acesso Premium!' ,text, { quoted: mek })
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, bufferr, image, {quoted: mek})
					break
		    	case 'wa.me':
		        case 'wame':
		          if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                  client.updatePresence(from, Presence.composing) 
                  options = {
                  text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n*CARLOS NO CONTROLE🐊🚩*`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  client.sendMessage(from, options, text, { quoted: mek } )
			      break
                  case 'playstore':
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nome Apk:* ${ply.app.name}\n• *ID:* ${ply.app.id}\n• *Link Apk:* ${ply.app.url}\n===================°]\n`
                  }
                  reply(store.trim())
                  break
               case 'pornhub':
			   reply(mess.wait)
              	    if (args.length < 1) return reply('Cadê o texto, mano?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `Título: ${bokep.title}\nAtor: ${bokep.author}\nVisualizadores: *${bokep.views}*\nDuração: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			     case 'nekopoi':
			   reply(mess.wait)
              	    if (args.length < 1) return reply('Cadê o texto, mano?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${VthearApi}`, {method: 'get'})
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Título: ${neko.title}\nDescrição: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			     case 'xvideos':
              	    if (args.length < 1) return reply('Cadê o texto, mano?')
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Título: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break 
            case 'onichan':
            case 'bodoh':
                client.sendMessage(from, buff, './lindy/baka.mp3', audio/mp3, {quoted: mek, ptt:true})
                break
				case 'hunti':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=287167&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferjj = await getBuffer(anu.result.pdf_file)
					client.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', quoted: mek})
					break
                 case 'setdesc':
                     if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
			    	 if (!isGroup) return reply(mess.only.group)
				     if (!isGroupAdmins) return reply(mess.only.admin)
			   	     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				     client.groupUpdateDescription(from, `${body.slice(9)}`)
				     client.sendMessage(from, 'Descrição alterada com sucesso', text, {quoted: mek})
				     break 
                case 'speed':
                case 'ping':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    client.sendMessage(from, `Speed: *${latensi.toFixed(4)} _Segundos_*\nDispositivo: *PC DA NASA*\nRAM: *1TB*\nData: *WINDOWS*\nRede: *16G*\nStatus: *Ainda não cobrado*\nTipo do bot: *O MELHOR QUE TEM*\n\n*O bot esteve ativo por*\n*${kyun(uptime)}*`, text, { quoted: mek})
                    break
				case 'delete':
				case 'del':
				case 'd':  
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-compras* para adquirir o acesso Premium!' ,text, { quoted: mek })
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins)return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                    break
           case 'playmp3':
                reply(mess.wait)
                play = body.slice(9)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=${ZeksApi}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `「 *TIMELINE PLAY MP3* 」\n*• Título:* ${anu.result.title}\n*• Link:* ${anu.result.source}\n*• Tamanho:* ${anu.result.size}\n\n*ESPERE NOVAMENTE ENVIANDO POR FAVOR, NÃO SPAME O CHAT*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender) 
                break 
            case 'smule':
					if (args.length < 1) return reply('Cadê o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título* : ${anu.title}\n\n Espere 1 minuto, talvez um pouco mais porque o download de vídeos esta executando`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Aqui mano'})
					await limitAdd(sender) 	
					break  
				case 'ttp':
					if (args.length < 1) return reply('Cadê o texto?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
                                        await limitAdd(sender)
					break
                case 'desbloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
				    break
				    case 'bloquear':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `ESTE COMANDO NÃO ESTÁ FUNCIONANDO, EM BREVE SERÁ CORRIGIDO ${body.slice(7)}@c.us`, text)
					break
                case 'image':
					if (args.length < 1) return reply('O que você quer procurar, mana?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Resultado da pesquisa : '+goo+'*', quoted: mek })
					break
        /*        case '.':
					goo = body.slice(2)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Resultado da pesquisa : '+goo+'*', quoted: mek })
					break  */
					case '.':
                    tels = body.slice(2)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${tels}`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*\n\*Resultado da pesquisa* : *${tels}*`})
                    await limitAdd(sender)
					break
				case 'playstore':
					kuji = body.slice(7)
					reply(mess.wait)
					anu = await getBuffer(`https://api.vhtear.com/playstore?query={kuji}&apikey=Aris komtol`, {method: 'get'})
					capty = `*➸ title :* ${anu.title}\n*➸ app_id :* ${anu.app_id}\n*➸ description :* ${anu.description}\n*➸ developer_id :* ${anu.developer_id}\n*➸ developer :* ${anu.developer}\n*➸ score :* ${anu.score}\n*➸ full_price :* ${anu.full_price}\n*➸ price :* ${anu.price}\n*➸ free :* ${anu.free}`
					client.sendMessage(from, anu, image, {quoted: mek, caption: capty})
					break
				case 'otagall2':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'pinterest':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    tels = body.slice(11)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=${tels}`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*\n\*Resultado da pesquisa* : *${tels}*`})
                    await limitAdd(sender)
					break
                case 'cringe':
                 if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
				 data = fs.readFileSync('./src/tomiokajokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*Boo :V*')
				break
                case 'alerta':
                 if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
				 data = fs.readFileSync('./src/alerta.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*alerta :V*')
				break									
         case 'moddroid':
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzApi}`)
			hepi = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*editor*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*Tamanho*: ${hepi.size}\n*última versão*: ${hepi.latest_version}\n*gênero*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
		case 'happymod':
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzApi}`)
			hupo = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*versão*: ${hupo.version}\n*Tamanho:* ${hupo.size}\n*root*: ${hupo.root}\n*compra*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
	
				case 'naruto':

					reply(mess.wait)
					anu = await fetchJson(`https://imgur.com/gallery/hiM6mGO`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'nsfwboquete':

					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob}`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'animecry':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
case 'onich':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
tujuh = fs.readFileSync('./assets/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ola':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
tujuh = fs.readFileSync('./assets/ola.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bv':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
tujuh = fs.readFileSync('./assets/bv.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tchau':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
tujuh = fs.readFileSync('./assets/tchau.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bem':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
tujuh = fs.readFileSync('./assets/bem.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'banoit':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
tujuh = fs.readFileSync('./assets/banoit.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'batarde':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
tujuh = fs.readFileSync('./assets/batarde.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bodia':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
tujuh = fs.readFileSync('./assets/bodia.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'a':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
tujuh = fs.readFileSync('./assets/a.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat1':
tujuh = fs.readFileSync('./assets/beat1.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tomioka':
result = fs.readFileSync(`./figurinhas/tomioka.webp`)
client.sendMessage(from, result, sticker, {quoted: mek })
break
case 'glub':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
tujuh = fs.readFileSync('./assets/glub.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
		
				case 'hinata':

					reply(mess.wait)
					anu = await fetchJson(`https://imgur.com/gallery/0nxV5Sc`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					client.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					await limitAdd(sender)
					break 
           case 'hobby':

					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Questão : *'+hobby+'*\n\nResponda : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'gay1':

					gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Veja os dados do Gay ${gay}\n\n\nPercentagem Gay : ${anu.persen}%\nAlerta!!! : gay, mas não cego`
		   reply(hasil)
		   await limitAdd(sender)
					break
                case 'nangis':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
					reply('PACIENTE NGAB')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}`, {method: 'get'})
					reply('Mwahhh')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}`, {method: 'get'})
					reply('Peyukkkk')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'addfoto':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Você quem é o dono? ')
					client.sendMessage(from, addfoto(prefix), text, { quoted: mek })
					break
			    case 'otagall3':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break   
			  case 'next':
                if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                if (isGroup) return  reply( 'NÃO PODE ESTAR EM GRUPO!!!!')
                await reply('Ache um companheiro >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Par encontrado: 🐊\n*${prefix}next* — Encontre novos parceiros`)
                break		    
				case 'tedio':	
					reply('Não fique entediado eu estou aqui🥰')
					break
			    case 'nsfwblowjob':
				    try {
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Não faça ingredientes para o tio comum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break                       
				case 'testime':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					setTimeout( () => {
					client.sendMessage(from, 'O tempo acabou:v', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, 'Mais 5 segundos', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '10 segundos para ir', text) // ur cods
					}, 0) // 1000 = 1s,
					break
		        case 'gay':		
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é gay: *'+rate+'*\n\nSua porcentagem gay : '+ kl+'%', text, { quoted: mek })
					break
                  case 'timer':
				if (args[1]=="segundo") {var timer = args[0]+"000"
				} else if (args[1]=="minuto") {var timer = args[0]+"0000"
				} else if (args[1]=="hora") {var timer = args[0]+"00000"
				} else {return reply("*escolher:*\nsegundo\nminuto\nhora")}
				setTimeout( () => {
				reply("O tempo acabou")
				}, timer)
				break
				case 'delete':
				    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque a msg para apagar *seja um administrador!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Comando recebido, excluir mensagem :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.deleteMessage(from, mentioned)
					} else {
						mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.deleteMessage(from, mentioned)
					}
					break
				case 'openanime':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAnime) return reply('O modo anime já está ativo')
						anime.push(from)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Ativado com sucesso o modo anime neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						anime.splice(from, 1)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Modo anime desativado com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
			    case 'nsfwneko':
				    try {
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
				case 'nsfwtrap':
				    try {
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni Anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
				case 'animekiss':
                if (!isAnime) return reply(' *Deve ativar o modo Anime* ')
					anp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzApi}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'setfoto':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterou com sucesso o ícone do Grupo')
                    break			
                case 'level':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (!isLevelingOn) return reply(mess.levelnoton)
					if (!isGroup) return reply(mess.only.group)
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
					sem = sender.replace('@s.whatsapp.net','')
					resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ Nome : @${sender.split("@")[0]}\n┣⊱ Seu XP :  ${userXp}\n┣⊱ Seu Level : ${userLevel}\n┗━━━━━━━━━━━━`
					client.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
                    console.error(err)
                    await reply(`Error!\n${err}`)
                    })
                    break
                case 'leveling':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Boo :𝘃')
					if (args[0] === '1') {
                    if (isLevelingOn) return reply('*O comando de level já estava ativo*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
					} else if (args[0] === '0') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
					} else {
					reply(' Use 1 para ativar e 0 para desativar!')
					}
					break
			    case 'tinyurl':
			    reply(mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`)
			        tinyurl = `${anu.result}`
			        reply(tinyurl)
			        await limitAdd(sender) 
			        break 
				case 'slide':
					if (args.length < 1) return reply('*Textnya mana gan?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					client.sendMessage(from, atytyd, video, {quoted: mek})
					await limitAdd(sender) 
					break  
					case 'bneon': 
					if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply(mess.blank)

					teks = body.slice(7)

					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')

					reply('*Estou fazendo, se der erro tente novamente ✓*')

					buffer = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)

					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: '😊ta ai'})

					break


					case 'naruto': 
					if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply(mess.blank)

					teks = body.slice(7)

					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')

					reply('*Estou fazendo, se der erro tente novamente ✓*')

					buffer = await getBuffer(`https://api.zeks.xyz/api/naruto?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)

					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: '😊ta ai'})

					break

				    case 'matrix': 
				    if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply(mess.blank)

					teks = body.slice(7)

					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')

					reply('*Estou fazendo, se der erro tente novamente ✓*')

					buffer = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)

					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: '😊ta ai'})

					break

					case 'cross': 
					
					if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply(mess.blank)

					teks = body.slice(7)

					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')

					reply('*Estou fazendo, se der erro tente novamente ✓*')

					buffer = await getBuffer(`https://api.zeks.xyz/api/crosslogo?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)

					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: '😊ta ai'})

					break

					case 'wolf': 
					if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply(mess.blank)

					teks = body.slice(7)

					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')

					reply('*Estou fazendo, se der erro tente novamente ✓*')

					buffer = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text1=${teks}&text2=${teks}`)

					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: '😊ta ai'})

					break

					case 'flame': 
					if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply(mess.blank)

					teks = body.slice(7)

					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')

					reply('*Estou fazendo, se der erro tente novamente ✓*')

					buffer = await getBuffer(`https://api.zeks.xyz/api/flametext?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)

					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: '😊ta ai'})

					break

				case 'sky': 
				    if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply(mess.blank)

					teks = body.slice(7)

					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')

					reply('*Estou fazendo, se der erro tente novamente ✓*')

					buffer = await getBuffer(`https://api.zeks.xyz/api/skytext?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)

					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: '😊ta ai'})

					break
                    case 'litig': 
                    if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/lithgtext?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: 'tai'})
					break
					case 'epep': 
					if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(6)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/epep?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: 'tai'})
					break
					case 'button': 
					if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(8)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: 'ta ai'})
					break
					case 'text3d': 
					if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(8)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: 'ta ai'})
					break
					case 'text3d': 
					if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(8)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/text3d?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: 'ta ai'})
					break
					case 'text3dbox': 
					if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: 'ta ai'})
					break
				case 'usuarios':
				client.sendMessage(from,`total de usuários registrados no CARLOS BOT 🥰: ${user.length}`, text)
				break
				/*case 'autofigu':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Digite 1/0.')
					if (Number(args[0]) === 1) {
					if (isPower) return reply('O autofig já está ligado!')
						autofigu.push(from)
						fs.writeFileSync('./database/group/autofigu.json', JSON.stringify(autofigu))
						reply('AUTO FIGURINHAS ATIVADO ✔️')
					} else if (Number(args[0]) === 0) {
						if (!isPower) return reply('O autofig já está desligado!')
						autofigu.splice(from, 1)
						fs.writeFileSync('./database/group/autofigu.json', JSON.stringify(autofigu))
						autofigu.splice(from, 1)
						fs.writeFileSync('./database/group/autofigu.json', JSON.stringify(autofigu))
						autofigu.splice(from, 1)
						fs.writeFileSync('./database/group/autofigu.json', JSON.stringify(autofigu))
						reply('AUTO FIGURINHAS DESLIGADO ✔️')
					} else {
						reply('*1* para ativar e *0* para desativar.')
					}
					break*/
                                case 'antilink':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Grupo anti-link ativado com sucesso neste grupo ✔️')
						client.sendMessage(from,`Atenção a todos os membros ativos deste grupo anti-link. se você enviar um link de grupo, voce será expulso daqui do grupo`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('O modo de grupo anti-link foi desabilitado ')
						var ini = anti.clientOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
				case 'cgame':

					reply(mess.wait)
					buff = await getBuffer(`https://api.vhtear.com/gamelogo?text=${body.slice(7)}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, buff, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cparty':

					part = `${body.slice(8)}`
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, bufferu, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cstyle':

					reply(mess.wait)
					buff = await getBuffer(`https://api.vhtear.com/stylelogo?text=${body.slice(8)}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, buff, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cglass':

					glass = `${body.slice(8)}`
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/wetglass?text=${glass}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, bufferu, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
					case 'croman':               
                roman = `${body.slice(8)}`
                     if (args.length < 1) return reply('Cadê o texto, mano??')
                     if (args.length > 10) return reply('pelo menos 10 caracteres')
                     buff = await getBuffer(`https://api.vhtear.com/romancetext?text=${roman}&apikey=${VthearApi}`, {method: 'get'})
                     client.sendMessage(from, buff, image, {quoted: mek})
                  await limitAdd(sender) 
                  break 
				case 'setnomebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`O nome do bot foi alterado com sucesso para : ${name}`)
					break
					case 'clove':
					  if (args.length < 1) return reply('Cadê o texto, mano??')
                     if (args.length > 10) return reply('pelo menos 10 caracteres')
					 love = `${body.slice(7)}`
					 buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${VthearApi}`, {method: 'get'})
					 client.sendMessage(from, buff, image, {quoted: mek})
					 await limitAdd(sender)
					 break
                	case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('Marque o video pfv')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
				break

			    case 'shorturl':
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/shorturl?url=${body.slice(10)}`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        break
			    case 'infonomor':
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        hasil = `*número* \n${anu.nomor} *internacional* \n${anu.international}`
			        reply(hasil)
			        break
			    case 'igstalk':
					if (args.length < 1) return reply('Masukan username mu!!')
					ige = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${ige}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					buffer = await getBuffer(anu.result.picture)
					capt = `User Ditemukan!!\n\n*➸ Nama :* ${anu.result.full_name}\n*➸ Username :* ${anu.result.username}\n*➸ Followers :* ${anu.result.follower}\n*➸ Mengikuti :* ${anu.result.follow}\n*➸ Jumlah Post :* ${anu.result.post_count}\n*➸ Private :* ${anu.result.is_private}\n*➸ Bio :* ${anu.result.biography}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: capt})
					break
                   case 'map':
                   if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   hasil = await getBuffer(data.gambar)
                   client.sendMessage(from, hasil, image, {quoted: mek, caption: `Resultados de *${body.slice(5)}*`})
                   await limitAdd(sender)
                   break
					case 'users':
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`╭────*「 *TOTAL DE USUÁRIOS CARLOS BOT 👑* 」\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total de usuários : ${user.length}\n╰──────*「 *CARLOS* 」*────`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
                case 'opengc':
                case 'bukagc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nsekarang *todos os participantes* pode enviar mensagens`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					client.sendMessa
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que já foram enviadas`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil😗')
					break
				case 'setnome':
				   if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                   if (!isGroup) return reply(mess.only.group)
			       if (!isGroupAdmins) return reply(mess.only.admin)
			   	   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   client.groupUpdateSubject(from, `${body.slice(9)}`)
                   client.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {quoted: mek})
                   break
				case 'infogc':
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nome do grupo :* ${groupName}\n*Descrição :* ${groupDesc}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de membros :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
				case 'bloqueados':
				     if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					 if (!isPremium) return reply(mess.only.premium)
                     teks = 'Esta é a lista de números bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ler':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Só uma foto mano')
					}
					break
				case 'stiker':
				case 'sticker':
			    case 'f':
			    case 'figu':
			     case 'fig':
			        if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('TioCARLOS', '55 94 9285-6640')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falha ao converter $ {type} em sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('Tio', '55 94 9285-6640')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde. ')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('TioCarlos', '55 94 9285-6640')} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`oi se o comando não deu certo é por que falhou ou por que o video ultrapassa de 10 seg para fazer a fig :(`)
					}
					break
					case 'dado':    
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o Carlos  ou digite *-compras* para adquirir o acesso Premium!' ,text, { quoted: mek })
					
					kapankah = body.slice(1)
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					client.sendMessage(from, ule, text, { quoted: mek })
					break
case 'addvip':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono 🌚🤙🏼 * ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./database/vip.json', JSON.stringify(premium))
vip = `✅@${mentioned[0].split('@')[0]} Você virou Vip no Carlos BOT✅`
mentions(`${vip}`, mentioned, true)   
break

case 'delvip':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono 🌚🤙🏼 * ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.splice(`${mentioned}`)
fs.writeFileSync('./database/vip.json', JSON.stringify(premium))
vip = `❎@${mentioned[0].split('@')[0]} Você deixou de ser um membro Vip do Carlos BOT❎`
mentions(`${vip}`, mentioned, true)   
break
					case 'daftarvip': 
					client.sendMessage(from, daftarvip(prefix) , text, { quoted: mek })
					break
					case 'nekopoi':   
					
					client.sendMessage(from, nekopoi(prefix) , text, { quoted: mek })
					break
					case 'cekvip': 
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *-compras* para adquirir o acesso Premium!' ,text, { quoted: mek })
					me = client.user
					uptime = process.uptime()
					client.sendMessage(from,  `*──────────────────*\n*Nome do bot:* Carlos BOT\n*─────────────────*\n『 *𝐕𝐈𝐏 𝐔𝐒𝐄𝐑*』\n*──────────────────*\n*•Número:* *${sender.split("@s.whatsapp.net")[0]}*\n*•Status:* *ATIVO*\n*──────────────────*\n*Status Bot:* *${kyun(uptime)}*\n\n*VOCE É UM MEMBRO PREMIUM* \n*──────────────────*` , text, { quoted: mek, })
					break
				case 'porno':
				    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdU0UmT8RigE3Hbr80gmigjb2AdnPJklcQ3A&usqp=CAU`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/11/novinha-petuda-fotos-4.jpg`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWoYHFA_SDgUip6MtvimWRdub_lshAn5Edg&usqp=CAU`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwvLmbqW9LeOCpXiGxgu3By4eQEmJM2Xp26Q&usqp=CAU`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnhmpQD1C1Dp7I2_kpi13gAsuoudOPPraog&usqp=CAU`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/prima-novinha-pelada-6.jpg`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-5.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-6.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-7.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-8.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-10.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-16.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'k'})
					break
				case 'termuxbot':
				     if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
			     	memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/dPUVFF6.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*_Comandos basicos para bot:_*\n\n*pkg upgrade && pkg update*\n*pkg install git*\n*git clone (link da git)*\n*cd (repositório)*\n*bash install.sh*\n*npm start*\n\n qualquer duvida mande mensagem pro cria -dono\n\n*CARLOS NO CONTROLE*'})
					break 
				case 'bomdia':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/7VL9cFf.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Bom dia, vcs sao fodas ❤️'})
					break
				case 'boatarde':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/JaO3yoV.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Boa tarde, rapeize 😎👍'})
					break
				case 'boanoite':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/yOFxSUR.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Boa noite fml ❤️'})
					break
				case 'lofi':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9hZBPRo16fIhsIus3t1je2oAU23pQqBpfw&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '️💆'})
					break
				case 'malkova':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbo5EcVSGj-IvEVznHIgMZ9vjFptZfvprtg&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '️💆'})
					break
				case 'cal':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					buffer = await getBuffer(`https://rbacelia.sirv.com/IMG-20210624-WA0373.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption:'', quoted: mek} )
					break
//_COMANDOS NSFW
				case 'loli':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
				    if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhzKetbU3pzhoZdaIo6qBklCzwvmCCOznbg&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Rum️'})
					break
                    case 'neko':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
				    if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/eroneko?apikey=ObitoSpam`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Rum️'})
					break
                    case 'hentai':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    if (!isAnime) return reply('❌ *Deve ativar o modo Anime* ❌')
					buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/classic?apikey=ObitoSpam`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '😳'})
					break
				case 'boanoite':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/gallery/4HeRfuO`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'bom dia ❤️'})
					break
				case 'bomdia':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/gallery/zFvzl2S`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'bom dia ❤️'})
					break
				case 'termux':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgADDq_64EbTI0NroP7CUoVeWmu1J06NnGHw&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Terminal é um programa muito conhecido no mundo das distribuições Linux. Ele é uma ferramenta que facilita muito nas tarefas relacionadas ao sistema. Agora, já pensou em utilizar o Terminal Linux no seu Android? Esta é a proposta do Termux.\n\n*TERMUX: UTILIZE O TERMINAL NO SEU ANDROID*\n\nA utilização do Terminal aumenta muito a produtividade do usuário que já possui um determinado nível de conhecimento técnico.\nCom o terminal, é possível fazer diversas e diferentes coisas, desde navegar entre os diretórios e instalar programas, até descompactar arquivos e monitorar os processos.'})
					break
		    	case 'grupoinfo':
		            if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    client.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(mess.only.group)
                    ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			        buffer = await getBuffer(ppUrl)
		            client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
                    break
				case 'meme':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					reply(mess.wait)
					anu = await fetchJson(`https://imgur.com/gallery/rvz2dPi`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'cringe️', quoted: mek })
					await limitAdd(sender) 	
					break
				case 'antishit':
			   if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (args.length < 1) return reply('On para ativar,Off para desativar');
               if (args[0] === 'on') {
                  if (isAntiShit) return reply('antishit já ativo burro');
                  antishit.push(from);
                  fs.writeFileSync('./database/json/antishit.json', JSON.stringify(antishit));
                  reply(`Antishit ativado`);
               } else if (args[0] === 'off') {
                  if (!isAntiShit) return reply('antishit já ta off burro');
                  antishit.splice(from, 1);
                  fs.writeFileSync('./database/json/antishit.json', JSON.stringify(antishit));
                  reply(`Antishit desativado`);
               } else {
                  reply(ind.satukos());
               }
               break
				case 'rr':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                    rate = body.slice(1)
                    ratee = ["Tac... Não disparou","Tac... Não disparou,ainda...","Tac💥 Disparou e você morreu","Tac💥Disparou mas a bala pegou de raspão","A arma falhou","Tac... Por pouco que não dispara...","Tac... A arma estava descarregada"]
                    const cu = ratee[Math.floor(Math.random() * ratee.length)]
                    client.sendMessage(from, ''+ cu+'', text, { quoted: mek })
                    break
case 'bug':
if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
const bug = body.slice(5)
 if (args.length > 300) return client.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `[REPORT]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
client.sendMessage('559492856640@s.whatsapp.net', options, text, {quoted: mek})
reply("Mensagem enviada ao meu dono; Spam = block + ban.")
break
case 'request':
                if (isBanned) return reply('Desculpe, você foi pego!')
                if (args.length < 1) return reply(`O que você deseja solicitar? Exemplo: ${prefix}request fitur anime`)
          				
                     const cfrr = body.slice(8)
                      if (cfrr.length > 300) return client.sendMessage(from, text , 'Desculpe, o texto é muito longo, máximo de 300 textos')
                       const ress = `*[REQUEST]*\nNúmero : @${tonor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [tonor]},
                     }
                    client.sendMessage('559492856640@s.whatsapp.net', options, text, {quoted: mek})
                    reply('SUA SOLICITAÇÃO ATINGEU O proprietário do BOT, Solicitações pals /main2 não serão respondidas. ')
                    break
				case 'dono':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://rbacelia.sirv.com/IMG-20210624-WA0373.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption:'Ctt do meu dono ai, pfv n flode o chat!, se ele demorar para responder aguarde! ele responde em até 24hrs;)', quoted: mek} )
				    client.sendMessage(from, {displayname: "CARLOS", vcard: vcard}, MessageType.contact, { quoted: mek})    
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					AA= args[0]
					reply(`O prefixo foi alterado com sucesso para : ${prefix}`)
					break
                                case 'lolih':
                                  if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                                        gatauda = body.slice(6)
                                                   reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break
				case 'marcar':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'marcar2':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                 case 'marcar3':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
                case 'marcar4':
                    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
case 'divulgar':
					if (!isOwner) return reply('Quem é você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ 𝐕𝐢𝐝𝐞𝐨 𝐧??𝐯𝐨 𝐝𝐨 𝐓𝐈𝐎 𝐓𝐎𝐌𝐈𝐎𝐊𝐀 ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ 𝐕𝐢𝐝𝐞𝐨 𝐧𝐨𝐯𝐨 𝐝𝐨 𝐓𝐈𝐎 𝐓𝐎𝐌𝐈𝐎𝐊𝐀 ]\n\n${body.slice(10)}`)
						}
						reply('Tm enviada com sucesso')
					}
					break
				case 'bc':
					if (!isOwner) return reply('Quem é Você, você não é meu dono 😂?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ TRANSMISSÃO DO CRIADOR ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão enviada com sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ TRANSMISSÃO DO CRIADOR ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão enviada com sucesso')
					}
					break
        case 'promover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar? usa certo trem ')
					if (args[0].startsWith('08')) return reply('Use o código do país, man')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
case 'kik': 
   if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
 client.sendMessage("Alvo removido com sucesso")
break 
				case 'banir':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Alvo removido com sucesso :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'admins':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                                case 'linkgp':
                                        if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        linkgc = await client.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        break
                                case 'leave':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (isGroupAdmins || isOwner) {
                                            client.groupLeave(from)
                                        } else {
                                            reply(mess.only.admin)
                                        }
                                        break
				case 'toimg':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (!isQuotedSticker) return reply('{ ❗ } *Marque a figurinha*')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter adesivos em imagens ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
				            if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (args.length < 1) return reply('Onde está o texto?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('✓Ativado com sucesso o modo simi neste grupo✓')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('×Desativado modo simi com sucesso neste grupo×')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
				case 'bemvindo':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Já esta ativo.')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Ativou com sucesso o recurso de boas-vindas neste grupo 😉️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('✓Desativou com sucesso o recurso de boas-vindas neste grupo✓')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
                                      break
				case 'clonar':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
				    if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
					}
					break
				case 'hidetag':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if (!isGroup) return reply(mess.only.group)
					if (!isadminbot) return reply('Quem é Você?')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
					//
				case 'setpp3':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isfrendsowner) return reply('Quem é Você?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterado com sucesso o ícone do Grupo')
                    break
				case 'wait':
				    if (!isUser) return reply(`「 ❗ 」Registre-se primeiro\nComo registrar : ${prefix}registrar`)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Só uma foto mano')
					}
					break
				default :
				if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'comando não registrado de', color(pushname))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
						console.log(color('[ERROR]','red'), 'eita bixo comando não registrado de', color(pushname))
                          
	})
}
starts()