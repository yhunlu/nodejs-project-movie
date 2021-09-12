require('express-async-errors');
require('winston-mongodb');
const winston = require('winston');

module.exports = function() {
    winston.exceptions.handle(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'uncaughtExceptions.log' })
    );
    
    process.on('unhandledRejection', (ex) => {
        throw ex;
    });
    
    winston.add(new winston.transports.File({ filename: 'logfile.log' }));
    winston.add(new winston.transports.MongoDB({ 
        db: 'mongodb://localhost/movies',
        level: 'error'
    }));
};