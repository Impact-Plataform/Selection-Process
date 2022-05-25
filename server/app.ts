import express from 'express'
import cors from 'cors'
import api from "./api/api"

class App {
  public express: express.Application
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(cors());
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use('/api', api);
  }
}


export default new App().express;

 