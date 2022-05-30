
import { NextFunction, Request, Response } from "express";
import log from "../../logger/logger";

const getDurationInMilliseconds = (start: [number, number] | undefined) => {
  const NS_PER_SEC = 1e9
  const NS_TO_MS = 1e6
  const diff = process.hrtime(start)

  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}

export const requestTimer = (req: Request, res: Response, next: NextFunction) => {
  const start = process.hrtime()
  res.on('finish', () => {            
      const durationInMilliseconds = getDurationInMilliseconds(start)
      log.debug(`${req.method} ${req.originalUrl} [${res.statusCode}] ${durationInMilliseconds.toLocaleString()} ms`)
  })
  // res.on('close', () => {
  //     const durationInMilliseconds = getDurationInMilliseconds (start)
  //     log.debug(`${req.method} ${req.originalUrl} [CLOSED] ${durationInMilliseconds.toLocaleString()} ms`)
  // })

  next()
}