axios.get('https://api.github.com/users/lucaslimabnu')
    .then(function(response){
        // axios já retorna os dados como JSON
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })