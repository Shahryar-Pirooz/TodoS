import express from 'express'
import { getAll, getDone } from '../controllers/get.controller.js'
import { addTask, doneTask, editTask } from '../controllers/post.controller.js'
import { deleteTask } from '../controllers/delete.controller.js'
const router = express.Router()

router.get('/', getAll)
router.get('/done', getDone)
router.post('/', addTask)
router.post('/done', doneTask)
router.post('/edit', editTask)
router.delete('/', deleteTask)
export default router
