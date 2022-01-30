const help = require('./commands/help/help')
const prefix = '!'
const router = (msg) => {
    console.log()
    if (!msg.content.startsWith(prefix)) return
    if (msg.content == '!도움말') {
        help.help(msg)
    }
}
module.exports = {
    router
}