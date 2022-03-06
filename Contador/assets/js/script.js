const currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

// altera a cor dos botões se estiverem fora do intervalo -5 e 5
function changeBtnColor() {
  if (currentNumber == -5) {
    document.getElementsByTagName('button')[0].style.cssText =
      'border: 2px solid gray; background-color: lightgray; color: gray'
  } else if (currentNumber == 5) {
    document.getElementsByTagName('button')[1].style.cssText =
      'border: 2px solid gray; background-color: lightgray; color: gray'
  } else {
    document.getElementsByTagName('button')[0].style.cssText =
      'border: 2px solid lightcoral; background-color: rgb(241, 214, 214); color: lightcoral'
    document.getElementsByTagName('button')[1].style.cssText =
      'border: 2px solid lightcoral; background-color: rgb(241, 214, 214); color: lightcoral'
  }
}

// altera a cor do número se for menor ou maior do que 0
function changeNumberColor() {
  if (currentNumber > 0) {
    document.getElementById('currentNumber').style.color = 'blue'
  } else if (currentNumber < 0) {
    document.getElementById('currentNumber').style.color = 'red'
  } else {
    document.getElementById('currentNumber').style.color = 'black'
  }
}

// aumenta do valor do número
function increment() {
  if (currentNumber < 5) {
    currentNumber++
    currentNumberWrapper.innerHTML = currentNumber
  } else {
    // desativa o botão qdo atinge o valor -5
    document.getElementsByTagName('subtrair').disabled
  }
  changeBtnColor()
  changeNumberColor()
}

// diminui do valor do número
function decrement() {
  if (currentNumber > -5) {
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber
  } else {
    // desativa o botão qdo atinge o valor -5
    document.getElementsByTagName('subtrair').disabled
  }
  changeBtnColor()
  changeNumberColor()
}
