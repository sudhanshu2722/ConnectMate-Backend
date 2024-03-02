const express = require('express');
const bodyParser=require('body-parser')
const routes = require('./src/routes/routes');
const mongoose = require("./src/connectors/dbConnector")
const app = express();

global.ErrorCodes = require('./src/constant/errorCodes')

const port = 4000;

app.use(bodyParser.json())
app.use(routes)
app.listen(port, async () => {
  console.info(`CMS-API EXPRESS listening on port ${port}`);
});

module.exports = app;

