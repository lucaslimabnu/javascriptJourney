class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends List{
    constructor(){
        // sempre chamar o constructor da classe pai (recomendado)
        super();

        this.usuario = "Lucas";
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    minhaLista.add("Novo Todo");
}

minhaLista.mostraUsuario();