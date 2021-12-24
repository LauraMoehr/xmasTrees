import mongoose from 'mongoose';

const dinoSchema = new mongoose.Schema({ //dino wird obj sein
    name: String, //datatype starting w/ capital letter
    type: String,
    // type: { // ...auch möglich
    //     required: true,
    //     type: String
    // },
    vegan: Boolean,
})

//Model starting with capital letter, erzeugt auf Basis des Schemas
const Dino = mongoose.model('Dino', dinoSchema)
//collection dino angelegt

export default Dino;