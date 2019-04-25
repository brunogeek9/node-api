const express = require('express');
const app = express();
const mongo = require("mongoose");
const prod = mongo.model('Product');

app.get('/', (req,res) => {
    prod.create
    res.send("jamelao da massa");

});
//iniciando o mongo
mongo.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
);
require('./src/models/Products');
app.listen(3001);

