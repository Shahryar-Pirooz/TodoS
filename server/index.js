import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import Connection from './database/connection.database.js'
import router from './Routes/route.js'

const app = express()
const port = 3030
Connection()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())

app.use('/', router)

app.listen(port, () => console.log(`Express is listenning on ${port}`))
