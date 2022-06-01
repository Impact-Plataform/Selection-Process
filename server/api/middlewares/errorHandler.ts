import { NextFunction, Request, Response } from "express"
import log from "../../logger/logger";
import { HttpException } from "./HttpException"

export function errorHandler(err: HttpException, req: Request, res: Response, next: NextFunction) {
  console.log(err);
  
  log.error(`${err.message} - ${err.stack} - ${err.status}`);
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  res.status(status).send({
    status,
    message,
  })
}
