const { UserModel } = require('../../models/user')
const bcrypt = require('bcrypt');
const env = require('dotenv')
const jwt = require("jsonwebtoken")

env.config();

exports.signup = (req, res) => {
    const { firstName, lastName, email, password } = req.body
    try {
        bcrypt.hash(password, 6, async (err, hash_pass) => {
            if (err) {
                return res.status(400).json({
                    message: 'Something went wrong'
                })
            } else {
                const user = new UserModel({ firstName, lastName, email, password: hash_pass, username: Math.random().toString(), role: "admin" })
                await user.save();
                return res.status(201).json({
                    message: 'Admin created successfully'
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

exports.signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.find({ email })
        console.log(user)
        if (user.length > 0 && user[0].role === "admin") {
            bcrypt.compare(password, user[0].password, async (err, result) => {
                if (!result) {
                    console.log(err);
                    res.status(400).json({
                        message: "Something went wrong"
                    })
                } else {
                    let token = jwt.sign({ userID: user[0]._id, role: user[0].role }, process.env.SECRET, { expiresIn: '1h' });
                    const { _id, firstName, lastName, email, role } = user[0];
                    res.status(200).json({
                        message: "Login successful",
                        token,
                        user: {
                            _id,
                            firstName,
                            lastName,
                            email,
                            role
                        }
                    })
                }
            })
        } else {
            res.status(400).json({
                message: "Try another email"
            })
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            message: "Something went wrong"
        })
    }
}
