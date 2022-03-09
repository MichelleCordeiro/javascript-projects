// Atividade 1 - Map
function getAdmins(myMap) {
  let listaAdms = []

  for ([chave, valor] of myMap) {
    // console.log(chave, valor)
    if (valor === 'adm') {
      listaAdms.push(chave)
    }
  }
  return listaAdms
}

var minhaMap = new Map()

minhaMap.set('Ana', 'CEO')
minhaMap.set('Bia', 'adm')
minhaMap.set('Kelly', 'mkt')
minhaMap.set('Luiz', 'adm')

console.log(getAdmins(minhaMap))

// -------------------------------
// Atividade 2 - Set

// forma correta, pois retorna um array
function valoresUnicos(arr) {
  const unico = new Set(arr) // cria um Set e não array

  return [...unico] // técnica spread, transforma o Set em array
}

// ERRADO, pois retorna um Set
function valoresUnicos2(arr) {
  let arrayUnico = new Set(arr)
  return arrayUnico
}

// ERRADO, pois retorna um Set
arrayUnico = new Set()

function valoresUnicos3(arr) {
  for (i of arr) {
    arrayUnico.add(i)
  }
  return arrayUnico
}

myArray = [30, 30, 40, 5, 223, 2049, 3034, 5]
console.log(valoresUnicos(myArray))
console.log(valoresUnicos2(myArray))
console.log(valoresUnicos3(myArray))
