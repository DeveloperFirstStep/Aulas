// TIPOS DE DADOS

var integer = 123;

var float = 123.456;

var string = "Fernando Peres Carvalho"

var boolean = true // false

/* console.log(integer);
console.log(float);
console.log(string);
console.log(boolean); */





// OPERADORES ARITIMETICOS

var soma = 1 + 1;

var sub1 = (10 - 1); // resultado = 9

var sub2 = (10 - 1 == 8 + 1); // resultado = true

var sub3 = ("9" == 9); // resultado = true

var sub4 = ("9" === 9); // resultado = false 


var mult = 2 * 3;

var div = 10 / 2;

var resto = 11 % 2;

/* 

    =   -> Atribuição de valor;
    ==  -> Comparação de valores (para saber se é igual);
    === -> Estritamente igual (igual 100%, ao pé da letra);
    !   -> Negação
    !=  -> NÃO igual
    !== -> Estritamente NÃO igual
    >   -> Maior que... 
    >=  -> Maior ou igual que...
    <   -> Menor que...
    <=  -> menor igual que...

*/

var maior = (2 > 3) // resultado = true
var maiorIgual = (3 >= 3) // resultado = true

var loucura = (!(3>=3 != 4<=4)) // resultado = ture






// Operadores Lógicos

/* 

    &&  == AND  == E
    ||  == OR   == OU
    !   == NOT  == NÃO

*/

var and =   (3 + 3 && 4 + 2);   // resultado = true

var or =    (3 + 3 || 5 + 2);   // resultado = ture

var nand =  (!(3 + 3 && 4 + 2));// resultado = false

var nor =   (!(3 + 3 || 5 + 2));// resultado = false


var loucura2 = (!(((3 >= 5 != 2 < 2) && (2 >= 2 == 3 >= 12)) || 2 >= 2 ));

console.log(loucura2);