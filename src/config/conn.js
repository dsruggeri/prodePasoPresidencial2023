const mysql = require('mysql2');
require('dotenv').config();


const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0

});


module.exports = {
    conn: pool.promise()
}