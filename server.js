'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var decrypt = require('./decrypt.js');

var con = mysql.createConnection({
  host: "localhost",
  user: "'jaj'",
  password: "alma",
  database: "caesar"
});

con.connect(function(err){
  if(err){
    console.log("Error connecting to Db", err);
    return;
  }
  console.log("Connection established");
});

var app = express();
app.use(bodyParser.json());
app.use(express.static('client'));

// app.get('/', function(req, res) {
//   res.sendfile('./client/index.html');
// });

app.post('/decode', function(req, res) {
  console.log(req.body); // { shift: 3, text: 'oruhp lsvxp groru vlw' }
  var shift = parseInt(req.body.shift);
  var text = req.body.text;
  var decrypted = decrypt(shift, text);

  var response = {
    "status": "ok",
    "text": decrypted
  };

  if (shift > 25 || shift < -25) {

    res.status(400);
    response = {
      "status": "error",
      "error": "Shift is out of bound"
    };
    res.send(response);

  } else {

    con.query({
      sql: 'INSERT INTO cypher(text) VALUES(?)',
      values: [decrypted]
    }, function (err) {
      if(!err) {
      res.send(response);
    }
  });

  }

});

app.get('/decode/all', function(req, res) {

  con.query('SELECT * FROM cypher', function (err, rows) {
    if(!err) {
      var rowsTextOnly = rows.map(function (row) {
        return row.text;
      }); // ['alma', 'beka']
      res.send({
        all: rowsTextOnly
      });
    }
  });
});


app.listen(3000);
