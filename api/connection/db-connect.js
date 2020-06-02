const msql = require('mysql');

const db = msql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'school_db',
    port    : '3308'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
});

module.exports = db;