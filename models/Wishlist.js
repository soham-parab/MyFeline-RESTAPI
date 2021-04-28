const mongoose = require('mongoose')

const WishlistSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
})

module.exports = mongoose.model('Wishlist',WishlistSchema)