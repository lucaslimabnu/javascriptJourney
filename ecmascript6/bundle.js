"use strict";

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

console.log(soma(1)); // retorna um Not a Number

console.log(soma()); // retorna um Not a Number

var novaSoma = function novaSoma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(novaSoma(1)); // retorna um Not a Number

console.log(novaSoma()); // retorna um Not a Number
