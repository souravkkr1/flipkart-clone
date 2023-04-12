const slugify = require('slugify');
const { CategoryModel } = require('../models/category');


// Recurssive Function for Catgory Cluster

function createCategories(categories, parentId = null) {
    const categoryList = [];
    let category;
    if (parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined)
    } else {
        category = categories.filter(cat => cat.parentId == parentId)
    }

    category.forEach((cat) => {
        categoryList.push({
            _id: cat._id,
            name: cat.name,
            slug: cat.slug,
            children: createCategories(categories, cat._id)
        })
    })

    return categoryList;
}

// Add category 

exports.addCategory = async (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }
    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId;
    }
    try {
        const cat = new CategoryModel(categoryObj);
        await cat.save();
        res.status(201).json({ cat });
    }
    catch (err) {
        res.status(400).json({ err });
    }
}

// Get category

exports.getCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        const categoryList = createCategories(categories)
        res.status(200).json({ categoryList })
    }
    catch (err) {
        res.status(400).json({ err })
    }
}