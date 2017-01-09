'use strict';

var express = require('express');
var bodyParser = require('body-parser');

function decrypt (shift, text) {
  return text;
}

var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendfile('./client/index.html');
});

app.post('/decode', function(req, res) {
  var shift = req.body.shift;
  var text = req.body.text;
  var decrypted = decrypt(shift, text);

  var response = {
    "status": "ok",
    "text": decrypted
  }

  res.send(response);
});

app.get('/decode/all', function(req, res) {
  var probavalami = {
    "all": [
      "lorem ipsum dolor sit",
      "consectetur adipisicing elit",
      "ut labore et dolore magna aliqua"
    ]
  };
  res.send(probavalami);
});



app.listen(3000);
