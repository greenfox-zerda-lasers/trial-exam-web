'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.sendfile('./client/index.html');
});

app.post('/decode', function(req, res) {
  var probavalami = {
    "status": "ok",
    "text": "lorem ipsum dolor sit"
  };
  res.send(probavalami)
});



app.listen(3000);
