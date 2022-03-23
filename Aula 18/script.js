/* 
    DESAFIO:
        Carlos resolveu dar uma festa para seus amigos mais próximos, então, para facilitar, 
        Carlos nos enviou a lista e pediu para criarmos uma aplicação Web que o ajudasse no controle de 
        "confirmação de convidados".
*/

var convidados = [
    "Fernando", "Sarah", "Pedro Henrique",
    "Pedro Fernandes", "Matheus Silva", "Matheus Guilherme",
    "Isabela", "Gustavo", "Murilo",
    "Lucas", "João Pedro", "João Antônio",
    "Marcelo", "Débora"
]

/* 
O que o Carlos quer?
    Lista de pedidos do Carlos:
    ->  Quero uma aplicação Web que mostre a lista de convidados;
    ->  Do lado de cada nome quero um botão pra eu confirmar a presença quando a pessoa chegar e um botão pra "voltar" caso aperte errado;
    ->  Em baixo do nome quero escrito "A Confirmar", quando eu confirmar mude para "Confirmado" na cor verde. 
*/

var ulPai = document.querySelector('.ulLista');

convidados.map(element => {
    var lista = document.createElement('div');
    var divLista = document.createElement('div');
    var divButton = document.createElement('div');

    var item = document.createElement('li');
    var string = document.createElement('p');

    var confirm = document.createElement('button');
    var voltar = document.createElement('button');

    
    lista.setAttribute('class', 'lista');
    divLista.setAttribute('class', 'divLista');
    confirm.setAttribute('onclick', 'confirmar(this)');
    voltar.setAttribute('onclick','voltar(this)');
    string.setAttribute('class', 'string');

    lista.appendChild(divLista);
    lista.appendChild(string);

    divLista.appendChild(item);
    divLista.appendChild(divButton);

    divButton.appendChild(confirm);
    divButton.appendChild(voltar);

    ulPai.appendChild(lista);

    item.innerText = element

    string.innerText = "A Confirmar"
    string.style = "font-weight: bold"

    confirm.innerHTML = "Confirmar"
    voltar.innerHTML = "Voltar"
})


function confirmar(este) {
    este.parentElement.parentElement.children[0].style = "color: #5ead62";
    este.parentElement.parentElement.parentElement.children[1].innerText = "Confirmado";
}

function voltar(este) {
    este.parentElement.parentElement.children[0].style = "color: black";
    este.parentElement.parentElement.parentElement.children[1].innerText = "A Confirmar";
}

document.querySelector('.confirmAll').addEventListener('click', () => {
    let ul = document.querySelector('ul')
    for(element of ul.children){
        element.children[0].children[0].style = "color: #5ead62";
        element.children[1].innerHTML = "Confirmado";
    }
})

document.querySelector('.backAll').addEventListener('click', () => {
    let ul = document.querySelector('ul')
    for(element of ul.children){
        element.children[0].children[0].style = "color: black";
        element.children[1].innerHTML = "A Confirmar";
    }
})