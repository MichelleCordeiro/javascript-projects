function getItem() {
  // pega o que foi digitado
  return document.querySelector('input').value
}

function addItem() {
  var item = getItem()

  // cria elementos
  var divNova = document.createElement('div')
  divNova.className = 'itens'

  var inputNovo = document.createElement('input')
  inputNovo.setAttribute('type', 'checkbox')

  var labelNova = document.createElement('label')
  labelNova.Id = item

  var labelConteudo = document.createTextNode(item)
  labelNova.appendChild(labelConteudo)

  // aninha elementos criados
  divNova.appendChild(inputNovo)
  divNova.appendChild(labelNova)

  if (item != '') {
    document.getElementById('containerInputs').appendChild(divNova)
  }
}
