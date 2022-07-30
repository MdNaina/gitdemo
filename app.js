const express = require("express")
const baseRoute = require("./router")

const app = express()

app.use(express.static('public'))


module.exports = app