import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
  state = {
    products: [],
  }

  // assim que o componente é mostrado em tela, roda essa função
  // quando se utiliza um método do react, pode ser declarado como named-function
  componentDidMount() {
    this.loadProducts();
  }

  // quando o método é nosso, temos que fazer uma arrow function
  loadProducts = async () => {
    const response = await api.get('/products');

    this.setState({
      products: response.data.docs
    });
  }

  render () {
    const { products } = this.state

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href="">Acessar</a>
          </article>
        ))}
      </div>
    )
  }
};