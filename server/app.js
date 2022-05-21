const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const api = require('./api/api');

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('api/', api);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

module.exports = app;

 