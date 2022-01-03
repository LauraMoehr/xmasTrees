import express from 'express';
import mongoose from 'mongoose';
import TreesRoutes from './routes/trees.routes.js';
import CategoriesRoutes from './routes/categories.routes.js';
import cors from 'cors';
import dotenv from 'dotenv'

//nur local, ohne Atlas:
//mongoose.connect('mongodb://localhost:27017/')

dotenv.config() //liest dotenv einmal aus

const dbUser = process.env.DB_USER // von Atlas
const dbPassword = process.env.DB_PASSWORD //ohne Anführungsstriche aus Atlas hier rein
const dbHost = process.env.DB_HOST //cluster name aus langem compy/paste
const dbName = process.env.DB_NAME //selbstgewählter Name
//const serverPort= ...

//neu: mit Atlas verbinden
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`)

const server = express();
server.use(express.json())

server.use(cors()) //cors muss vor den routes-functions stehen!

server.use(TreesRoutes)
server.use(CategoriesRoutes)

server.listen(4000, () => console.log('Trees backend running here'))
//unten im Terminal müssen beide localhosts parallel laufen!
