/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert(`Bem vindo ao jogo de Blackjack!`)
let deckUsuario = []
let deckPC = []
let pontuacaoUsuario = 0
let pontuacaoPC = 0
let cartaTextoUsuario = ''
let cartaTextoPC = ''
let vencedor = ''
let novoJogo = true

// FUNCAO NOVA RODADA
const novaRodada = (param) => {
   // ZERAR AS VARIAVEIS, PARA MULTIPLOS JOGOS
   deckPC = []
   deckUsuario = []
   pontuacaoUsuario = 0
   pontuacaoPC = 0
   cartaTextoUsuario = ''
   cartaTextoPC = ''
   // COMPRA PRIMEIRA CARTA
   deckUsuario.push(comprarCarta())
   //   deckUsuario.push({texto:'A', valor:11})   Teste
   //   deckPC.push({texto:'A', valor:11})        Teste
   deckPC.push(comprarCarta())

   // ELIMINANDO 'As' COMO PRIMEIRA CARTA
   while ((deckUsuario[0].valor) === 11 || (deckPC[0].valor) === 11) {
      if (deckUsuario[0].valor === 11) {
         deckUsuario.splice(0, 1)
         deckUsuario.push(comprarCarta())
      }
      if (deckPC[0].valor === 11) {
         deckPC.splice(0, 1)
         deckPC.push(comprarCarta())
      }
   }

   // COMPRANDO A SEGUNDA CARTA
   deckUsuario.push(comprarCarta())
   deckPC.push(comprarCarta())
   for (i = 0; i < deckUsuario.length; i++) {
      pontuacaoUsuario += deckUsuario[i].valor
      cartaTextoUsuario += deckUsuario[i].texto + ' '
   }
   for (i = 0; i < deckPC.length; i++) {
      pontuacaoPC += deckPC[i].valor
      cartaTextoPC += deckPC[i].texto + ' '
   }
   // ROUND DE COMPRA DO USUÁRIO
   let pergunta = confirm(`Suas cartas são ${cartaTextoUsuario}. A carta revelada do computador é ${deckPC[0].texto} \n Deseja comprar mais uma carta?`)
   while ((pontuacaoUsuario <= 21) && (pergunta === true)) {
      if (pergunta) {
         deckUsuario.push(comprarCarta())
      }
      pontuacaoUsuario += deckUsuario[deckUsuario.length - 1].valor
      cartaTextoUsuario += deckUsuario[deckUsuario.length - 1].texto + ' '
      if (pontuacaoUsuario <= 21) {
         pergunta = confirm(`Suas cartas são ${cartaTextoUsuario}. A carta revelada do computador é ${deckPC[0].texto} \n Deseja comprar mais uma carta?`)
      }
   }
   // ROUND DE COMPRA DO PC
   if (pergunta === false && pontuacaoUsuario <= 21) {
      while (pontuacaoPC < pontuacaoUsuario) {
         deckPC.push(comprarCarta())
         pontuacaoPC += deckUsuario[deckUsuario.length - 1].valor
         cartaTextoPC += deckUsuario[deckUsuario.length - 1].texto + ' '

      }
   }

   //DEFINIR QUEM É O VENCEDOR 

   if ((pontuacaoUsuario > pontuacaoPC) && (pontuacaoUsuario <= 21)) {
      vencedor = `Você ganhou!`
   } else if ((pontuacaoUsuario < pontuacaoPC) && (pontuacaoPC <= 21)) {
      vencedor = `O Computador ganhou!`
   } else if ((pontuacaoUsuario > pontuacaoPC) && (pontuacaoUsuario > 21) && (pontuacaoPC <= 21)) {
      vencedor = `O Computador ganhou!`
   } else if ((pontuacaoPC > pontuacaoUsuario) && (pontuacaoPC > 21) && (pontuacaoUsuario <= 21)) {
      vencedor = `Você ganhou!`
   } else vencedor = `Empatou!`

   // Mensagem de Final de Jogo
   alert(`Suas cartas são:${cartaTextoUsuario}. Sua pontuação é: ${pontuacaoUsuario}` +
      ` \n As cartas dos computador são: ${cartaTextoPC} \n A pontuação do computador é: ${pontuacaoPC} \n` +
      `${vencedor}`)

}

// Main - Programa Principal

novoJogo = confirm(`Quer iniciar uma nova rodada?`)
while (novoJogo) {
   //   if (novoJogo) {
   novaRodada()
   //   } else {
   //      console.log(`O jogo acabou / GAME OVER`)
   novoJogo = confirm(`Quer iniciar uma nova rodada?`)

}
alert(`GAME OVER`)
