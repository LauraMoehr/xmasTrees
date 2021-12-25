import express from 'express';
import mongoose from 'mongoose';
import {getAllTrees, getOneTree, postTree, updateTree, deleteTree} from './controllers/trees.controller.js'
import {getAllCategories, getOneCategory, postCategory, updateCategory, deleteCategory} from './controllers/categories.controller.js'

const server = express();

mongoose.connect('mongodb://localhost:27017/')

server.use(express.json())

server.get('/trees', getAllTrees)
server.get('/trees/:treeId', getOneTree)
server.post('/trees', postTree)
server.put('/trees/:treeId', updateTree)
server.delete('/trees/:treeId', deleteTree)

server.get('/categories', getAllCategories)
server.get('/categories/:categoryId', getOneCategory)
server.post('/categories', postCategory)
server.put('/categories/:categoryId', updateCategory)
server.delete('/categories/:categoryId', deleteCategory)

server.listen(3000, () => {
    console.log('Trees backend running here')
})
