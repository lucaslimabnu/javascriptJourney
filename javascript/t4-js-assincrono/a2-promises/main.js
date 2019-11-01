// Promises são, traduzidas promessas, são códigos que não influenciam na linha do tempo do JS.
// Não há necessidade de se preocupar com o response, pois é uma promessa.

var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        // resolve == sucesso
        // reject == falha
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/lucaslimabnu');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4){     
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));        
                } else {
                    reject("Erro na requisição!");
                }
            }
        }

    });
}

var resultado = minhaPromise();
console.log(resultado); // Output: pending

minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })