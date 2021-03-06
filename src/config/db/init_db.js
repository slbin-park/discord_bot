const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const rdf = fs.readFileSync(path.join('json', 'server', 'server_id.json'))
let json_server = JSON.parse(rdf);

const check_db = (msg, folder_name) => {

    const check_channel = json_server.includes(msg.guild.id)
    // 디스코드 채널 아이디 체크 하는거 수정하기 
    console.log(json_server)
    if (check_channel) {
        msg.channel.send('```\n 디비가 이미 존재합니다.\n```')
        return false;
    }

    json_server.server.push([msg.guild.id, folder_name]) // 채널 아이디 푸시

    let data = JSON.stringify(json_server); // JSON 형식으로 변경
    fs.writeFileSync(path.join('json', 'server', 'server_id.json'), data); // JSON 파일 저장
    return true
}
module.exports = {
    check_db
}