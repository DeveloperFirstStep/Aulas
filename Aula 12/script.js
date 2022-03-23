// TIPOS DE VARIÁVEIS


/* 

    var     = VARIÁVEIS (Os valores podem ser alterados em qualquer lugar e momento do código / Pode usar em qualquer lugar do código);
    const   = CONSTANTES (Não podem ser alteradas ao longo do código, são valores fixos / Pode usar em qualquer lugar do código);
    let     = VARIÁVEIS-VIDA-CURTA (Só podem ser alteradas dentro de onde são chamadas e no seus "filhos"  / Não usar em qualquer lugar do código);

*/

var numero = 12;
const nome = "Fernando Peres Carvalho"
let local = 55;

frango();
batatinha();

function frango () {
    let numeroFrango = "Varíavel LET Frango";
}

function batatinha () {
    //console.log(numeroFrango);
}


function resultado () {
    let result = soma(10,10); // == 20
    let somaFinal = result + 30;
    console.log(somaFinal);
}

function soma (numero1, numero2) {
    let result = numero1 + numero2;
    return result
}
