// import mongoose from "./index.js";
// import validators from "../utils/validators.js";
// import { generateUUID } from '../utils/helper.js'

// const trainersSchema = new mongoose.Schema({
//     id: {
//         type: String,
//         default: function () {
//             return generateUUID()
//         }
//     },
//     name: {
//         type: String,
//         required: [true, "Name is required"]
//     },
//     image: {
//         type: String,
//         required: [true, "Img is required"]
//     },
//     description: {
//         type: String,
//         required: [true, "Description is required"]
//     },
//     status: {
//         type: Boolean,
//         default: true
//     },
//     userId: {
//         type: String,
//         required: [true, "userID is required"]
//     },
//     likedBy: {
//         type: Object,
//         required: []
//     },
//     approvedBy: {
//         type: String,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     }

// }, {
//     collection: 'trainers',
//     versionKey: false
// })

// export default mongoose.model('trainers', trainersSchema)