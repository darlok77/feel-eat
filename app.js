const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');

app.use ('/', express.static(path.join(`${__dirname}/public`)));

app.get ('/', (req, res) => {
  res.sendfile('./index.html');
});

server.listen(8080);