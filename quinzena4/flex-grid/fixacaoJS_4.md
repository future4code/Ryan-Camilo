~~~javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 let contador = 0
 for (numeros of arrayDeNumeros){
   if (numeros == numeroEscolhido){
      contador += 1
   }
 }
 if (contador == 0){return `Número não encontrado`} 
 else { return `O número ${numeroEscolhido} aparece ${contador}x`}
}
~~~