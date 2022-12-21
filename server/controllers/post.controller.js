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

export const doneTask = async (req, res) => {
    const { id } = req.body
    Task.findOne({ _id: id }).then((data) => {
        const { _id, done, title } = data
        Task.findOneAndUpdate({ _id }, { done: done ? false : true })
            .then(() => res.status(200).json(`${title} done`))
            .catch(() => res.status(500).json('something is wrong'))
    })
}
