const usuario = {
    nome: 'Lucas',
    idade : 20,
    endereco : {
        cidade: 'Blumenau',
        estado: 'SC',
    },
};

console.log(usuario);

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

//agora, utilizando desestruturação
const { nome, idade, endereco : {cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);


function mostraNome( { nome, idade } ){
    console.log(nome, idade);
}

mostraNome(usuario);