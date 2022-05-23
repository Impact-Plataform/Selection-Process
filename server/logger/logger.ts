const winston = require('winston');
 
const log = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        winston.format.errors({ 
            stack: true 
        }),
        //winston.format.json(),
        winston.format.printf(
            (info: {timestamp: any; level: any; message: any; }) => `${info.timestamp} - [${info.level}]: ${info.message}`
           )
    ),
    transports: [
        new winston.transports.File({ 
            //filename: `./server/logger/logs/error_${formatDate(new Date(Date.now()))}.log`, 
            filename: `./server/logger/logs/error.log`, 
            level: 'error' 
        }),
        new winston.transports.File({ 
            //filename: `./server/logger/logs/info_${formatDate(new Date(Date.now()))}.log`, 
            filename: `./server/logger/logs/info.log`, 
            level: 'info' 
        })
    ],
});

function formatDate(date: any) {
	return date.toLocaleDateString().replaceAll("/", "-");
}
 
module.exports = log;