import { Task } from '../database/schemas.database.js'

export const getAll = async (req, res) => {
    try {
        const tasks = await Task.find({}).sort({ date: -1 })
        return res.status(200).json(tasks)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const getDone = async (req, res) => {
    try {
        const tasks = await Task.find({ done: true }).sort({ data: -1 })
        return res.status(200).json(tasks)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
