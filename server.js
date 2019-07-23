const express = require('express');
const app = express();
app.use(express.json());
const mongo = require("mongoose");
const cors = require('cors');
// app.use(cors);

//iniciando o mongo
mongo.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
);
require('./src/models/Product');

// const prod = mongo.model('Product');

app.use('/api', require("./src/routes")); 

app.listen(3001);


