const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function () {

    // process.on('uncaughtException', (ex) =>{
    //     console.log('We got an Uncaught Exception');
    //     winston.error(ex.message, ex);
    //     process.exit(1);
    // });

    winston.handleExceptions(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: "uncaughtExcceptons.log" })
    );

    // process.on('unhandledRejection', (ex) => {
    //     // throw ex;
    //     console.log('We got an unhandledRejection');
    //     winston.error(ex.message, ex);
    //     process.exit(1);
    // });

    winston.add(winston.transports.File, { filename: 'logfile.log' });
    winston.add(winston.transports.MongoDB, {
        db: 'mongodb://localhost/vidly',
        level: 'info'
    });

}