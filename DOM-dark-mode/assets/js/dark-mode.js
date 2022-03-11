function changeMode() {
  changeClasses()
  changegText()
}

function changeClasses() {
  body.classList.toggle(darkModeClass)
  button.classList.toggle(darkModeClass)
  progressBar0.classList.toggle(darkModeClass)
  progressBar1.classList.toggle(darkModeClass)
  progressBar2.classList.toggle(darkModeClass)
  progressBar3.classList.toggle(darkModeClass)
  progressBar4.classList.toggle(darkModeClass)
  progressBar5.classList.toggle(darkModeClass)
  progressBar6.classList.toggle(darkModeClass)
  progressBar7.classList.toggle(darkModeClass)
  progressBar8.classList.toggle(darkModeClass)
  progressBar9.classList.toggle(darkModeClass)
  progressBar10.classList.toggle(darkModeClass)
  progressBar11.classList.toggle(darkModeClass)
}

function changegText() {
  const lightMode = 'Light Mode'
  const darkMode = 'Dark Mode'

  if (body.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode
    return
  }
  button.innerHTML = darkMode
}

const darkModeClass = 'dark-mode'
const body = document.getElementsByTagName('body')[0]
const button = document.getElementById('mode-selector')
const progressBar0 = document.getElementById('progress0')
const progressBar1 = document.getElementById('progress1')
const progressBar2 = document.getElementById('progress2')
const progressBar3 = document.getElementById('progress3')
const progressBar4 = document.getElementById('progress4')
const progressBar5 = document.getElementById('progress5')
const progressBar6 = document.getElementById('progress6')
const progressBar7 = document.getElementById('progress7')
const progressBar8 = document.getElementById('progress8')
const progressBar9 = document.getElementById('progress9')
const progressBar10 = document.getElementById('progress10')
const progressBar11 = document.getElementById('progress11')
const icon = document.getElementById('icone')

button.addEventListener('click', changeMode)
