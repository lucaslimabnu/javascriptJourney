const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    // o where pode ir aqui no find
    const products = await Product.find(); 

    return res.json(products);
  },

  async show (req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body);
    
    return res.json(product);
  },
  
  async update(req, res) {
    // caso eu queira salvar em product o ANTIGO, não usar o new: true
    // caso eu queira salvar em product o ATUALIZADO, usar o new: true
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(product);
    
  },
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    // retorna sucesso sem conteúdo
    return res.send();

  },
}