// INICIO: SEÇÃO DE SOMA

var somaNum1 = document.getElementById("somaNum1"); //INPUT DE NUMBER
var somaNum2 = document.getElementById("somaNum2"); //INPUT DE NUMBER
var somaCalc = document.getElementById("somaCalc"); //BUTTON DE CALCULAR
var somaClear = document.getElementById("somaClear"); //BUTTON DE LIMPAR
var somaResult = document.getElementById("somaResult"); //P DO RESULTADO

somaCalc.addEventListener('click', () => {
    if (somaNum1.value != "" && somaNum2.value != "") {
        let result = parseInt(somaNum1.value) + parseInt(somaNum2.value);
        somaResult.innerText = "Resultado: " + result + ` (${somaNum1.value} + ${somaNum2.value})`;
        somaNum1.value = ""
        somaNum2.value = ""
    }else{
        alert("É necessário os dois campos estarem preenchidos para efetuar a operação.")
    }
})

somaClear.addEventListener('click', () => {
    if(somaResult.innerText == "Resultado:"){
        alert("Não existe nenhum resultado a mostra para ser limpo")
    }else{
        somaResult.innerText = "Resultado:"
    }
})

// FINAL: SEÇÃO DE SOMA

// INICIO: SEÇÃO DE SUBTRAÇÃO

var subNum1 = document.getElementById("subNum1"); //INPUT DE NUMBER
var subNum2 = document.getElementById("subNum2"); //INPUT DE NUMBER
var subCalc = document.getElementById("subCalc"); //BUTTON DE CALCULAR
var subClear = document.getElementById("subClear"); //BUTTON DE LIMPAR
var subResult = document.getElementById("subResult"); //P DO RESULTADO

subCalc.addEventListener('click', () => {
    if (subNum1.value != "" && subNum2.value != "") {
        let result = parseInt(subNum1.value) - parseInt(subNum2.value);
        subResult.innerText = "Resultado: " + result + ` (${subNum1.value} - ${subNum2.value})`;
        subNum1.value = ""
        subNum2.value = ""
    }else{
        alert("É necessário os dois campos estarem preenchidos para efetuar a operação.")
    }
})

subClear.addEventListener('click', () => {
    if(subResult.innerText == "Resultado:"){
        alert("Não existe nenhum resultado a mostra para ser limpo")
    }else{
        subResult.innerText = "Resultado:"
    }
})

// FINAL: SEÇÃO DE SUBTRAÇÃO

// INICIO: SEÇÃO DE MULTIPLICAÇÃO

var multiNum1 = document.getElementById("multiNum1"); //INPUT DE NUMBER
var multiNum2 = document.getElementById("multiNum2"); //INPUT DE NUMBER
var multiCalc = document.getElementById("multiCalc"); //BUTTON DE CALCULAR
var multiClear = document.getElementById("multiClear"); //BUTTON DE LIMPAR
var multiResult = document.getElementById("multiResult"); //P DO RESULTADO

multiCalc.addEventListener('click', () => {
    if (multiNum1.value != "" && multiNum2.value != "") {
        let result = parseInt(multiNum1.value) * parseInt(multiNum2.value);
        multiResult.innerText = "Resultado: " + result + ` (${multiNum1.value} x ${multiNum2.value})`;
        multiNum1.value = ""
        multiNum2.value = ""
    }else{
        alert("É necessário os dois campos estarem preenchidos para efetuar a operação.")
    }
})

multiClear.addEventListener('click', () => {
    if(multiResult.innerText == "Resultado:"){
        alert("Não existe nenhum resultado a mostra para ser limpo")
    }else{
        multiResult.innerText = "Resultado:"
    }
})

// FINAL: SEÇÃO DE MULTIPLICAÇÃO

// INICIO: SEÇÃO DE DIVISÃO

var divNum1 = document.getElementById("divNum1"); //INPUT DE NUMBER
var divNum2 = document.getElementById("divNum2"); //INPUT DE NUMBER
var divCalc = document.getElementById("divCalc"); //BUTTON DE CALCULAR
var divClear = document.getElementById("divClear"); //BUTTON DE LIMPAR
var divResult = document.getElementById("divResult"); //P DO RESULTADO

divCalc.addEventListener('click', () => {
    if (divNum1.value != "" && divNum2.value != "") {
        let result = parseInt(divNum1.value) / parseInt(divNum2.value);
        divResult.innerText = "Resultado: " + result + ` (${divNum1.value} / ${divNum2.value})`;
        divNum1.value = ""
        divNum2.value = ""
    }else{
        alert("É necessário os dois campos estarem preenchidos para efetuar a operação.")
    }
})

divClear.addEventListener('click', () => {
    if(divResult.innerText == "Resultado:"){
        alert("Não existe nenhum resultado a mostra para ser limpo")
    }else{
        divResult.innerText = "Resultado:"
    }
})

// FINAL: SEÇÃO DE DIVISÃO

// INICIO: SEÇÃO DE LOGARITIMO NATURAL

var logNum1 = document.getElementById("logNum1"); //INPUT DE NUMBER
var logCalc = document.getElementById("logCalc"); //BUTTON DE CALCULAR
var logClear = document.getElementById("logClear"); //BUTTON DE LIMPAR
var logResult = document.getElementById("logResult"); //P DO RESULTADO

logCalc.addEventListener('click', () => {
    if (logNum1.value != "") {
        let numero = parseInt(logNum1.value)
        let result = Math.log(numero);
        logResult.innerText = "Resultado: " + result + ` (Log de ${numero})`;
        logNum1.value = ""
    }else{
        alert("É necessário o campo estar preenchido para efetuar a operação.")
    }
})

logClear.addEventListener('click', () => {
    if(logResult.innerText == "Resultado:"){
        alert("Não existe nenhum resultado a mostra para ser limpo")
    }else{
        logResult.innerText = "Resultado:"
    }
})

// FINAL: SEÇÃO DE LOGARITIMO NATURAL