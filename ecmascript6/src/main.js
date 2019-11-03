import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err){
            console.warn('Erro na api');
        }
    }
}

Api.getUserInfo('lucaslimabnu');
Api.getUserInfo('"');

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
umPorSegundo();

const doisPorSegundo = async  () => {
    await delay();
    console.log("1s d");
    console.log("1s d");
    await delay();
    console.log("2s d");
    console.log("2s d");
    await delay();
    console.log("3s d");
    console.log("3s d");
}
doisPorSegundo();