import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
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
