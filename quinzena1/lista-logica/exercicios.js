// Exemplos

// Exercício 0A

function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  let baseRetangulo = Number(prompt(`Digite a base do retângulo`))
  let alturaRetangulo = Number(prompt(`Digite a altura do retângulo`))
  console.log(baseRetangulo*alturaRetangulo)
}

// Exercício 2
function imprimeIdade() {
  let anoAtual = Number(prompt(`Digite o ano atual`))
  let anoNascimento = Number(prompt(`Digite seu ano de nascimento`))
  console.log(anoAtual-anoNascimento)
}

// Exercício 3
function calculaIMC() {
  let peso = Number(prompt(`Digite seu peso em kg`))
  let altura = Number(prompt(`Digite a sua altura`))
  console.log(peso/(altura**2))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt(`Digite o nome do usuario`)
  const idadeUsuario = prompt(`Digite o idade do usuario`)
  const emailUsuario = prompt(`Digite o email do usuario`)
  console.log (`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let coresFavoritas = []
  const corUm = prompt(`Digite sua cor favorita`)  
  const corDois = prompt(`Digite sua cor favorita`)  
  const corTres = prompt(`Digite sua cor favorita`)
  coresFavoritas.push(corUm,corDois,corTres)
  console.log(coresFavoritas)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  const frase = prompt (`Digite uma frase`)
  console.log (frase.toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoTeatro = Number(prompt(`Digite o custo do espetáculo de teatro`))
  const valorIngresso = Number(prompt(`Digite o valor do ingresso`))
  let numeroIngresso = ((custoTeatro/valorIngresso))
  console.log (numeroIngresso)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  const fraseUm = prompt(`Digite uma frase`)
  const fraseDois = prompt(`Digite outra frase`)
  console.log(fraseUm.length == fraseDois.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const fraseUm = prompt(`Digite uma frase`)
  const fraseDois = prompt(`Digite outra frase`)
  console.log(fraseUm.toLowerCase() === fraseDois.toLowerCase())
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt(`Digite o ano atual`))
  const anoNascimento = Number(prompt(`Digite ano de nascimento`))
  const anoRG = Number(prompt(`Digite o ano que seu RG foi emitido`))
  let idade = anoAtual - anoNascimento
  let validade = anoAtual - anoRG
  let renovacao = ((idade<=20) && (validade>=5))||((idade>20 && idade<=50) && (validade>=10))||((idade>50)&&(validade>=15))
  console.log(renovacao) 
}

// Exercício 11
function checaAnoBissexto() {
  const anoTeste = Number(prompt(`Digite um ano`))
  let condicaoUm = (anoTeste%400===0)
  let condicaoDois = (anoTeste%4===0 && anoTeste%100!==0)
  let condicaoTres = (anoTeste%4===0 && anoTeste%100===0 && anoTeste%400===0)
  const anoBissexto =  condicaoUm ||  condicaoDois || condicaoTres
  console.log(anoBissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idadePergunta = prompt(`Você tem mais de 18 anos? sim/nao`)
  const ensinoMedio = prompt(`Você possui ensino médio completo? sim/nao`)
  const disponivelExc = prompt(`Você possui disponibilidade exclusiva durante os horário do curso? sim/nao`)
  let labenuCheck = (idadePergunta==='sim' && ensinoMedio ==='sim' && disponivelExc =='sim')
  console.log(labenuCheck) 

}