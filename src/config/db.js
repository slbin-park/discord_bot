const mysql = require("mysql");
const env = require("./env");
const db = mysql.createPool({ //수정예정
    host: process.env.DBHOST, //db 주소
    port: parseInt(process.env.PORT), //db 포트
    user: process.env.USER, //db 유저이름
    password: process.env.PASSWORD, //db 패스워드
    database: process.env.DATABSE, //db 스키마
});

module.exports = db;