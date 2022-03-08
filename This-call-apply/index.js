// ------------ Exemplo de obj de tamanho 1

let obj = {
  nome: 'Xuxa',
  idade: 66
}
let obj_2 = {
  nome: 'Popo',
  idade: 33
}
function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

// passando atributo através do método CALL
console.log(calculaIdade.call(obj, 3))
console.log(calculaIdade.call(obj_2, 3))
console.log(calculaIdade.apply(obj_2, [5]))
console.log('')
// -----------------------------------------
// ------------ Exemplo de obj de tamanho 4
let obj_3 = [
  {
    nome: 'Maria',
    idade: 30
  },
  {
    nome: 'Laura',
    idade: 2
  },
  {
    nome: 'Ana',
    idade: 40
  },
  {
    nome: 'Bia',
    idade: 25
  }
]

function calculaIdade_2(anos) {
  // console.log('this = ', this)

  for (let i in this) {
    console.log(`Daqui a ${anos} anos, ${this[i].nome} terá ${this[i].idade + anos} anos de idade.`)
  }
}

calculaIdade_2.call(obj_3, 10)
console.log('')
calculaIdade_2.apply(obj_3, [5])
