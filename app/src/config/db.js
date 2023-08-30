const mysql = require("mysql");
//mysql-db.js
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    port: 3306,
    password:'admin123',
    database:'mirrorCity_rhythm'
});

db.connect();

module.exports = db;