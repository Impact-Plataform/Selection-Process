import winston from 'winston';


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
            (info) => `${info.timestamp} - [${info.level}]: ${info.message}`
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
        }),
        new winston.transports.File({ 
            //filename: `./server/logger/logs/debug_${formatDate(new Date(Date.now()))}.log`, 
            filename: `./server/logger/logs/debug.log`, 
            level: 'debug' 
        })
    ],
});

function formatDate(date: any) {
	return date.toLocaleDateString().replaceAll("/", "-");
}
 
export default log;