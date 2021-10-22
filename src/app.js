const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//settings
app.set('port', proccess.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(cors())
