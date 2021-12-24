import Dino from '../models/dino.model.js';

const getAllDinos = async (req, res) => {
    const dinos= await Dino.find();
    res.json(dinos)
}

const getOneDino = async (req, res) => {
    const dinoId = req.params.dinoId; //id wird im Hintergrund von mongoose erledigt und zu "_id"
    const foundDino = await Dino.findById(dinoId) //Mongoose-version, gegenüber der bisherigen low-level version
    res.json(foundDino)
}

const postDino = async (req, res) => {
    const dinosaur = new Dino({
        name: req.body.name,
        type: req.body.type,
        vegan: req.body.vegan
    })
    try {
        const result = await dinosaur.save()
        //res.json(result)
        res.json({message: 'Successfully added dino with id: ' + result._id, data: result,}) //?
    } catch (error) {
        res.json(error);
        }
}

const  updateDino = async (req, res) => { //in POstman id oben in Pfad angeben, nicht im bodypart
    const dinoId = req.params.dinoId
    const dino = req.body; //name, breed, type, age....
    const result = await Dino.findByIdAndUpdate(dinoId, dino, {returnDocument: 'after'}) //3.parameter query options: wird alte/ neue Version in Postman angezeigt?
    res.json(result) // "returnDocument: 'after'" entspricht "new: true"
}

const deleteDino = async (req, res) => {
    const dinoId = req.params.dinoId
    try {
        const result = await Dino.findByIdAndDelete(dinoId)
        if (result) {
            res.json({status: 'Successfully deleted dino.'}) //möglich, auch noch "success: true" hinzuzufügen
            //res.json('Successfully deleted dino.') //geht auch als string, aber json eigentlich immer objects
        } else {
            res.json({status: 'Could not delete dino.'})
        }
    } catch (error) {
        res.json({status: 'Something else happened.'})
        }
}

export {getAllDinos, getOneDino, postDino, updateDino, deleteDino }