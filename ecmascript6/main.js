// REST

// funciona para objetos
const usuario = {
    nome:"Lucas",
    idade: 20,
    empresa: "SoftDevLucas"
}

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

// para vetores
const arr = [1, 2, 3, 4, 5];

const [a, b, ...c] = arr;

console.log(a, b, c);

// e para funções

function soma ( a, b,...params){
    // return params.reduce((total,next) => total + next);
    return params;
}

console.log(soma(1, 3, 4, 5, 6, 7));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
    nome: "Lucas",
    idade: 20,
    empresa: "SoftDevLucas",
};

const usuario2 = {...usuario1, nome: "Gabriel"};

console.log(usuario2);