/*------- lesson-36 -----*/

/* forEach */

const ismlar = ['ahror', 'sardor', 'doniyor', 'farxod']
const newIsmlar = []

ismlar.forEach(function (ism) {
  const newIsm = ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + 'bek'
  newIsmlar.push(newIsm)
})

console.log(newIsmlar)

// for (let i = 0; i < ismlar.length; i++) {
//   console.log(ismlar[i])
// }
