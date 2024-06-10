const mysql = require('mysql');

const db = mysql.createConnection({
    database: "spacetrain",
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: ""
});

db.connect();

module.exports = {
    db
}
