const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const rdf = fs.readFileSync(path.join('json', 'server', 'server_id.json'))
let json_server = JSON.parse(rdf);

const check_db = (msg, folder_name) => {
    console.log(json_server)
    const check_channel = json_server.server.filter(data => data[0] == msg.guild.id)
    console.log(check_channel)
    // 체크 로직 끝
    if (check_channel.length > 0) {
        msg.channel.send('```\n디비가 이미 존재합니다.\n폴더명 : ' + check_channel[0][1] + '\n```')
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