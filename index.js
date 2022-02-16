console.log(" test eval");
require("dotenv").config();
const express = require("express"),
  app = express(),
  mysql = require("mysql")
bodyParser = require('body-parser'),
  port = process.env.PORT || 3002, {
    engine
  } = require("express-handlebars");

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// HBS /Views
app.set("view engine", "hbs");
app.engine("hbs", engine({
  extname: "hbs",
  defaultLayout: "main",
}));

// Mysql
db = mysql.createConnection({
  host: 'localhost',
  user: 'bruno',
  password: 'bruno',
  database: 'test_db'
});

db.connect((err) => {
  if (err) console.error('error connecting: ' + err.stack);
  console.log('connected as id ' + db.threadId);
});

const util = require("util");
db.query = util.promisify(db.query).bind(db);

const ROUTER = require('./back/router')
app.use('/', ROUTER);


app.listen(port, () => {
  console.log("le serveur tourne sur le port: ⚡" + port);
});