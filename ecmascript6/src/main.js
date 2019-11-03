const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve("OK") }, 2000);
});

// minhaPromise()
//     .then( response => {
//         console.log(response);
//     })
//     .catch( err => {

//     });

//sempre deve ser envolto por uma função
// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise()); 
// }

// não se pode utilizar await fora de uma função async
// await executaPromise();
// executaPromise();

// functiona com arrowFunction também
const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
executaPromise();