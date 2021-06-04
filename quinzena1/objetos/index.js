// INTERPRETAÇÃO
/* NUMBER 1
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
//
//A) SERÁ IMPRESSO: 
//filme.elenco[0] = Matheus Nachtergaele
//filme.elenco[filme.elenco.length - 1] = Virginia Cavendish (4-1=3 - ultima casa do array)
//filme.transmissoesHoje[2] = canal: "Globo", horario: "14h"
*/

// NUMBER 2
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//A) CACHORRO {nome: "Juca", idade: 3, raca: "SRD"}
//   GATO {nome: "Juba", idade: 3, raca: "SRD"}
//   TARTARUGA {nome: "Jubo", idade: 3, raca: "SRD"}
//B) Copia o objeto de refencia, ou seja, o objeto após os 3 pontos.
*/

// NUMBER #3
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "nome"))
console.log(minhaFuncao(pessoa, "altura"))
// A & B) Será impresso false e undefined.
// Isso é porque para estrutura de objetos podemos usar objetos.propriedade ou objetos['propriedade']
// Propriedade de backender é false e como não temos propriedade altura, é undefined.
// É uma funcao para mostrar um objeto e propriedade de maneiras diferentes
*/
// Exercícios de escrita de código
// #1
/*
const nomeToApelido = {
    nome: 'Rafael',
    apelidos: ['Rafinha','Fiusk','Rafa']
}

const apresentacao=(objetoEnter)=>{
    return console.log(`Eu sou ${objetoEnter.nome}, mas pode me chamar de: ${objetoEnter.apelidos[0]}, ${objetoEnter.apelidos[1]} ou ${objetoEnter.apelidos[2]}.`) 
}
apresentacao(nomeToApelido)

// #2
const novoObjeto ={
    ...nomeToApelido,
    apelidos: ['Rafão','TaFael','Rofus']
}

apresentacao(novoObjeto)
*/
//#2
/*
const informacaoPessoal = {
    nome: 'Ryan',
    idade: 27,
    profissao: 'Developer'
}

const copiaPessoal = {
    ...informacaoPessoal,
    nome: 'Robert',
    idade: 28,
    profissao: 'Lutador'
}

const minhaFuncao=(IP)=>{
    let tamanhoNome = IP.nome
    let tamanhoProf = IP.profissao
    let arrayInfo =[IP.nome, tamanhoNome.length, IP.idade, IP.profissao, tamanhoProf.length]
    return console.log(arrayInfo)
}
minhaFuncao(informacaoPessoal)
minhaFuncao(copiaPessoal)
*/

//#3

carrinho =[]
const frutaUm ={
    nome: 'mamão',
    disponibilidade: true

}

const frutaDois ={
    ...frutaUm,
    nome: 'laranja',
    disponibilidade: true

}

const frutaTres ={
    ...frutaUm,
    nome: 'maçã',
    disponibilidade: true

}
const frutaNoCarrinho=(fruta)=>carrinho.push(fruta)
frutaNoCarrinho(frutaUm)
frutaNoCarrinho(frutaDois)
frutaNoCarrinho(frutaTres)

console.log(carrinho)

//DESAFIO #1
/*
const funcao=()=>{
    let nomeUsuario = prompt('Qual seu nome ?')
    let idadeUsuario = Number(prompt(`Qual sua idade?`))
    let profUsuario = prompt(`Qual sua profissão?`)
    return InfoPessoal={nome:nomeUsuario,profissao: profUsuario,idade:idadeUsuario}
}
const personalInfo=funcao()
console.log(personalInfo)
console.log(typeof(personalInfo))
*/
//DESAFIO #2
/*
const filmeUm={
    anoLancamento: 2007,
    nome: 'Avatar'
}

const filmeDois={
    ...filmeUm,
    anoLancamento: 2021,
    nome: 'Liga da Justica - S. Cut'
}

let testeUm = filmeUm.anoLancamento < filmeDois.anoLancamento
let testeDois = filmeUm.anoLancamento === filmeDois.anoLancamento

console.log(`O primeiro filme foi lançado antes do segundo? ${testeUm}`)
console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${testeDois}`)
*/

//DESAFIO #3
const temFruta=(fruta)=>
    fruta.disponibilidade = !fruta.disponibilidade

temFruta(frutaUm)
console.log (frutaUm)