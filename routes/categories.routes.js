import express from 'express';
import {getAllCategories, getOneCategory, postCategory, updateCategory, deleteCategory} from '../controllers/categories.controller.js'

const router = express.Router();

router.get('/categories', getAllCategories)
router.get('/categories/:categoryId', getOneCategory)
router.post('/categories', postCategory)
router.put('/categories/:categoryId', updateCategory)
router.delete('/categories/:categoryId', deleteCategory)

export default router //drüben CategoriesRoutes