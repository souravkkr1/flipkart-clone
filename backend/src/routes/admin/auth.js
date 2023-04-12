const express = require('express');
const adminRouter = express.Router();
const { signup, signin } = require('../../controller/admin/auth');
const { validateSignupRequest, isReuestValidated, validateSigninRequest } = require('../../validators/auth');


adminRouter.post("/admin/signin", validateSigninRequest, isReuestValidated, signin)
adminRouter.post("/admin/signup", validateSignupRequest, isReuestValidated, signup)

module.exports = { adminRouter };