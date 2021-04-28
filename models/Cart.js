const mongoose = require('mongoose')

const CartSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
})

module.exports = mongoose.model('Cart',CartSchema)