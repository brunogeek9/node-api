const mongo = require('mongoose');
const Product = mongo.model('Product');

module.exports = {
    async index(req,res){
        const products = await Product.find();
        return res.json(products);
    },

    async show(req,res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async store(req,res){
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res){
        const product = awa
    },

    async destroy(req, res){

    }
};