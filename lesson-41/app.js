/*------- lesson-41 -----*/

// Math object

// Math, Math.PI, Math.E
console.log(Math)
console.log(Math.E)
console.log(Math.PI)

const area = 7.9

//  sonning eng yaqin butun qismga yaxlitlaydi
// Math.round()
// console.log(Math.round(area))

// eng yaqin kichik butun qisma qarab yaxlitlaydi
// Math.floor()
// console.log(Math.floor(area))

// eng yaqin kattasiga butun qisma qarab yaxlitlaydi
// Math.ceil()
// console.log(Math.ceil(area))

// sonning faqat butun qismini qaytaradi
// Math.trunc()
// console.log(Math.trunc(area))

// 0 va 1 oralig'ida ixtiyoriy raqamlarni qaytaradi
// Math.random()
const randomNumber = Math.trunc(Math.random() * 10) + 1
console.log(randomNumber)
