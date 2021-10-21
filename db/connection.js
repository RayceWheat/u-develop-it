const mysql = require('mysql2');

// Connect to database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'PlmQazPlmWsx!2',
        database: 'election'
    },
    console.log('Connected to the elcetion database.')
);

module.exports = db;