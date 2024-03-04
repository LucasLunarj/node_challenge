const express = require('express')
const app = express()
const routes = require('../src/routes/')
const database = require("./database/sqlite")

database()
app.use(express.json())

app.listen(3000, console.log("server started"))

app.use(routes)