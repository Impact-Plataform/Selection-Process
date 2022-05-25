import app from './app';
import log from './logger/logger';

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  log.info(`server is running on port ${PORT}`);
  console.log(`server is running on port ${PORT}`);
});

module.exports = app;
