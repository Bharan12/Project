// import trainersModel from '../model/trainer.js'

// const createTrainer = async (req, res) => {
//     try {
//         let userId = req.headers.userId

//         await trainersModel.create(req.body)

//         res.status(200).send({
//             message:"Trainer Created Successfuly"
//         })

//     } catch (error) {
//         console.log(`Error occoured at ${req.originalUrl} - ${error}`)
//         res.status(500).send({
//             message: error.message || "Internal sever error", error
//         })
//     }
// }

// const getAllTrainers = async (req, res) => {
//     try {

//     } catch (error) {
//         console.log(`Error occoured at ${req.originalUrl} - ${error}`)
//         res.status(500).send({
//             message: error.message || "Internal sever error", error
//         })
//     }
// }

// const getTrainerById = async (req, res) => {
//     try {

//     } catch (error) {
//         console.log(`Error occoured at ${req.originalUrl} - ${error}`)
//         res.status(500).send({
//             message: error.message || "Internal sever error", error
//         })
//     }
// }

// const getAllApprovedTrainers = async (req, res) => {
//     try {

//     } catch (error) {
//         console.log(`Error occoured at ${req.originalUrl} - ${error}`)
//         res.status(500).send({
//             message: error.message || "Internal sever error", error
//         })
//     }
// }

// //use this for class booking
// const updateStatus = async (req, res) => {
//     try {

//     } catch (error) {
//         console.log(`Error occoured at ${req.originalUrl} - ${error}`)
//         res.status(500).send({
//             message: error.message || "Internal sever error", error
//         })
//     }
// }

// export default {
//     createTrainer,
//     getAllTrainers,
//     getTrainerById,
//     getAllApprovedTrainers,
//     updateStatus
// }