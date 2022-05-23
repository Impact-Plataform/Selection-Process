const fs = require('fs');
const log = require('./logger');

export class LoggerController {

    static ReadFile(req: any, res: any){

        var path = './server/logger/logs/info.log';

        fs.readFile(path, 'utf-8', (err: any, data: any) => {
            if (err) {
                res.status(500).send(err);
                log.error(err);
                return;
            }

            res
            .set({ 'Content-Type': 'application/json' })
            .send(data);
        });
    }
}
  
