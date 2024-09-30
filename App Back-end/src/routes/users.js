import express from 'express'
import usersController from '../controller/users.js'

const router = express.Router()

router.post('/createUser', usersController.createUser)
router.post('/login', usersController.login)

export default router