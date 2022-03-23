// LOOPS E ARRAYS

// Lenght == 5
// Indices == 4
var vogais = ["A", "E", "I", "O", "U"]

document.getElementById("for").addEventListener("click", () => {
    //                  4   <    5
    for (let i = 0; i < vogais.length; i++) {
        console.log("A vogal do array é = " + vogais[i])
    }
})

document.getElementById("while").addEventListener('click', () => {
    let i = 0;
    while (i < 5) {
        console.log("A vogal do array é = " + vogais[i])
        i++
    }
})




// ARRAY


var nomes = ["Fernando", "Lucas", "Clara", "Matheus", "Débora", "Marcelo"]
//nomes.push("Clodovil")
//nomes.pop()
//nomes.shift()
//nomes.unshift("Clodovil")
//nomes.indexOf("Matheus")
//nomes[nomes.lenght - 1]

console.log();


var objetos = [
    { nome: "Fernando", idade: 22 }, 
    { nome: "Lucas", idade: 18 }, 
    { nome: "Clara", idade: 29 }
]

for (let i = 0; i < objetos.length; i++) {
   console.log(objetos[i])
}