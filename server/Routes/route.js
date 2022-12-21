import express from 'express'
import { getAll } from '../controllers/get.controller.js'
import { addTask, doneTask } from '../controllers/post.controller.js'
import { deleteTask } from '../controllers/delete.controller.js'
const router = express.Router()

router.get('/', getAll)
router.post('/', addTask)
router.post('/done', doneTask)
router.delete('/', deleteTask)
export default router
