"use strict";

// // constantes não podem ser reatribuidas
// const a = 1;
// a = 3;
// // mas podem ter seus dados mutados (sem alterar a estrutura)
// const usuario = {
//     nome : "Lucas"
// };
// usuario.nome = "Lima";
// console.log(usuario);
function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y); // 10 4
  }

  console.log(x, y); // 10 2
} // console.log(y); tem o escopo diferente, então dá erro


teste(10);
