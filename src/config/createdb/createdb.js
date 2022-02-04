const fs = require('fs');
const mkdirp = require('mkdirp');
const check_db = require('./check_db')
const path = require('path');
var eng = /^[a-zA-Z]*$/;

const makeFolder = (msg) => {
    const dir_name = msg.content.split(' ')

    if (!eng.test(dir_name[1])) {
        msg.channel.send('```\n영어로만 가능합니다.\n```')
        return
    }
    else {
        if (fs.existsSync(dir)) { // 동일한 폴더이름이 존재 하는지 체크 먼저
            msg.channel.send('```\n동일한 이름의 서버가 존재합니다.\n```')
        }
        if (check_db.check_db(msg) == false) { // 이미 서버에서 만든 디비 있을경우
            return
        }
    }

    const dir = path.join('json', dir_name[1])


    fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) {
            return msg.channel.send('```\n디비 생성 에러.\n```');
        }
        msg.channel.send('```\n디비 생성이 완료되었습니다.\n```')
    });

}

module.exports = {
    makeFolder
}