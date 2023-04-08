const express = require('express');
const authRouter = express.Router();
const { signup, signin } = require('../controller/auth');


authRouter.post("/signin", signin)


authRouter.post("/signup", signup)

module.exports = { authRouter };