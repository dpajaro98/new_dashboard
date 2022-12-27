const dotenv = require('dotenv').config();
const mysql = require("mysql");

const connect_DB = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
});

module.exports=connect_DB;

