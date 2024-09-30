import usersModel from "../model/users.js"
import auth from "../utils/auth.js"

const createUser = async (req, res) => {
    try {
        let user = await usersModel.findOne({ email: req.body.email })
        if (!user) {
            //hash the password
            req.body.password = await auth.hashData(req.body.password)
            await usersModel.create(req.body)
            res.status(201).send({ message: "User Created Successfully" })
        }
        else
            res.status(400).send({ message: `User with ${req.body.email} already exists!` })
    } catch (error) {
        console.log(`Error in ${req.originalUrl}`, error.message)
        res.status(500).send({ message: error.message || "Internal Server Error" })
    }
}

const login = async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await usersModel.findOne({ email: email })
        if (user) {
            //compare password
            if (await auth.compareHash(user.password, password)) {
                //create token
                const token = auth.createToken({
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    id: user.id
                })
                res.status(200).send({
                    message: "Login Successfull",
                    role: user.role,
                    token
                })
            }
            else {
                res.status(400).send({
                    message: "Incorrect Password"
                })
            }
        }
        else {
            res.status(400).send({
                message: `User with email ${req.body.email} does not exists`
            })
        }

    } catch (error) {
        console.log(`Error in ${req.originalUrl}`, error.message)
        res.status(500).send({ message: error.message || "Internal Server Error" })
    }
}

export default {
    createUser,
    login
}