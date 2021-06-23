// FUNCOES DE ARRAY
// INTERPRETAÇÃO DE CODIGO
// #1
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
*/
  // Será impresso o objeto de cada indice do array nesse formato:
  // { nome: "Amanda Rangel", apelido: "Mandi" }, 0 , Array Completo[0,1,2]
  // Isso para cada um do array.

//#2
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
*/
  // Será impresso na ordem. Amanda Rangel, Laís Petra e Letícia Chijo.

  // #3
  /*
  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
  */
  // Será impresso EM UM ARRAY todas que tiverem apelido diferente de Chijo
  // Ou seja, nesse caso, Amanda e Laís

  // ESCRITA DE CÓDIGO
  //#1 (Hora da diversão)
  /*
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a
 const nomeDoguinhos = pets.map((nomePet,index)=>{
    return nomePet.nome}
 )
 console.log (nomeDoguinhos)
 //b
 const cachorroSalsicha = pets.filter((pets)=>{
     return pets.raca==='Salsicha'
 })
 console.log(cachorroSalsicha)
 //c
 const filtrarPoodle = pets.filter((pets)=>{
     return pets.raca==='Poodle'
 })
 const mensagemDesconto = filtrarPoodle.map((item)=>{
     return `Você ganhou um cupom de 10% de desconto para tosar o/a ${item.nome}!`
 })

 console.log(mensagemDesconto)
*/
 // #2
 /*
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a
const nomeDosItens = produtos.map((inputItem)=>{
    return inputItem.nome
})
console.log(nomeDosItens)

//b
const nomePreco = produtos.map((inputItem)=>{
    return {nome:inputItem.nome, preco:(0.95*inputItem.preco).toFixed(2)}
})
console.log(nomePreco)

//c
const filtroBebidas = produtos.filter((inputItem)=>{
    return inputItem.categoria==='Bebidas'
})
console.log(filtroBebidas)

//d
const filtroYpe = produtos.filter((inputItem)=>{
    return (inputItem.nome).includes('Ypê')
})
console.log(filtroYpe)

//e
const mechandisingYpe = filtroYpe.map((inputItem)=>{
    return `Compre ${inputItem.nome} por ${inputItem.preco}`
})

console.log(mechandisingYpe)
*/