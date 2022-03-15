/*------- lesson-36 -----*/

/* forEach */

const names = ['ahror', 'sardor', 'doniyor', 'avaz', 'islom']
const namesNew = []

names.forEach(function (name, i) {
  let boshi = name.charAt().toUpperCase()
  let davomi = name.slice(1).toLowerCase()
  let nameNew = boshi + davomi + 'bek'
  namesNew.push(nameNew, i)
})

console.log(namesNew)
