import express from 'express';
import mongoose from 'mongoose';
import TreesRoutes from './routes/trees.routes.js';
import CategoriesRoutes from './routes/categories.routes.js';


mongoose.connect('mongodb://localhost:27017/')

const server = express();
server.use(express.json())

server.use(TreesRoutes)
server.use(CategoriesRoutes)

server.listen(3000, () => console.log('Trees backend running here'))
