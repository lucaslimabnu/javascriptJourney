"use strict";

var usuario = {
  nome: 'Lucas',
  idade: 20,
  endereco: {
    cidade: 'Blumenau',
    estado: 'SC'
  }
};
console.log(usuario); // const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;
//agora, utilizando desestruturação

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
