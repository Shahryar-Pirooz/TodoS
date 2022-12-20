import express from 'express'
import { getAll } from '../controllers/get.controller.js'
import { addTask } from '../controllers/post.controller.js'
const router = express.Router()

router.get('/', getAll)
router.post('/', addTask)
export default router
