/*
Atividade:
- Crie uma função que recebe dois números como parâmetros.
- Confira se os números são iguais.
- Confira se a soma dos números é maior que 10 ou menor que 20.
- Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
*/

// verifica se números são iguais quanto ao valor
function checaIgual(num1, num2) {
  if (num1 === num2) {
    return ''
  } else {
    return 'não '
  }
}

// realiza a soma de dois números passados como parâmentro na função
function soma(num1, num2) {
  return num1 + num2
}

// checa se resultado da soma é menor, maior ou igual a 10 e 20
function checaMaior(num) {
  let dez = 'menor do que'
  let vinte = 'menor do que'

  // condicional padrão
  if (num > 10) {
    dez = 'maior do que'
  } else if (num == 10) {
    dez = 'igual a'
  }

  // condicional curta
  if (num > 10) vinte = 'maior do que'
  else if (num == 10) vinte = 'igual a'

  return [dez, vinte]
}

// função de entrada dos números e que executa as funções anteriores retornando string
function myfunc() {
  let n1 = Number(prompt('Insira o primeiro valor:'))
  let n2 = Number(prompt('Insira o segundo valor:'))

  let nãoIguais = checaIgual(n1, n2)
  let res_soma = soma(n1, n2)
  let dezVinte = checaMaior(res_soma)

  console.log(
    `Os números ${n1} e ${n2} ${nãoIguais}são iguais. Sua soma é ${res_soma}, que é ${dezVinte[0]} 10 e ${dezVinte[1]} 20.`
  )
}

myfunc()
