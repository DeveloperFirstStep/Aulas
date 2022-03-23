//Condicional ternária -> Poucas vezes

var nome = "Fernando"
var nome2 = "Peres"
var nome3 = "Carvalho"

if(nome == "Fernando"){

    if(nome2 == "Peres"){

        if(nome3 == "Carvalho"){

            console.log("Nome Correto.");

        }else{

            console.log("Errado: Ultimo nome é Carvalho");

        }
    }else{

        console.log("Errado: Segundo nome é Peres");

    }
}else{

    console.log("Errado: Primeiro nome é Fernando");

}