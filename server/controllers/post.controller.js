import { Task } from '../database/schemas.database.js'

export const addTask = (req, res) => {
    try {
        const { title } = req.body
        const newTask = new Task({ title })
        newTask.save()
        return res.status(200).json(`${newTask} saved`)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
