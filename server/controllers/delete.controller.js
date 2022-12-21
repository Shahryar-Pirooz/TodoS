import { Task } from '../database/schemas.database.js'
export const deleteTask = (req, res) => {
    try {
        const { id } = req.body
        Task.findOneAndRemove({ _id: id }, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Result :', result)
            }
        })
        return res.status(200).json(`${id} removed`)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
