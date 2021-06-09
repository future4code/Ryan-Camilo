// Interpretação de Código
//#1
/*

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
//A) O código recebe um número digitado pelo usuário, transforma a string em int, e joga na condicional. 
//Na condicional ele vê se o número é divisivel por 2 ou não. Se for, ele imprime 'Passou no teste', senão
//Ele imprime 'Não passou no teste'
//B) Ele imprime 'Passou no teste' para números divisiveis por dois com resto 0. Ou seja, números pares.
//C) Números impares.
//#2
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
//    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/

//A) O código acima serve como uma lista de itens e seus preços. A pessoa escreve o nome do produto, se o produto
//for igual ao nome de cada case, é impresso o nome e o preço correspondente ao item digitado pelo usuário
//B) Preço = 2.25
//C) Ele errôneamente iria atribuit o preço 5.5 e depois o preço 5 em sequencia, visto que não há um break para
//continuar o percurso do código. Logo iria retornar Pêra = 5 reais.

//#3
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/

//A) primeira linha de código está atribuindo um número a variavel numero digitado pelo usuário. Sendo este transformado
//Em integer, visto que o prompt vem em string.
//B) Se for maior que 0, aparecerá Esse número passou no teste. Senão, nada aparecerá.
//C) Sim, em ambos os casos mostrará a mensagem como undefined. Isso é porque toda estrutura que use chaves utiliza
//cria um novo escopo, que chamamos de block scopes, e eles funcionam de dentro para fora, isto é...
//o escopo dentro do if acessa o escopo global, mas não vice versa. Logo a variável mensagem nunca vai ser definida, mesmo sendo chamada.
//Se fosse essa intenção poderiamos usar o var ao invés de let, que atribui a variavel a um escopo global, de modo que LET só trabalha dentro do seu bloco.

// Exercícios de escrita de código
//#1
/*
let idade = Number(prompt(`Qual sua idade?`))
if (idade>=18){
    console.log('Você pode dirigir')
}
else {
    console.log('Você não pode dirigir.')
}
*/
//#2
//a.
/*
let turnoAluno = prompt(`Qual turno você estuda? Digite: M, V ou N`)
if (turnoAluno==='M'){
    console.log('Bom dia!')
} else if (turnoAluno === 'V'){
    console.log('Boa tarde!')
} else if (turnoAluno==='N'){
    console.log('Boa noite')
} else {
    console.log('Turno inválido')
}
*/
//b.
/*
let turnoAluno = prompt(`Qual turno você estuda? Digite: M, V ou N`)
switch (turnoAluno) {
    case 'M':
        console.log('Bom dia!')
        break;
    case 'V':
        console.log('Boa tarde!')
        break;
    case 'N':
        console.log('Boa noite!')
        break;
    default:
        console.log('Turno inválido')
        break;
}
*/
//#4
/*
const generoFilme = prompt('Qual gênero do filme que vocês vão assistir?')
const precoIngresso = Number(prompt('Qual o preço do ingresso?'))
if ((generoFilme.toUpperCase()==='FANTASIA')&&(precoIngresso<15)){
    console.log('Bom Filme!')
}
else{
    console.log('Escolha outro filme :(')
}
*/
// DESAFIOS
//#1
/*
const generoFilme = prompt('Qual gênero do filme que vocês vão assistir?')
const precoIngresso = Number(prompt('Qual o preço do ingresso?'))
if ((generoFilme.toUpperCase()==='FANTASIA')&&(precoIngresso<15)){
    const lanchinho = prompt('Qual lanchinho você vai comprar?')
    console.log('Bom Filme!')
    console.log(`Aproveite seu ${lanchinho}`)
}
else{
    console.log('Escolha outro filme :(')
}
*/
//#2
// Sistema de compra de ingressos
const nomeCompleto = prompt('Insira seu nome completo')
const tipoDeJogo = prompt('Insira o tipo de jogo: IN-Internacional ou DO-Doméstico')
const etapaDoJogo = prompt('Qual etapa do jogo? SF - Semi-Final; DT-Decisão de terceiro lugar; FI - Finais')
const categoria = Number(prompt('Qual sua categoria? Opções: 1,2,3 ou 4'))
const quantidadeIngresso = Number(prompt('Qual quantidade de ingressos deseja?'))
const dolar = 4.10
let nomenclaturaTipo = 'Doméstico'
let nomenclaturaEtapa = ''


const calculoCategoria = (etapa,cat) => {
    switch (cat) {
        case 1:
            if (etapa === 'SF') {
                nomenclaturaEtapa = 'Semi-Final'
                return 1320
            } else if (etapa === 'DT') {
                nomenclaturaEtapa = 'Decisão de Terceiro Lugar'
                return 660
            } else if (etapa === 'FI') {
                nomenclaturaEtapa = 'Finais'
                return 1980
            }
            break;
        case 2:
            if (etapa === 'SF') {
                nomenclaturaEtapa = 'Semi-Final'
                return 880
            } else if (etapa === 'DT') {
                nomenclaturaEtapa = 'Decisão de Terceiro Lugar'
                return 440
            } else if (etapa === 'FI') {
                nomenclaturaEtapa = 'Finais'
                return 1320
            }
        case 3:
            if (etapa === 'SF') {
                nomenclaturaEtapa = 'Semi-Final'
                return 550
            } else if (etapa === 'DT') {
                nomenclaturaEtapa = 'Decisão de Terceiro Lugar'
                return 330
            } else if (etapa === 'FI') {
                nomenclaturaEtapa = 'Finais'
                return 880
            }
        case 4:
            if (etapa === 'SF') {
                nomenclaturaEtapa = 'Semi-Final'
                return 220
            } else if (etapa === 'DT') {
                nomenclaturaEtapa = 'Decisão de Terceiro Lugar'
                return 170
            } else if (etapa === 'FI') {
                nomenclaturaEtapa = 'Finais'
                return 330
            }
        default:
            return 0
            break;
    }

}

let moedaJogo = 'R$'
let ingresso = Number(calculoCategoria(etapaDoJogo,categoria))
if (tipoDeJogo==='IN'){
    ingresso = ingresso/dolar
    moedaJogo = 'U$'
    nomenclaturaTipo = 'Internacional'
} 
let ingressoTotal = ingresso*quantidadeIngresso
console.log('---Dados da compra--- ')
console.log(`Nome do cliente:${nomeCompleto}`)
console.log(`Tipo do jogo: ${nomenclaturaTipo}`)
console.log(`Etapa de jogo: ${nomenclaturaEtapa}`)
console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de ingressos: ${quantidadeIngresso} ingressos`)
console.log('---Valores--- ')
console.log(`Valor do ingresso: ${moedaJogo} ${ingresso}`)
console.log(`Valor total: ${moedaJogo} ${ingressoTotal}`)