const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const rdf = fs.readFileSync(path.join('json', 'server', 'server_id.json'))
let json_server = JSON.parse(rdf);

const check_db = () => {
    json_server.server.push(12345)
    let data = JSON.stringify(json_server);
    fs.writeFileSync(path.join('json', 'server', 'server_id.json'), data);
    console.log(json_server)
}
module.exports = {
    check_db
}