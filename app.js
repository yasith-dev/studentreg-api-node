const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const studentRoutes = require('./api/routes/students');

app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes handling requests
app.use('/students', studentRoutes);

//handle unavailable routes error
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

//handle other errors 
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        "error" : {
            "message" : error.message
        }
    });
});

module.exports = app;