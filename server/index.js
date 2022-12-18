import express from 'express'
import morgan from 'morgan'
// import bodyParser from 'body-parser'
import Connection from './database/connection.database.js'
import router from './Routes/route.js'

const app = express()
const port = 3030
Connection()

app.use(morgan('tiny'))

app.use('/', router)

app.listen(port, () => console.log(`Express is listenning on ${port}`))
