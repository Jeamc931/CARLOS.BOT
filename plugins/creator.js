let handler = function (m) {
  this.sendContact(m.chat, '5594992856640', 'Nurutomo', m)
}
handler.help = ['owner', 'creator', 'dono']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
