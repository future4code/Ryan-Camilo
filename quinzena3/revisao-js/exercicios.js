// EXERCÍCIO 01
function inverteArray(array) {
  const reversedArray = []
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i])
  }
  return reversedArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const filtrarPar = array.filter((inputArray) => {
    return inputArray % 2 === 0
  })
  const elevarPar = filtrarPar.map((inputArray) => {
    return inputArray ** 2
  })
  return elevarPar
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const filtrarPar2 = array.filter((inputArray) => {
    return inputArray % 2 === 0
  })
  return filtrarPar2
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maior = 0
  array.forEach((element, index) => {
    if (maior < array[index]) {
      maior = element
    }
  });
  return maior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length    // Ué? kkkkkk

}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3
  let respostas = []
  respostas.length = 5
  for (let i = 0; i < respostas.length; i++) {
    switch (i) {
      case 0:
        respostas[i] = (booleano1 && booleano2 && !booleano4)
        break;
      case 1:
        respostas[i] = ((booleano1 && booleano2) || !booleano3)
        break;
      case 2:
        respostas[i] = (booleano2 || booleano3) && (booleano4 || booleano1)
        break;
      case 3:
        respostas[i] = (!(booleano2 && booleano3) || !(booleano1 && booleano3))
        break;
      case 4:
        respostas[i] = (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))
        break;
      default:
        break;
    }
  }
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const primeirosNumerosPares = []
  for (let i = 0; i < n * 2; i++) {
    if (i % 2 === 0) {
      primeirosNumerosPares.push(i)
    }
  }
  return primeirosNumerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return 'Equilátero'
  } else if (a === b || b === c || c === a) {
    return 'Isósceles'
  } else {
    return ('Escaleno')
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let maior = num1
  let menor = num1
  if (num2 > maior) {
    maior = num2
  }
  if (num2 < menor) {
    menor = num2
  }
  let Y = maior % menor === 0
  let diferencaNum = Number(maior - menor)
  return { 'maiorNumero': maior, 'maiorDivisivelPorMenor': Y, 'diferenca': diferencaNum }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  maior = array[0]
  menor = array[0] * array[1]
  segundoMaior = array[0]
  segundoMenor = array[0]
  for (numbers of array) {
    if (numbers > maior) {
      segundoMaior = maior
      maior = numbers
    } else if (numbers < menor) {
      segundoMenor = menor
      menor = numbers
    }
  }
  if (array.length === 2) {
    segundoMaior = menor
    segundoMenor = maior
  } else if (array.length === 3) {
    let media = 0
    for (numbers2 of array) {
      if ((numbers2 > menor) && (numbers2 < maior)) {
        media = numbers2
      }
      segundoMaior = media
      segundoMenor = media
    }
  }
  return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function ordenaArray(array) {

  let checarTroca = true
  while (checarTroca === true) {
    checarTroca = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let tempVar = array[i]
        array[i] = array[i + 1]
        array[i + 1] = tempVar
        checarTroca = true
      }
    }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  const favoritoAstrodev = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: [`Meryl Streep`, `Anne Hathaway`, `Emily Blunt`, `Stanley Tucci`]
  }
  return favoritoAstrodev
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const chamadaFavorito = filmeFavorito()
  return (`Venha assistir ao filme ${chamadaFavorito.nome}, de ${chamadaFavorito.ano}, dirigido por ${chamadaFavorito.diretor} e estrelado por ${chamadaFavorito.atores.join(', ')}.`)
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * Number(lado1 + lado2)),
    area: Number(lado1 * lado2)
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const infoPessoal = {
    ...pessoa,
    nome: 'ANÔNIMO'
  }
  return infoPessoal
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

  const resultado = arrayDePessoas.filter((param) => {
    return param.idade >= 18
  })
  return resultado

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const resultado = arrayDePessoas.filter((param) => {
    return param.idade < 18
  })
  return resultado
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const resultado = array.map((param) => {
    return param * 2
  })
  return resultado
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const resultado = multiplicaArrayPor2(array)
  const resultado2 = resultado.map((input) => {
    return input.toString()
  })
  return resultado2
}


// EXERCÍCIO 17C
function verificaParidade(array) {
  const resultado = array.map((input) => {
    if (input % 2 === 0) {
      return `${input} é par`
    } else {
      return `${input} é ímpar`
    }
  })
  return resultado
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const filtroPessoas = pessoas.filter((input) => {
    if ((input.altura >= 1.5) && (input.idade > 14) && (input.idade < 60)) {
      return input
    }
  })
  return filtroPessoas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const filtroPessoas = pessoas.filter((input) => {
    if (!((input.altura >= 1.5) && (input.idade > 14) && (input.idade < 60))) {
      return input
    }
  })
  return filtroPessoas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
