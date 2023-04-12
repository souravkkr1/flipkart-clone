const express = require('express')
const { addCategory, getCategories } = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const categoryRouter = express.Router();

categoryRouter.post('/category/create', requireSignin, adminMiddleware, addCategory);
categoryRouter.get('/category/getcategory', getCategories);

module.exports = { categoryRouter };