const winston = require('winston');
 
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        winston.format.errors({ 
            stack: true 
        }),
        //winston.format.json(),
        winston.format.printf(
            info => `${info.timestamp} - [${info.level}]: ${info.message}`
           )
    ),
    transports: [
        new winston.transports.File({ 
            filename: `./logs/error_${formatDate(new Date(Date.now()))}.log`, 
            level: 'error' 
        }),
        new winston.transports.File({ 
            filename: `./logs/info_${formatDate(new Date(Date.now()))}.log`, 
            level: 'info' 
        })
    ],
});
 
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

function formatDate(date) {
	return date.toLocaleDateString().replaceAll("/", "-");
}
 
module.exports = logger;