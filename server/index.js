import express from 'express'
import morgan from 'morgan'
// import bodyParser from 'body-parser'
import Connection from './database/connection.database.js'

const app = express()
const port = 3000
Connection()

// app.use(bodyParser.json({ extended: true }))
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('tiny'))

app.get('/', (req, res) => res.send('Hi there'))

app.listen(port, () => console.log(`Express is listenning on ${port}`))
