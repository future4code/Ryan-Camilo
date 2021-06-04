// EXERCÍCIO 1
/*
    function minhaFuncao(variavel) { 
        return variavel * 5
    }
//------ a)
    console.log(minhaFuncao(2))    // Retornaria 10 
    console.log(minhaFuncao(10))   // Retornaria 50
//------ b)
    // Não apareceria nada no console porque você não ta chamando a funcao

// EXERCÍCIO 2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura") 
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//------- a)
// Retorna true se houver a palavra cenoura no texto.
//------- b)
// i. true ii. true iii. true
*/
// Exercícios de escrita de código
// EXERCÍCIO 1
// 
/*
const fraseTres = () => {
    console.log('Eu sou Ryan, tenho 27 anos, moro em Campos dos Goytacazes e sou Professor de Inglês.')
}
fraseTres()

const fraseQuatro = (nomeUsuario,idadeUsuario,cidadeUsuario,profUsuario) =>{
    console.log(`Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${profUsuario}`)
}

fraseQuatro("Ryan",27,"Campos dos Goytacazes","Professor de Inglês")

// Exercícios 2
const numeroSoma = (numeroA,numeroB)=>{
    return numeroA+numeroB
}

const calcMaior = (numeroA,numeroB)=>{
    return numeroA>numeroB
}

const parOuNao = (numeroA)=>{
    return numeroA%2===0
}
const tamanhoMensagem = (fraseTeste)=>{
    return console.log(`Tamanho da frase:${fraseTeste.length} letras e ${fraseTeste.toUpperCase()}`)
}
console.log(numeroSoma(2,3))
console.log(calcMaior(2,3))
console.log(parOuNao(124))
console.log(tamanhoMensagem(`O rato roeu a roupa do rei de roma`))

// Exercícios 3
const calcSoma = (numberA,numberB) => numberA+numberB
const calcSub = (numberA,numberB) => numberA-numberB
const calcMult = (numberA,numberB) => numberA*numberB
const calcDivisao = (numberA,numberB) => numberA/numberB

let primeiroNumeroUsuario = Number(prompt(`Insira o primeiro número`))
let segundoNumeroUsuario = Number(prompt(`Insira o segundo número`))
console.log(`Numeros Inseridos: ${primeiroNumeroUsuario} e ${segundoNumeroUsuario} \n Soma:${calcSoma(primeiroNumeroUsuario,segundoNumeroUsuario)} \n Diferença: ${calcSub(primeiroNumeroUsuario,segundoNumeroUsuario)} \n Multiplicação: ${calcMult(primeiroNumeroUsuario,segundoNumeroUsuario)} \n Divisão: ${calcDivisao(primeiroNumeroUsuario,segundoNumeroUsuario)}`)
*/
// DESAFIO
// #1
/*
const mostraParametro = (paramUm)=> console.log(paramUm)
const mostraParametroDois = (valorA,valorB)=>{
        mostraParametro(Number(valorA+valorB))
}

mostraParametroDois(2,5)
*/
// #2
const Pitagoras =(catetoA,catetoB)=> Math.sqrt(catetoA**2+catetoB**2)
console.log(Pitagoras(2,3))