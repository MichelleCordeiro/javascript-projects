function substituiPares(arr) {
  // checa se array está vazio
  if (!arr.length) return console.log(-1)

  // substitui números pares e não zero pelo valor zero
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] !== 0) {
      arr[i] = 0
    }
  }
  console.log(arr)
}

// -outra forma-----------------------
//   const naoZero = num => num !== 0
//   const numPar = num => num % 2 === 0

//   for (let i = 0; i < arr.length; i++) {
//     if (numPar(arr[i]) && naoZero(arr[i])) {
//       console.log(`trocando ${arr[i]} por 0...`)
//       arr[i] = 0
//     } else if (!naoZero(arr[i])) {
//       console.log('Ops, você já vale 0!')
//     }
//   }
//   console.log(arr)
// }

substituiPares([1, 3, 4, 6, 80, 33, 23, 90])
substituiPares([])
substituiPares([1, -3, 4, -6, -80, 33, 0, 23, 90])
substituiPares([2, 0, 3, 5])
