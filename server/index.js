import express from 'express'
// import mongoose from 'mongoose'

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hi there'))

app.listen(port, () => console.log(`Express is listenning on ${port}`))
