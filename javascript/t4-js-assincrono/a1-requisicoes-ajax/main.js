// declara classe de requisição
var xhr = new XMLHttpRequest();

// diz qual pagina vai abrir e com qual método
xhr.open('GET','https://api.github.com/users/lucaslimabnu');

// faz a requisição
xhr.send(null);

// Quando a função assíncrona mudar de estado, chama a função
xhr.onreadystatechange = function() {

    // 4 == retorno com sucesso
    if (xhr.readyState === 4){

        console.log(JSON.parse(xhr.responseText));

    }
}