const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
var eng = /^[a-zA-Z]*$/;

const makeFolder = (msg) => {
    const dir_name = msg.content.split(' ')

    if (!eng.test(dir_name[1])) {
        msg.channel.send('```\n영어로만 가능합니다.\n```')
        return
    }


    const dir = path.join('json', dir_name[1])

    if (fs.existsSync(dir)) {
        msg.channel.send('```\n디비가 이미 존재합니다.\n```')
    }
    else {
        fs.mkdir(dir, { recursive: true }, (err) => {
            if (err) {
                return msg.channel.send('```\n디비 생성 에러.\n```');
            }
            msg.channel.send('```\n디비 생성이 완료되었습니다.\n```')
        });
    }
}

module.exports = {
    makeFolder
}