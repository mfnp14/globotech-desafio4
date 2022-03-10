const express = require('express')
const db = require('./data/database')

db.connect()

const app = express()

app.use(express.json())const express = require('express');
const db = require('/index.js');

db.connect()

const app = express()

app.use(express.json())

app.get('/health', (_, res) => {
    res.send();
  });