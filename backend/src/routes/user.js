const express = require('express');
const userRouter = express.Router();
const { signup } = require('../controller/user');


userRouter.post("/signin", (req, res) => {

})


userRouter.post("/signup", signup)

module.exports = { userRouter };