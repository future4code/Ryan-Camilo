// PRIMEIRO EXERCÍCIO DE INTERPRETAÇÃO
/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)                       // FALSE (TRUE E FALSE É SEMPRE FALSE)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)                       // FALSE (TRUE E FALSE É SEMPRE FALSE)

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)                       // FALSE  (FALSE E FALSE É SEMPRE FALSE)

console.log("d. ", typeof resultado)                // BOOLEAN

*/

// SEGUNDO E TERCEIRO EXERCÍCIO DE INTERPRETAÇÃO
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)     // O PROBLEMA É QUE ELE NÃO TRANSFORMOU OS PROMPT QUE SAEM COMO STRING EM NÚMERO.
                      // LOGO O QUE O PROGRAMA ESTÁ FAZENDO É CONCATENANDO AS DUAS STRING
                     // PARA UMA OPERAÇÃO ARITMÉTICA É NECESSÁRIO 2 NUMBER.
                     // SERÁ IMPRESSO STRINGA+STRINGB JUNTAS SEM ESPAÇO.
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// NUMERO UNO
/*
let idadeUsuario = Number(prompt('Qual sua idade?'));
let idadeMelhorAmigo = Number(prompt('Qual a idade do seu melhor amigo?'));
const checarIdade = idadeUsuario > idadeMelhorAmigo;
let diferencaIdade = idadeUsuario - idadeMelhorAmigo;
console.log('Sua idade é maior do que a do seu melhor amigo?',checarIdade)
console.log (diferencaIdade)

*/
// NUMERO DOS
/*
let numeroPar = Number(prompt('Insira um número par!'))
console.log(numeroPar%2);   // Todo número par é divisivel por dois. Ou seja, resto 0.
// SE A PESSOA COLOCAR UM NUMERO IMPAR, O RESTO NÃO SERÁ 0(será 1), PORTANTO NÃO É PAR.
*/

// NUMERO TRES
/*
let idadeAnos = Number(prompt('Quantos anos você tem meu chapa?'))
let meses = Number(idadeAnos*12);
console.log ('Você tem ',meses, 'meses de idade')
let dias = Number(idadeAnos*365);
console.log ('Você tem ',dias, 'dias de idade')
let horas = Number(idadeAnos*365*24)
console.log ('Você tem ',horas, 'horas de idade')
*/
// NUMERO CUATRO
//
/*
let numeroUm = Number(prompt('Me fala um número'))
let numeroDois = Number(prompt('Me fala um segundo número'))

const resultadoMaior = numeroUm > numeroDois
console.log ('O primeiro número é maior que o segundo?',resultadoMaior)
const resultadoIgual = numeroUm == numeroDois
console.log ('O primeiro número é igual ao segundo?', resultadoIgual)
const resultadoDivisivelUm = (numeroUm % numeroDois) == 0;
console.log ('O primeiro número é divisível pelo segundo?',resultadoDivisivelUm)
const resultadoDivisivelDois = (numeroDois % numeroUm) == 0;
console.log ('O segundo número é divisível pelo primeiro?',resultadoDivisivelDois)
// Estranho no enunciado o primeiro ser divisivel pelo segundo E AO MESMO TEMPO é verdadeiro o contrário
*/

// DESAFIO ON FIRE
// SEM USAR FUNCÃO!
/*
let grausC = 80;
let grausF = 77;

let fireToKelvin = parseFloat((grausF - 32)*(5/9) + 273.15)
let celsiusToFire = parseFloat((grausC)*(9/5) + 32)


console.log ('77ºF  é',fireToKelvin,'Kelvin')
console.log ('80ºC  é',celsiusToFire,'ºF')

grausC = 30
celsiusToFire = ((grausC)*(9/5) + 32)
fireToKelvin = ((celsiusToFire - 32)*(5/9) + 273.15)
console.log ('30 ºC é:',celsiusToFire,' ºF e ', fireToKelvin,' K')

let usuarioCelsius = Number(prompt('Insira uma temperatura em Celsius'));
celsiusToFire = ((usuarioCelsius)*(9/5) + 32)
fireToKelvin = ((celsiusToFire - 32)*(5/9) + 273.15)
console.log (usuarioCelsius,' ºC é:',celsiusToFire,' ºF e ', fireToKelvin,' K')
*/

// KILOWATT-HORA
// NÃO TENHO CERTEZA SE FOI ISSO QUE FOI PEDIDO.
/*
let pagamento = 280*0.05
console.log ('A residencia que consome 280 kwH, pagará:',pagamento, 'reais')
let desconto = 0.15
let pagamentoDesconto = pagamento*(1-desconto)
console.log ('Com desconto pagará:',pagamentoDesconto, 'reais')
*/

// CONVERSÃO
/*
let lb = 20;
let kilograma = (lb / 2.205)
console.log (lb,'lb equivalem a ',kilograma,'kg');

let oz = 10.5;
let kilograma2 = (oz / 35.274)
console.log (oz,'oz equivalem a ',kilograma2,'kg');

let mi = 100
let metro = (mi * 1609.34)
console.log (mi,'milha equivalem a ',metro,'m');

let ft = 50
let metro2 = (ft / 3.281)
console.log (ft,'pés equivalem a ',metro2,'m');

let galao = 103.56
let litro = (galao * 3.785)
console.log (galao,'galão equivalem a ',litro,'litros');

let xicara = 450
let litro2 = (xicara * (6/25))
console.log (xicara,'xícara equivalem a ',litro2,'litros');

let xicaraUsuario = Number(prompt('Escreve a quantidade de xicaras que deseja converter'))
let litroUsuario = (xicaraUsuario * (6/25))
console.log (xicaraUsuario,'xícara equivalem a ',litroUsuario,'litros');
*/
// FINISH LINE









