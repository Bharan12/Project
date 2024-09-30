import mongoose from "./index.js";
import validators from "../utils/validators.js";
import { generateUUID } from '../utils/helper.js'
import {ROLE_ENUM} from '../utils/constants.js'

const usersSchema = new mongoose.Schema({
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
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: validators.validateEmail,
            message: props => `${props.value} is not a valid email!`
        }
    },
    mobile: {
        type: String,
        required: [true, "Mobile is required"],
        validate: {
            validator: validators.validateMobile,
            message: props => `${props.value} is not a valid mobile number!`
        }
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: {
            values: Object.values(ROLE_ENUM),
            message: '{VALUE} is not supported'
        },
        default: ROLE_ENUM.USER
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

}, {
    collection: 'users',
    versionKey: false
})

export default mongoose.model('users', usersSchema)