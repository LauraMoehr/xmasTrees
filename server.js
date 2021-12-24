import express from 'express';
//import Dino from './models/dino.model.js'; //mit Dateiendung!
import mongoose from 'mongoose';
import {getAllDinos, getOneDino, postDino, updateDino, deleteDino} from './controllers/dinos.controller.js'

const server = express();
//mongoose, andere Art der API, andere Art, mit der Datenbank zu kommunizieren

// !!!!!!!!!       DO NOT COMMIT PASSWORDS TO PUBLIC REPOS        !!!!!!!!!!!!!!!
//Environment Variablen (process.env) npm dotenv

mongoose.connect('mongodb://localhost:27017/')
//connectionString könnte auch eigene Variable sein, die connect() aufruft


server.use(express.json())

//READ
server.get('/dinos', getAllDinos)

server.get('/dinos/:dinoId', getOneDino)

//CREATE
server.post('/dinos', postDino)

//UPDATE
server.put('/dinos/:dinoId', updateDino)
//PATCH  würde einzelne props updaten

//DELETE
server.delete('/dinos/:dinoId', deleteDino)

server.listen(3000, () => {
    console.log('Dinos running here')
})
