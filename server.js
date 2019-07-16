const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

require('dotenv').config()
require('./config/database')

app.use(logger('dev'))
app.use(express.json())

app.use(require('./config/auth'))

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/users', require('./routes/api/users'))

var indexRouter = require('./routes/api/index')
var usersRouter = require('./routes/api/users')
var apiRouter = require('./routes/api/posts')

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/api', apiRouter)

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 3001

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
})
