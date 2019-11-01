var btnElement = document.querySelector('button');
var inputElement = document.querySelector('input');
var ulElement = document.getElementById("repos");

var populaUl = function (repos) {
    var liElement, liTextElement;
    ulElement.innerHTML = '';
    console.log(repos);
    if (repos.length > 0) {
        for (rep of repos) {
            liElement = document.createElement('li');
            liTextElement = document.createTextNode(rep.full_name);

            liElement.appendChild(liTextElement);
            ulElement.appendChild(liElement);
        }

    } else {
        liElement = document.createElement('li');
        liTextElement = document.createTextNode('Este usuário não possui repositórios.');

        liElement.appendChild(liTextElement);
        ulElement.appendChild(liElement);
    }
}

//função de mostrar erro
var mostraErro = function (err) {
    liElement = document.createElement('li');
    liTextElement = document.createTextNode('Usuário não encontrado');

    liElement.appendChild(liTextElement);
    ulElement.appendChild(liElement);
}



btnElement.onclick = function () {
    var username = inputElement.value;
    axios.get('https://api.github.com/users/' + username + '/repos')
        .then(function (response) {
            console.log(response);
            populaUl(response.data);
        })
        .catch(function (error) {
            mostraErro(error);
        });
}