const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const {
  PORT
} = require('./config/app')
const Logger = require('./logger')

app.set('port', PORT)
app.use(morgan(':method :url - :status', {
  stream: Logger.stream
}))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cookieParser())

function upServer () {
  app.listen(app.get('port'), () => {
    Logger.info('[<%= name %>] => [server.js] => [upServer] => Server is running at port: ' + app.get('port'))
  })
}

upServer()

module.exports = app
