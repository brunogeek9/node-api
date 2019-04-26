const mongo = require('mongoose');
const paginate = require('mongoose-paginate');

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
    
ProductSchema.plugin(paginate);

mongo.model('Product', ProductSchema);