require('./database');
const express = require('express');
const cors    = require('cors');
const bodyParser = require('body-parser');
const app       = express();

const tables      = require('./routes/tables')

app.use(express.static('app'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

database.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  const server = app.listen(8081, function () {
      const host = server.address().address
      const port = server.address().port
      console.log("Table app server listening at http://%s:%s", host, port)
  });
});

// City
app.get('/table/:page_id', tables.getColumns);
app.post('/table/:page_id', tables.getData);