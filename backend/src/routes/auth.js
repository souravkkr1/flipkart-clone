const express = require('express');
const authRouter = express.Router();
const { signup, signin, requireSignin } = require('../controller/auth');


authRouter.post("/signin", signin)
authRouter.post("/signup", signup)

// authRouter.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: "profile" })
// })

module.exports = { authRouter };