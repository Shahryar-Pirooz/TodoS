import { Task } from '../database/schemas.database'

export const deleteTask = (req, res) => {
    try {
        const id = req.body._id
        console.log(id)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
