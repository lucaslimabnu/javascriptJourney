"use strict";

var arr = [1, 3, 4, 5, 8, 10]; // a função passada como parâmetro pode ser classificada como anônima
// const newArr = arr.map(function(item, index) {});
// quando a arrow function recebe somente um parametro, 
// pode-se remover os parênteses
// quando simplesmente retorna uma informação, pode-se somente colocar o resultado
// const newArr = arr.map( item => {
//     return item * 2;
// });

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); // não é recomendado

var teste = function teste() {
  return 'teste';
};

console.log(teste()); // para retornar um objeto, usa-se parenteses ao seu redor.
// pois as chaves do objeto podem ser identificadas como as do corpo da arrow function

var teste2 = function teste2() {
  return {
    nome: "Lucas"
  };
};

console.log(teste2());
