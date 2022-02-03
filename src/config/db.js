const mysql = require("mysql2");
const env = require("./env");
// process.env.USER 를 하면 컴퓨터 계정이름이 뜬다...
const db = mysql.createConnection({ //수정예정
    host: process.env.DBHOST, //db 주소
    port: process.env.PORT, //db 포트
    user: process.env.USERNAME, //db 유저이름
    password: process.env.PASSWORD, //db 패스워드
    database: process.env.DATABASE, //db 스키마
});



module.exports = db;