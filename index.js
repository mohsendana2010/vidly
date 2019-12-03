require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');
const config = require('config');
// const mongoose = require('mongoose');
const express = require('express');
const app = express();

 require('./startup/routes')(app);
 require('./startup/db')();

// process.on('uncaughtException', (ex) =>{
//     console.log('We got an Uncaught Exception');
//     winston.error(ex.message, ex);
//     process.exit(1);
// });

winston.handleExceptions(
    new winston.transports.File({ ilename: "uncaughtExcceptons.log" })
);

process.on('unhandledRejection', (ex) => {
    // throw ex;
    console.log('We got an unhandledRejection');
    winston.error(ex.message, ex);
    process.exit(1);
});

winston.add(winston.transports.File, { filename: 'logfile.log' });
winston.add(winston.transports.MongoDB, {
    db: 'mongodb://localhost/vidly',
    level: 'info'
});

const p = Promise.reject(new Error('Something failed miserable!'));
p.then(() => { console.log('Done'); });
// throw new Error('Something failed during startup');

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}
// mongoose.connect('mongodb://localhost/vidly')
//     .then(() => console.log('Connected to MongoDB...'))
//     .catch(err => console.error('Could not Connect to MongoDB...'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));