const express = require('express');
const bodyParser=require('body-parser')
const routes = require('./src/routes/routes');
const app = express();

const port = 4000;



//const bodyParser = require('body-parser');

// app.use(bodyParser.json({ limit: '50mb' }));

// listning server

app.use(bodyParser.json())
app.use(routes)
app.listen(port, async () => {
  console.info(`CMS-API EXPRESS listening on port ${port}`);
});

module.exports = app;

