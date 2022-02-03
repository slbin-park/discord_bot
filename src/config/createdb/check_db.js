const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const rdf = fs.readFileSync(path.join('json', 'server', 'server_id.json'))
const json_server = JSON.parse(rdf);

const check_db = () => {
    console.log(json_server)
}
module.exports = {
    check_db
}