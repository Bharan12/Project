import express from 'express'
import userRoutes from './users.js'
import bookClassRoutes from './bookClass.js'

const router = express.Router()

router.use('/users',userRoutes)
router.use('/bookClass',bookClassRoutes)
router.get('*', (req, res) => res.send(`<div style="text-align:center"><h1>404 NOT FOUND</h1><p>The requested endpoint does not exists</p></div>`))

export default router


