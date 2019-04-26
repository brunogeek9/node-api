const mongo = require('mongoose');
const ProductSchema = new mongo.Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    createAT:{
        type: Date,
        default: Date.now,
    },
});
    

mongo.model('Product', ProductSchema);