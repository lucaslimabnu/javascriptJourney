import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
  // assim que o componente é mostrado em tela, roda essa função
  // quando se utiliza um método do react, pode ser declarado como named-function
  componentDidMount() {
    this.loadProducts();
  }

  // quando o método é nosso, temos que fazer uma arrow function
  loadProducts = async () => {
    const response = await api.get('/products');

    console.log(response.data.docs);
  }

  render () {
    return <h1>Hello Rocketseat</h1>
  }
};