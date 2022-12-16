import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const Connection = () => {
    const url = process.env.MONGODB_URL
    mongoose.set('strictQuery', false)
    mongoose.connect(url)
    mongoose.connection.on('connected', () =>
        console.log('Database connected Successfully')
    )
    mongoose.connection.on('disconnected', () =>
        console.log('Database disconnected')
    )
    mongoose.connection.on('error', () =>
        console.log('Error while connecting with the database')
    )
}

export default Connection
