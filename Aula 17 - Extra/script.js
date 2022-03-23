/* const pais = {
    nome: "Brasil",
    nacionalidade: "brasileiro",
    frase: function(){
        console.log(`Quem nasce no ${this.nome} é ${this.nacionalidade} !`);
    }
} */

//ERRADO
/* 
const pais = {
    nome: "Brasil",
    nacionalidade: "brasileiro",
    frase: () => {
        console.log(`Quem nasce no ${this.nome} é ${this.nacionalidade} !`);
    }
}
pais.frase();
*/


//Certo
const Pais = () => {
    this.nome = "Brasil";
    this.nacionalidade = "brasileiro";
    const frase = () => console.log(`Quem nasce no ${this.nome} é ${this.nacionalidade} !`);
    frase();
}

Pais()