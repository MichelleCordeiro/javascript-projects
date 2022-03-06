var currentNumberWrapper2 = document.getElementById('currentNumber2')
var currentNumber2 = 0

const btn1 = document.getElementById('2')
btn1.addEventListener('click', myBtnIncrement)
btn1.addEventListener('mouseover', informaIncr)

const btn2 = document.getElementById('1')
btn2.addEventListener('click', myBtnDecrement)
btn2.addEventListener('mouseover', informaDecr)

// aumenta do valor do número
function myBtnIncrement() {
  if (currentNumber2 < 5) {
    currentNumber2++
    currentNumberWrapper2.innerHTML = currentNumber2
  } else {
    // desativa o botão qdo atinge o valor -5
    document.getElementsByTagName('myBtnAdicionar').disabled
  }
}

// diminui do valor do número
function myBtnDecrement() {
  if (currentNumber2 > -5) {
    currentNumber2--
    currentNumberWrapper2.innerHTML = currentNumber2
  } else {
    // desativa o botão qdo atinge o valor -5
    document.getElementsByTagName('myBtnSubtrair').disabled
  }
}

// informa o número caso o botão seja clicado
function informaIncr() {
  document.getElementById('result').innerHTML = 'soma'
}

function informaDecr() {
  document.getElementById('result').innerHTML = 'subtrai'
}
