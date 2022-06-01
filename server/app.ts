import express from 'express'
import cors from 'cors'
import api from "./api/api"
import { requestTimer } from './api/middlewares/requestTimer';
import { errorHandler } from './api/middlewares/errorHandler';

class App {
  public express: express.Application
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.errorHandlers();
  }

  private middleware(): void {
    this.express.use(requestTimer)
    this.express.use(cors());
    this.express.use(express.json());
  }
  private errorHandlers(): void {
    this.express.use(errorHandler)
  }

  private routes(): void {
    this.express.use('/api', api);
  }
}


export default new App().express;

 