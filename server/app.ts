//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');

import express from 'express'
import cors from 'cors'
import api from "./api/api"

const log = require('./logger/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', api);

app.listen(PORT, () => {
  log.info(`server is running on port ${PORT}`);
  console.log(`server is running on port ${PORT}`);
});

module.exports = app;

 