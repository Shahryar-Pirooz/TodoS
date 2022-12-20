import { Schema, model } from 'mongoose'

const currentDate = new Date()
const taskSchema = new Schema({
    date: {
        type: String,
        default: `${currentDate.getMonth()} - ${currentDate.getDay()}`,
    },
    title: {
        type: String,
        required: true,
        default: false,
        maxLength: 50,
    },
    done: {
        type: Boolean,
        default: false,
    },
})

export const Task = model('Task', taskSchema)
