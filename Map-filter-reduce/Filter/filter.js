// modo 1 ------------------
function filtraPares(arr) {
  if (!arr || !arr.length) return

  const filteredArr = arr.filter(item => item % 2 === 0)
  return filteredArr
}

console.log(filtraPares([10, 3, 4]))

// ------------------------------
// modo 2 ------------------
numArray = [1, 2, 3, 4, 5, 6, 7]

numArray.filter(function (num) {
  return num % 2 === 0
})

// ------------------------------
// modo arrow function -----------
console.log(numArray.filter(item => item % 2 === 0))

// ------------------------------
// objeto c sting -----------
const myObj = {
  name: 'Luke Skywalker',
  title: 'Jedi Knight',
  age: 23
}
// Convert obj em key/value array
const myArray = Object.entries(myObj)

const filtered = myArray.filter(([key, value]) => typeof value === 'string')
console.log(filtered)

// Convert key/value array p obj
const justStrings = Object.fromEntries(filtered)
console.log(filtered)
