// AULA 13 - PARTE 1

var titulo = document.getElementById("titulo")
var button = document.querySelector("#button")

button.addEventListener('click', () => {
    if (titulo.style.color == "red") {
        titulo.style.color = "black"
        titulo.innerText = "Agora estou preto"
    } else {
        titulo.style.color = "red"
        titulo.innerText = "Agora estou vermelho"
    }
})

// AULA 14 - PARTE 2

// Declarando os inputs e os botões;

var somaCalc = document.querySelector("#somaCalc");
var somaClear = document.querySelector("#somaClear");
var somaResult = document.querySelector("#somaResult");
var somaNum1 = document.querySelector("#somaNum1");
var somaNum2 = document.querySelector("#somaNum2");

// Parte lógica da Soma...
// Botão de somar e mostrar o resultado
somaCalc.addEventListener('click', () => {
     if (somaNum1.value && somaNum2.value) {
        let result = Math.round(somaNum1.value) + Math.round(somaNum2.value)
        somaResult.innerText = "Resultado: " + result
    } else {
        alert("Os campos de soma precisam ser preenchidos para calcular.")
        somaNum1.value = ""
        somaNum2.value = ""
        somaResult.innerHTML = "Resultado:"
    } 
})

// Botão de limpar o resultado e os inputs
somaClear.addEventListener('click', () => {
    somaNum1.value = ""
    somaNum2.value = ""
    somaResult.innerHTML = "Resultado:"
})
