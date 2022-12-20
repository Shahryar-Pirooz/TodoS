import { Task } from '../database/schemas.database.js'

export const addTask = (req, res) => {
    try {
        const { title } = req.body
        const newTask = new Task({ title })
        newTask.save()
    } catch (error) {
        console.log(error.message)
    }
}
