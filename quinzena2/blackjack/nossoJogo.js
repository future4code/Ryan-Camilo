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
// LETS START
console.log(`Bem vindo ao jogo de Blackjack!`)

const novaRodada=(param)=>{
   const primeiraCartaUsuario = comprarCarta(); 
   const segundaCartaUsuario = comprarCarta(); 
   const primeiraCartaPC = comprarCarta();
   const segundaCartaPC = comprarCarta();
   const pontuacaoUsuario = primeiraCartaUsuario.valor+segundaCartaUsuario.valor
   const pontuacaoPC = primeiraCartaPC.valor+segundaCartaPC.valor

   console.log(`Usuário - cartas:${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} pontuacao: ${pontuacaoUsuario}`) 
   console.log(pontuacaoUsuario) 
   console.log(`Computador - cartas: ${primeiraCartaPC.texto} ${segundaCartaPC.texto} pontuacao: ${pontuacaoPC}`) 
   console.log(pontuacaoPC)
   if ((pontuacaoUsuario > pontuacaoPC)&&(pontuacaoUsuario<=21)){
      console.log(`Usuário venceu!`)
      } else if ((pontuacaoUsuario < pontuacaoPC) && (pontuacaoPC <= 21)){
         console.log(`PC venceu!`)}
         else if ((pontuacaoUsuario > pontuacaoPC) && (pontuacaoUsuario > 21) && (pontuacaoPC <= 21)){
            console.log(`PC venceu!`)}
            else if ((pontuacaoPC > pontuacaoUsuario) && (pontuacaoPC > 21) && (pontuacaoUsuario <= 21)){
               console.log(`Usuário venceu!`)} 
               else console.log (`Empate!`)
   }

if(confirm(`Quer iniciar uma nova rodada?`)) {
	novaRodada()
} else {
	console.log(`O jogo acabou / GAME OVER`)
}

