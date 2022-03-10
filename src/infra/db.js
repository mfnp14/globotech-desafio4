const db = require("./db");
const mysql = require('mysql/promise')

const {
    DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATABASE,
  } = process.env;

const connection = mysql.createConnection({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASS,
    database:DB_DATABASE,
})

connection.connect(function (err){
    if(err) console.error('nao conectou com o banco');return;
}) 
 connection.query('INSERT INTO ')


