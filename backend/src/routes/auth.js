const express = require('express');
const authRouter = express.Router();
const { signup, signin, requireSignin } = require('../controller/auth');
const { validateRequest, isReuestValidated, validateSigninRequest, validateSignupRequest } = require('../validators/auth');

authRouter.post("/signup", validateSignupRequest, isReuestValidated, signup)
authRouter.post("/signin", validateSigninRequest, isReuestValidated, signin);

// authRouter.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: "profile" })
// })

module.exports = { authRouter };