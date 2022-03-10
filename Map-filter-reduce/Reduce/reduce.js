// modo longo
arrayNum = [1, 2, 3, 4, 5, 6]

const numSomados = function (soma, atual) {
  return soma + atual
}

console.log(arrayNum.reduce(numSomados))

// -------------------
// modo arrow function
arrayNum2 = [2, 3, 4, 5, 6]

console.log(arrayNum2.reduce((atual2, soma2) => atual2 + soma2))
