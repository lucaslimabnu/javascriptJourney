const express = require('express'); // retorna uma função
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
requireDir('./src/models');

const Product = mongoose.model('Product');


// primeira rota 
app.get('/', (req, res) => {
  Product.create({
    title: "React native",
    description: 'build native apps with react',
    url: 'http://github.com/facebook/react-native'
  });
  
  return res.send("Hello World");
});

app.listen(3001);