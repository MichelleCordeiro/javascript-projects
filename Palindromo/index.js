function ehPalindromo(str) {
  // checa string
  if (!str) return console.log('Não exite string')

  // remove simbolos
  strLimpa = str.replace(/[^a-zA-Z0-9 ]/g, '')

  // remove espaços
  strJunta = strLimpa.replace(/[' ']/g, '')

  // transforma para minúsculas
  strPronta = strJunta.toLowerCase()

  //checa palindromo
  if (strPronta == strPronta.split('').reverse().join('')) {
    console.log(`${str} é palíndromo`)
  } else {
    console.log(`${str} não é palíndromo`)
  }
}

ehPalindromo('ola! Gato, preto @6789 ESC')
ehPalindromo('Rota de redator!')
ehPalindromo('')

// ------------------------------------
function ehPalindromo2(str) {
  // checa string
  if (!str) return console.log('Não exite string')

  // limpa string
  strOK = str
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/[' ']/g, '')
    .toLowerCase()

  // precorre a metada da string comparando um
  // caractere do começo c um caractere do final
  for (var i = 0; i < strOK.length / 2; i++) {
    if (strOK[i] !== strOK[strOK.length - i - 1]) {
      return console.log(`${str} não é palíndromo`)
    }
  }
  return console.log(`${str} é palíndromo`)
}

ehPalindromo2('Rota de redator!')
ehPalindromo2('ola! Gato, preto @6789 ESC')
ehPalindromo2('')
