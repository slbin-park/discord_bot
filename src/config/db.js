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


console.log("Connection Object Created");
db.connect(function (error1) {
    if (error1) {
        console.log(error1);
        return;
    } else {
        console.log("Connected1");
    }
});

module.exports = db;