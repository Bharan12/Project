import mongoose from "./index.js";
import validators from "../utils/validators.js";
import {BOOKCLASS_ENUM} from '../utils/constants.js'
import { generateUUID } from '../utils/helper.js'

const bookClassSchema = new mongoose.Schema({
    id: {
        type: String,
        default: function () {
            return generateUUID()
        }
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    date: {
        type: String,
        required: [true, "Date is required"]
    },
    timeSlot: {
        type: String,
        required: [true, "Time is required"]
    },
    classType: {
        type: String,
        required: [true, "Class Type is required"]
    },
    status: {
        type: String,
        enum: {
            values: Object.values(BOOKCLASS_ENUM),
            message: '{VALUE} is not supported'
        },
        default: BOOKCLASS_ENUM.PENDING
    },
    userId: {
        type: String,
        required: [true, "userID is required"]
    },
    updatedBy: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

}, {
    collection: 'bookClass',
    versionKey: false
})

export default mongoose.model('bookClass', bookClassSchema)