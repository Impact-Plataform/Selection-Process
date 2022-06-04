import app from './app';
import log from './logger/logger';
require('dotenv').config()

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
  log.info(`server is running on port ${SERVER_PORT}`);
  console.log(`server is running on port ${SERVER_PORT}`);
});

module.exports = app;
