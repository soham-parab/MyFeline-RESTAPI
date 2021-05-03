const mongoose = require('mongoose')

const ProductsSchema = mongoose.Schema({
    name: String,
    description:[],
    images:[], 
    price: Number,
    rating: Number,
    total_ratings: Number,
    category: String,
    featured: Boolean,
    brand: String,
    stock: Boolean,
    quantity:Number,
    
})

module.exports = mongoose.model('Products',ProductsSchema)


