var btnElement = document.querySelector('button');
var inputElement = document.querySelector('input');
var ulElement = document.getElementById("repos");
var username;

var populaUl = function (repos) {
    var liElement, liTextElement;
    ulElement.innerHTML = '';
    console.log(repos);
    var titleElement = document.querySelector('title');
    titleElement.innerHTML = `Repositórios de ${username}`;
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
    username = inputElement.value;
    ulElement.innerHTML = '';
    var liElement, liTextElement;
    liElement = document.createElement('li');
    liTextElement = document.createTextNode('Carregando...');
    liElement.appendChild(liTextElement);
    ulElement.appendChild(liElement);
    axios.get('https://api.github.com/users/' + username + '/repos')
        .then(function (response) {
            console.log(response);
            populaUl(response.data);
        })
        .catch(function (error) {
            mostraErro(error);
        });
}