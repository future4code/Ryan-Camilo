// EXERCÍCIOS DE INTERPRETAÇÃO
// EXERCÍCIO 1
/*
let array
console.log('a. ', array)    // Como não definiu que a variável array é uma array em si, provavelmente vai dar indefinido
// a. undefined
array = null
console.log('b. ', array)    // Agora definiu que a variavel array é null, ou seja, está vazia.
// b. null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] // Alimentando a variável array com os numeros em diferentes "casas"
console.log('c. ', array.length) // Mostrando a quantidade de "casas" que temos, provavelmente mostrará 11 casas
//c. 11
let i = 0
console.log('d. ', array[i]) // Mostrará o número 3
//d. 3
array[i+1] = 19
console.log('e. ', array) // Substituirá o número 4 por 19
//e. [3,19,5,6...]
const valor = array[i+6]  // Valor recebe 9 (Casa 0+6)
console.log('f. ', valor) // Valor = 9
//f. 9
*/

// EXERCÍCIO DOIS
/*
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
*/
// PROGRAMA JOGA A FRASE TODA PRA "CAPS LOCK" E SUBSTITUI TODA LETRA A PELA LETRA I
// E DEPOIS MOSTRA QUANTAS LETRAS TEM SUA FRASE
// "Subi num ônibus em Marrocos" = SUBI NUM ÔNIBUS EM MIRROCOS 27
//EXERCÍCIO DE ESCRITA DE CÓDIGO
// EXERCÍCIO UM
/*
const emailDoUsuario = prompt('Digite seu email')
const nomeDoUsuario = prompt('Digite seu nome')

console.log ('O e-mail',emailDoUsuario.trim(),'foi cadastrado com sucesso. Seja bem-vinda(o), '+nomeDoUsuario.trim()+'!')

*/
// Exercício DOIS
/*
const comidas = ['arroz','feijao','bife','macarrao','batata']
console.log (comidas)
console.log ('Essas são minhas comidas preferidas: \n 1.',comidas[0],'\n 2.',comidas[1],'\n 3.',comidas[2],'\n 4.',comidas[3],'\n 5.',comidas[4])
comidas[1] = prompt('Qual sua comida preferida?')
console.log (comidas)
*/
// EXERCÍCIO TRÊS
/*
let listaDeTarefas  = []
listaDeTarefas[0] = prompt('Tarefa do dia - 0')
listaDeTarefas[1] = prompt('Tarefa do dia - 1')
listaDeTarefas[2] = prompt('Tarefa do dia - 2')
console.log(listaDeTarefas)
let indiceTarefa = prompt('Qual indice da tarefa realizada?')
listaDeTarefas.splice(indiceTarefa,1)
console.log(listaDeTarefas)
*/
// Desafio
// #1
/*
let inputFrase = prompt('Escreva uma frase!')
let array = []
array = inputFrase.split(` `)
console.log(array)
*/
// #2
/*
frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log (frutas)
console.log(`${frutas.indexOf("Abacaxi")} de ${frutas.length}`)
*/
