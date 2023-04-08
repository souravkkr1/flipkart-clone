
const { UserModel } = require('../models/user')
const bcrypt = require('bcrypt');


exports.signup = (req, res) => {
    const { firstName, lastName, email, password } = req.body

    try {
        bcrypt.hash(password, 6, async (err, hash_pass) => {
            if (err) {
                return res.status(400).json({
                    message: 'Something went wrong'
                })
            } else {
                const user = new UserModel({ firstName, lastName, email, password: hash_pass, username: Math.random().toString() })
                await user.save();
                return res.status(201).json({
                    message: 'User created successfully'
                })

            }
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            message: "Something went wrong"
        })
    }
}