function calculadora() {
  // define a 1º entrada, que deve ser do tipo number
  let n1 = Number(prompt('Insira o primeiro valor:'))

  // define a operação
  const operacao = Number(
    prompt(
      'Escolha uma opção:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'
    )
  )

  // verifica se a operação é válida
  if (!operacao || operacao >= 7) {
    alert('Erro - insira uma operação inválida')
    calculadora()
  } else {
    // define a 2º entrada, que também deve ser do tipo number, e a variável resultado vazia
    let n2 = Number(prompt('Insira o segundo valor:'))
    let resultado
    // verifica se as variáveis são válidas
    if (!n1 || !n2) {
      alert('Erro - insira parâmetros inválidos')
      calculadora()
    } else {
      // define as funções das operações
      function soma() {
        resultado = n1 + n2
        // template strings (`) para mostrar o resultado
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao()
      }
      function subtracao() {
        resultado = n1 - n2
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao()
      }
      function multiplicacao() {
        resultado = n1 * n2
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao()
      }
      function divisaoReal() {
        resultado = n1 / n2
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao()
      }
      function divisaoInteira() {
        resultado = n1 % n2
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao()
      }
      function potenciacao() {
        resultado = n1 ** n2
        alert(`${n1} elevado à ${n2}ª potência é ${resultado}`)
        novaOperacao()
      }

      // seleciona a função da operação escolhida pelo usuário
      // if (operacao == 1) {
      //   soma()
      // } else if (operacao == 2) {
      //   subtracao()
      // } else if (operacao == 3) {
      //   multiplicacao()
      // } else if (operacao == 4) {
      //   divisaoReal()
      // } else if (operacao == 5) {
      //   divisaoInteira()
      // } else if (operacao == 6) {
      //   potenciacao()
      // }

      // seleciona a função da operação escolhida pelo usuário, com switch case
      switch (operacao) {
        case 1:
          soma()
          break
        case 2:
          subtracao()
          break
        case 3:
          multiplicacao()
          break
        case 4:
          divisaoReal()
          break
        case 5:
          divisaoInteira()
          break
        case 6:
          potenciacao()
          break
      }

      // função para calculadora realizar outra operação na sequência ou encerrar
      function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não')
        if (opcao == 1) {
          calculadora()
        } else if (opcao == 2) {
          alert('Calculadora encerrada!')
        } else {
          alert('Digite uma opção válida!')
          novaOperacao()
        }
      }
    }
  }
}
calculadora()
