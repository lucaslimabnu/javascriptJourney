const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const products = await Product.find(); // o where pode ir aqui

    return res.json(products);
  }
}