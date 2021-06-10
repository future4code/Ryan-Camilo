//#Exercicios de interpretação
//#1
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
*/
// O código está incrementando o valor dentro de um loop, resultado final é 10
// 0+1+2+3+4+5.

//#2
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
        
	}
}
*/
//a. Console deve imprimir 19,21,23,25,27,30
//b. console.log(lista.indexOf(numero))

//#3
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: ")) //4
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = "" // string qlqr
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/
// Mostrará 10 asteriscos, separados em 1,2,3,4

//Escrita de Código
//#1
/*
let qnt = Number(prompt('Quantos bichos você tem?'))
let arrayPet = []
let novosPet = " "
if (qnt === 0){
    console.log('Adote um pet')
} else {
    for (let i=0; i<qnt; i++){
        novosPet = prompt('Qual nome dos seus pets?')
        arrayPet.push(novosPet)
    }
}
console.log(arrayPet)
*/

//#2
/*
//let arrayOri =[8,16,32,64,128,256,512,1024,333,555,123,321,3]
const arrayOri = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//a,b,c,d,e:   =P
let copiaArray = []
let stringArray = []
let maior = arrayOri[0]
let menor = arrayOri[0]
for (let numeros of arrayOri){
    console.log(`Elemento original: ${numeros} divido por 10: ${numeros/10}`)
    stringArray.push(`O elemento do índex ${arrayOri.indexOf(numeros)} é: ${numeros}`)
    if (numeros>maior){
        maior = numeros
    }
    if (numeros<menor){
        menor = numeros
    }
    if (numeros%2===0){
        copiaArray.push(numeros)
    }
}
console.log(copiaArray)
console.log(stringArray)
console.log(`Maior numero é ${maior} e o menor é ${menor}`)
*/
// DESAFIOS!
//#1 - ADIVINHA SÓ
/*
numeroTarget = Number(prompt(`Insira um número para ser advinhado`))
console.log(`Let's PLAY`)
let numTentativa = -1
let contador = 0
while (numeroTarget !== numTentativa){
    numTentativa = Number(prompt(`Tente adivinhar meu número!`))
    console.log (`O numero chutado foi ${numTentativa}`)
    if (numTentativa<numeroTarget){
        console.log(`Errrrrrou, é maior`)
    } else if (numTentativa>numeroTarget){
        console.log(`Errrrrrou, é menor`)
    } else if (numTentativa===numeroTarget){
        console.log(`Parabéns, é isso aí`)
    }
    contador += 1
}
console.log(`Você chutou ${contador} vezes`)
*/
//DESAFIO #2
numeroTarget = Math.floor(Math.random() * 101);  // Só troquei isso aqui basicamente
console.log(`Let's PLAY`)
let numTentativa = -1
let contador = 0
while (numeroTarget !== numTentativa){
    numTentativa = Number(prompt(`Tente adivinhar meu número!`))
    console.log (`O numero chutado foi ${numTentativa}`)
    if (numTentativa<numeroTarget){
        console.log(`Errrrrrou, é maior`)
    } else if (numTentativa>numeroTarget){
        console.log(`Errrrrrou, é menor`)
    } else if (numTentativa===numeroTarget){
        console.log(`Parabéns, é isso aí`)
    }
    contador += 1
}
console.log(`Você chutou ${contador} vezes`)
// Mais fácil impossível haha.
// Mas eu já havia usado esse metodo antes para testar códigos em outros exercícios anteriores
// Então já tinha utilizado https://www.w3schools.com/js/js_random.asp esse site para pesquisar justamente isso.