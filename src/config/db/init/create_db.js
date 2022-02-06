const fs = require('fs');
const mkdirp = require('mkdirp');
const check_db = require('../check/check_db')
const path = require('path');
var eng = /^[a-zA-Z]*$/; // 폴더이름 영어로 되어있는지 체크하는 정규표현식

const folder_name = ['admin', 'user', 'game']



const makeFolder = (msg) => {
    const dir_name = msg.content.split(' ')[1].toLowerCase()
    // 폴더이름 영어 소문자로 생성
    let dir = path.join('json', dir_name)
    // 폴더 경로 , 이름 지정
    const make_folder = (name) => {
        dir = path.join('json', dir_name, name)
        fs.mkdir(dir, { recursive: true }, (err) => {
            if (err) {
                return msg.channel.send('```\n디비 생성 에러.\n```');
            }
            msg.channel.send('```\n디비 생성이 완료되었습니다.\n```')
        });
    }

    if (!eng.test(dir_name)) {
        msg.channel.send('```\n영어로만 가능합니다.\n```')
        return
    }
    else {
        if (fs.existsSync(dir)) { // 동일한 폴더이름이 존재 하는지 체크 먼저
            msg.channel.send('```\n동일한 이름의 서버가 존재합니다.\n```')
            return
        }
        if (check_db.check_db(msg, dir_name) == false) { // 이미 서버에서 만든 디비 있을경우
            return
        }
    }
    // 체크 로직 끝


    folder_name.map((name) => {
        make_folder(name)
    })


}

module.exports = {
    makeFolder
}