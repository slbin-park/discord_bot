const help = require('./commands/help/help')
const clear = require('./commands/clear/clear')
const game = require('./commands/game/game')
const dotenv = require('./config/env')
const db = require('./config/db/create_db')

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
    else if (commands[0] == '!게임') {
        game.game(msg)
    }
    else if (commands[0] == '!디비생성') {
        if (commands.length < 2) {
            msg.channel.send('```\n!디비생성 영어 \n```')
            return
        }
        db.makeFolder(msg)
    }
}
module.exports = {
    router
}