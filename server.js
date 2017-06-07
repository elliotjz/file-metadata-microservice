
const express = require('express');
const controller = require('./controller');

const port = process.env.PORT || 3000;

let app = express();

controller(app);

app.listen(port, function () {
  console.log('file-metadata-microservice listening on port 3000!');
})