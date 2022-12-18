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
    body: {
        type: String,
        maxLength: 150,
    },
    done: {
        type: Boolean,
        default: false,
    },
    subTask: [Schema.Types.ObjectId],
})

export const Task = model('Task', taskSchema)
