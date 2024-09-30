import express from 'express'
import bookClassController from '../controller/bookClass.js'
import verifyAuth from '../middleware/verifyAuth.js'
import verifyAdmin from '../middleware/verifyAdmin.js'

const router = express.Router()

router.post('/createBookClass', verifyAuth, bookClassController.createBookClass)
router.get('/getAllbookClass', verifyAuth, verifyAdmin, bookClassController.getAllbookClass)
router.get('/getBookClassById/:bookClassId', verifyAuth, bookClassController.getBookClassById)
router.get('/getAllApprovedBookClass', verifyAuth, bookClassController.getAllApprovedBookClass)
router.put('/updateStatus/:bookClassId', verifyAuth, verifyAdmin, bookClassController.updateStatus)
router.get('/getBookClassByUserId', verifyAuth, bookClassController.getBookClassByUserId)

export default router
