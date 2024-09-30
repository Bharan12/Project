import bookClassModel from '../model/bookClass.js'
import { BOOKCLASS_ENUM } from '../utils/constants.js'

const query = {
    lookupUsers: {
        from: "users",
        localField: "userId",
        foreignField: "id",
        as: "bookClassAuthor",
    },
    projectApprovedBookClass: {
        id: 1,
        name: 1,
        date: 1,
        timeSlot: 1,
        classType: 1,
        createdAt: 1,
        authorName: "$bookClassAuthor.name"
    },
    projectAllBookClass: {
        id: 1,
        name: 1,
        date: 1,
        timeSlot: 1,
        classType: 1,
        createdAt: 1,
        status:1,
        authorName: "$bookClassAuthor.name"
    }
}

const createBookClass = async (req, res) => {
    try {
        let { userId } = req.headers

        await bookClassModel.create({ ...req.body, userId })

        res.status(201).send({
            message: "Class Booked Successfuly"
        })

    } catch (error) {
        console.log(`Error occoured at ${req.originalUrl} - ${error}`)
        res.status(500).send({
            message: error.message || "Internal sever error", error
        })
    }
}

const getAllbookClass = async (req, res) => {
    try {
        let bookClass = await bookClassModel.aggregate([
            { $match: { status: BOOKCLASS_ENUM.APPROVED } },
            { $lookup: query.lookupUsers },
            { $unwind: "$bookClassAuthor" },
            { $project: query.projectAllBookClass}
        ])
        res.status(200).send({
            message: "Class info fetched Successfully",
            data: bookClass
        })

    } catch (error) {
        console.log(`Error occoured at ${req.originalUrl} - ${error}`)
        res.status(500).send({
            message: error.message || "Internal sever error", error
        })
    }
}

const getBookClassById = async (req, res) => {
    try {
        let { bookClassId } = req.params
        let bookClass = await bookClassModel.findOne({ id: bookClassId })
        res.status(201).send({
            message: "Class info fetched Successfully",
            data: bookClass
        })

    } catch (error) {
        console.log(`Error occoured at ${req.originalUrl} - ${error}`)
        res.status(500).send({
            message: error.message || "Internal sever error", error
        })
    }
}
//use for history
const getBookClassByUserId = async (req, res) => {
    try {
        let { userId } = req.headers
        let bookClasses = await bookClassModel.find({ userId })
        res.status(200).send({
            message: "Class info fetched Successfully",
            data: bookClasses
        })

    } catch (error) {
        console.log(`Error occoured at ${req.originalUrl} - ${error}`)
        res.status(500).send({
            message: error.message || "Internal sever error", error
        })
    }
}

//use for trainer
const getAllApprovedBookClass = async (req, res) => {
    try {
        let bookClass = await bookClassModel.aggregate([
            { $match: { status: BOOKCLASS_ENUM.APPROVED } },
            { $lookup: query.lookupUsers },
            { $unwind: "$bookClassAuthor" },
            { $project: query.projectApprovedBookClass},
            {$sort:{createdAt:-1}}
        ])

        res.status(200).send({
            message: "Class info fetched Successfully",
            data: bookClass
        })

    } catch (error) {
        console.log(`Error occoured at ${req.originalUrl} - ${error}`)
        res.status(500).send({
            message: error.message || "Internal sever error", error
        })
    }
}

const updateStatus = async (req, res) => {
    try {
        let { bookClassId } = req.params
        let { userId } = req.headers

        let bookClass = await bookClassModel.findOne({ id: bookClassId })

        if (bookClass) {

            bookClass.status = BOOKCLASS_ENUM[req.body.status] ?? BOOKCLASS_ENUM.PENDING
            bookClass.updatedBy = userId

            await bookClass.save()

            res.status(200).send({
                message: `Class status updated as ${BOOKCLASS_ENUM[req.body.status] ?? BOOKCLASS_ENUM.PENDING}`
            })

        } else {
            res.status(400).send({
                message: 'Ivalid BookClass iD'
            })

        }

    } catch (error) {
        console.log(`Error occoured at ${req.originalUrl} - ${error}`)
        res.status(500).send({
            message: error.message || "Internal sever error", error
        })
    }
}

export default {
    createBookClass,
    getAllbookClass,
    getBookClassById,
    getAllApprovedBookClass,
    updateStatus,
    getBookClassByUserId
}