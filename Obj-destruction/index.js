const alunos = [
  {
    nome: 'Dede',
    nota: 5
  },
  {
    nome: 'Xuxa',
    nota: 6.5
  },
  {
    nome: 'Maria',
    nota: 9
  },
  {
    nome: 'Zeze',
    nota: 8.8
  },
  {
    nome: 'Miguel',
    nota: 7.0
  },
  {
    nome: 'Ana',
    nota: 10
  }
]

function aprovados(alunos, media) {
  // array auxiliar q recebe alunos aprovados
  let arrayAprovados = []

  for (let i = 0; i < alunos.length; i++) {
    // checa se nota é maior ou igual a media informada
    // e inclui no novo array dos aprovados

    // if (alunos[i].nota <= media) {
    //   arrayAprovados.push(alunos[i].nome)
    // }

    // faz o mesmo q o If de cima, mas agora usando object destruction
    let { nota, nome } = alunos[i]

    if (nota >= media) {
      arrayAprovados.push(nome)
    }
  }
  return arrayAprovados
}
console.log(aprovados(alunos, 7))
