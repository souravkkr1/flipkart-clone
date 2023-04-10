const express = require('express');
const adminRouter = express.Router();
const { signup, signin, requireSignin } = require('../../controller/admin/auth');


adminRouter.post("/admin/signin", signin)
adminRouter.post("/admin/signup", signup)

module.exports = { adminRouter };