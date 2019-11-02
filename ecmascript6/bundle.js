"use strict";

var arr = [1, 3, 4, 5, 8, 10]; // o map percorre todo o vetor e executa a ação dentro de seu parâmetro
// pode retornar o value e a key

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // reduz todo o array para um único número

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // aplica uma regra para o vetor percorrido

var filter = arr.filter(function (item) {
  // sempre retorna um true ou false
  return item % 2 === 0;
});
console.log(filter); // busca um item que satisfaça a função e retorna ele

var find = arr.find(function (item, index) {
  return item === 4;
});
console.log(10);
