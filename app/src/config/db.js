const mysql = require("mysql");
//mysql-db.js
const db = mysql.createConnection({
    host: 'mirrorcity-rhythm.chabxavnh6iv.ap-northeast-2.rds.amazonaws.com',
    user:'root',
    password:'admin123',
    database:'mirrorCity_rhythm'
});

db.connect();

module.exports = db;