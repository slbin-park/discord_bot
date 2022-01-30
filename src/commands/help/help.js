
const help = (msg) => {
    console.log(msg)
    if (msg.content.startsWith('!도움말')) {
        msg.reply('```css\n#b 안녕하세요\n파이어봇입니다.```');
    }

    if (msg.content === '!내정보') {
        // Send the user's avatar URL
        msg.reply(msg.author.avatarURL);
    }
}

module.exports = {
    help
}