const db = require('../connection/db-connect');
const express = require('express');

const router = express();

router.get('/', (req, res, next) => {
    let sql = "SELECT * FROM student";
    db.query(sql, (err, result) => {
        if (err) throw err;           
        res.status(200).json({
            result
        });
    });
});

router.post('/', (req, res, next) => {
    const studentDetails = {
        name : req.body.name,
        age : req.body.age,
        gender : req.body.gender,
        height : req.body.height,
        weight : req.body.weight
    };
    res.status(200).json({
        "message" : studentDetails
    });
});

module.exports = router;