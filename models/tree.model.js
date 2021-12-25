import mongoose from 'mongoose';

const treeSchema = new mongoose.Schema({
    name: String,
    price: Number,
    isDecorated: Boolean,
    //size: ??,
    tags: String,
    contact: String
})

const Tree = mongoose.model('Tree', treeSchema)

export default Tree;
