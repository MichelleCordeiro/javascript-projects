// ------------------------------
// MAP sem o this
// modo longo ------------------
myArray = [1, 2, 3, 4, 5, 6, 7]

myArray.map(function (num) {
  console.log(num * 2)
  return num * 2
})

// modo arrow function -----------
console.log(myArray.map(item => item * 3))

// objeto
const myObj = [
  { name: 'Ana', age: 25 },
  { name: 'Kelly', age: 36 },
  { name: 'Laura', age: 12 },
  { name: 'Mic', age: 40 }
]

nomes = myObj.map(myObj => myObj.name)
console.log(nomes)

// ------------------------------
// MAP com o this
const apple = {
  price: 1.5
}

const orange = {
  price: 2
}

function mapArray() {
  const array = [1, 2, 3, 4, 5]

  return array.map(function (item) {
    return item * this.price
    // }, apple)
  }, orange)
}

console.log(mapArray())
