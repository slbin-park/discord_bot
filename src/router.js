const help = require('./commands/help/help')
const clear = require('./commands/clear/clear')
const dotenv = require('./config/env')

const router = (msg) => {
    const commands = msg.content.split(' ')
    if (msg.author.bot) return;
    if (!msg.content.startsWith(process.env.PREFIX)) return // 시작단어가 prefix가 아닐경우 리턴
    if (commands[0] == '!도움말') {
        help.help(msg)
    }
    else if (commands[0] == '!청소') {
        clear.clear(msg)
    }
}
module.exports = {
    router
}