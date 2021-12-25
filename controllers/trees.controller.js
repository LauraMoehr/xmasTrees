import Tree from '../models/tree.model.js';

const getAllTrees = async (req, res) => {
    const trees= await Tree.find();
    res.json(trees)
}

const getOneTree = async (req, res) => {
    const treeId = req.params.treeId;
    const foundTree = await Tree.findById(treeId)
    res.json(foundTree)
}

const postTree = async (req, res) => {
    const tree = new Tree({
        name: req.body.name,
        price: req.body.price,
        isDecorated: req.body.isDecorated,
        tags: req.body.tags,
        contact: req.body.contact
    })
    try {
        const result = await tree.save()
        //res.json(result)
        res.json({message: 'Successfully added tree with id: ' + result._id, data: result,}) //?
    } catch (error) {
        res.json(error);
        }
}

const  updateTree = async (req, res) => {
    const treeId = req.params.treeId
    const tree = req.body; //name, breed, type, age....
    const result = await Tree.findByIdAndUpdate(treeId, tree, {returnDocument: 'after'})
    res.json(result)
}

const deleteTree = async (req, res) => {
    const treeId = req.params.treeId
    try {
        const result = await Tree.findByIdAndDelete(treeId)
        if (result) {
            res.json({status: 'Successfully deleted tree.'})
        } else {
            res.json({status: 'Could not delete tree.'})
        }
    } catch (error) {
        res.json({status: 'Something else happened.'})
        }
}

export {getAllTrees, getOneTree, postTree, updateTree, deleteTree }