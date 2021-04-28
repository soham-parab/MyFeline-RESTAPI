const mongoose = require('mongoose')

const ProductsSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
})

module.exports = mongoose.model('Products',ProductsSchema)