import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    category: String,
})

const Category = mongoose.model('Category', categorySchema)
console.log(Category)

export default Category;
