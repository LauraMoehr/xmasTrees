import Category from '../models/category.model.js';

const getAllCategories = async (req, res) => {
    const categories= await Category.find();
    res.json(categories)
}

const getOneCategory = async (req, res) => {
    const categoryId = req.params.categoryId;
    const foundCategory = await Category.findById(categoryId)
    res.json(foundCategory)
}

const postCategory = async (req, res) => {
    const category = new Category({
        category: req.body.category,
    })
    try {
        const result = await category.save()
        res.json({message: 'Successfully added category with id: ' + result._id, data: result,})
    } catch (error) {
        res.json(error);
        }
}

const  updateCategory = async (req, res) => {
    const categoryId = req.params.categoryId
    const category = req.body;
    const result = await Category.findByIdAndUpdate(categoryId, category, {returnDocument: 'after'})
    res.json(result)
}

const deleteCategory = async (req, res) => {
    const categoryId = req.params.categoryId
    try {
        const result = await Category.findByIdAndDelete(categoryId)
        if (result) {
            res.json({status: 'Successfully deleted category.'})
        } else {
            res.json({status: 'Could not delete category.'})
        }
    } catch (error) {
        res.json({status: 'Something else happened.'})
        }
}

export {getAllCategories, getOneCategory, postCategory, updateCategory, deleteCategory }