// EXERCÍCIOS DE INTERPRETAÇÃO
//Exercício 1

/*let a = 10                    // Variável let A recebe o valor 10
let b = 10                    // Variável let B recebe o valor 10

console.log(b)                // Console printa o valor B, no caso 10.

b = 5                         // b agora recebe o valor 5. Isso é possível por ser um variavel Let e não Const.
console.log(a, b)             // console printa o valor A e o valor B, (10,5)

// Exercício 2
let a = 10                    // Variável let A recebe o valor 10                  
let b = 20                    // Variável let B recebe o valor 20
let c                         // Declara a variável C, sem atribuir nenhum valor
c = a                         // C recebe A, logo C = 10
b = c                         // B recebe C, logo B =  10
a = b                         // A recebe B, logo A = 10

console.log(a, b, c)          // Console printa o valor das var A B C,(10,10,10)

// Exercício 3
let p = prompt("Quantas horas você trabalha por dia?") // Sugiro horasPorDiaTrabalhadas
let t = prompt("Quanto você recebe por dia?")          // Sugiro dinheiroPorDia
alert(`Voce recebe ${t/p} por hora`)                    
*/
// Escrita de código
// EXERCÍCIO 1
/*
let nome
let idade
console.log(typeof (nome));     // undefined
console.log(typeof (idade));    // undefined, como ainda não atribuimos valores a essas variaveis, ela considera como indefinida
nome = prompt ('Qual seu nome?');
idade = prompt('Qual sua idade?');
console.log(typeof (nome));      // string
console.log(typeof (idade));     // string, provavelmente quando você atribui algo com prompt, ele considera que você está escrevendo uma string independente do que seja.
console.log ('Olá ',nome, ', você tem ',idade,' anos.');
*/
// EXERCÍCIO 2
/*
let perguntaTres = 'Você está usando uma roupa azul hoje?';
let perguntaDois = 'Você está codando hoje?';
let perguntaUm = 'Você já jantou?';
let respostaUm
let respostaDois
let respostaTres

respostaUm = prompt(perguntaUm);
respostaDois = prompt (perguntaDois);
respostaTres = prompt (perguntaTres);
console.log(perguntaUm,' - ', respostaUm);
console.log(perguntaDois,' - ', respostaDois);
console.log(perguntaTres,' - ', respostaTres);
*/
/*
// Exercício 3
let a = 10
let b = 25
let c = 0

// Aqui faremos uma lógica para trocar os valores
c = b;
b = a;
a = c;

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
*/
// DESAFIO

let numeroUm = 0;
let numeroDois = 0;
let multiplicacao = 0;
let adicao = 0;

numeroUm = prompt ('Insira o primeiro número');
numeroDois = prompt ('Insira o segundo número');

numeroUm = Number(numeroUm)
numeroDois = Number(numeroDois)
multiplicacao = numeroUm * numeroDois;
adicao = numeroUm + numeroDois;
console.log ('O primeiro número somado ao segundo número resulta em:', adicao)
console.log ('O primeiro número multiplicado pelo segundo número resulta em:', multiplicacao)
