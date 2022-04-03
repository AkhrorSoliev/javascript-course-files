// JavaScript Masalalari:

// Loop / Array / String / Function / Object

/* --------------------  1 MASHQ🚩 -------------------- */
// ushbu arraydagi stringni inxednini toping.
const myArray = [[false, true], [1, 2], 99, 'yaxshi']

// for
// for (let i = 0; i < myArray.length; i++) {
//   if (typeof myArray[i] == 'string') {
//     console.log('String index:', i)
//   }
// }

// myArray.forEach((item, i) => {
//   if (typeof item == 'string') {
//     console.log('String index:', i)
//   }
// })

/* --------------------  2 MASHQ🚩 -------------------- */
// Array ichidagi faqat arraylarni elementlarini ajratib oling.
// Kutilyotgan natija: [1, 2, 3, 4, 5, 6]
// const data = [[1, 2, 3], 'qizil', [4, 5, 6], true, false]
// const newData = []

// data.forEach((item) => {
//   const res = Array.isArray(item)
//   if (res) {
//     item.forEach((num) => {
//       newData.push(num)
//     })
//   }
// })

// console.log(newData)

/* --------------------  3 MASHQ🚩 -------------------- */
// Array ichidagi
// [null, 0, "", false, undefined, NaN]
//qiymatlarini ajratib oladigan cod yozing.
// const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0']
// const falsey = []

// checkData.forEach((item) => {
//   if (!item) {
//     falsey.push(item)
//   }
// })

// console.log(falsey)

/* --------------------  4 MASHQ🚩 -------------------- */
// Berilgan qiymat: 'samarqand'
// Kutilyotgan qiymat : 'dnaqramas' => elementlarni teskari qilib beradigan cod yozing.

// 1-usul
// const word = 'samarqand'

// const splitWord = word.split('').reverse()

// let newWord = ''
// for (let i = 0; i < splitWord.length; i++) {
//   newWord += splitWord[i]
// }

// console.log(newWord)

// 2 - usul
// const word = 'samarqand'
// const splitWord = word.split('')
// let newWord = ''

// for (let i = word.length - 1; i >= 0; i--) {
//   newWord += splitWord[i]
// }

// console.log(newWord)

/* --------------------  5 MASHQ🚩 -------------------- */
// Propmpdan kiritilgan istalgan so’zlarni, misol uchun.
// Kiritiladi: “AsSSalamu AlAyKUM YaxShimisiz” so’zi kiritilgan bo’lsa. Uni:
// Javob: “aSSALOMU aLAYKUM yAXSHIMISIZ” ko’rinishida qaytaring.

// const word = prompt("Biror gap kiriting:")
// const splitWord = word.split(' ')
// let newWord = ''

// splitWord.forEach((item) => {
//   const boshi = item.charAt().toLowerCase()
//   const davomi = item.slice(1).toUpperCase()

//   newWord += ' ' + boshi + davomi
// })

// console.log(newWord.trimStart())

/* --------------------  6 MASHQ🚩 -------------------- */
// 7) Arraydagi Natural raqamlarni yig’indisini topadigan cod yozing.
// const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9]
// let naturalNumber = 0
// numbers.forEach((num) => {
//   if (num >= 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
//     naturalNumber += num
//   }
// })
// console.log(naturalNumber)

/* --------------------  7 MASHQ🚩 -------------------- */
// 7) Prompt’dan kiritilgan stringlar ichidagi “a” harfi necha marta ishtirok etganini aniqlaydigan cod yozing.
// “Qalesiz yaxshimisiz ? Yaxshimi ishlar ?” - nechta “a” harifi qatnashganini toping.

// const words = 'Qalesiz yaxshimisiz ? Yaxshimi ishlar ?'

// let splitWords = words.split('')

// let counter = 0
// splitWords.forEach((word) => {
//   if (word == 'a' || word == 'A') {
//     counter++
//   }
// })

// console.log(`So'raliyotgan harf: ${counter} marta ishtirok etgan.`)

/* --------------------  8 MASHQ🚩 -------------------- */
// Berilgan: [21.1, "Roziya", "array", ["I am array"], null, true, 214]
// array berilgan Uni:
// Natija: ["number", "string", "string", "object", "object", "boolean", "number"]
// ko’rinishida qaytaring.

// const types = [21.1, 'Roziya', 'array', ['I am array'], null, true, 214]

// const newTypes = []

// types.forEach((type) => {
//   newTypes.push(typeof type)
// })
// console.log(newTypes)

/* --------------------  9 MASHQ🚩 -------------------- */
// Kiritilgan text'ni nechta elementdan iboratligini aniqlovchi cod yozing.lendth dan "FOIDALANMANG".
// Shoxrux Mahmudov yechimi - WhoIam ?
// const word = 'Uzbekistan'
// word.lastIndexOf(word.slice(-1)) + 1

/* -------------------- 10 MASHQ🚩 -------------------- */
// Arrayning berilgan: [1, 2, 3, 4, 5] uning ichidagi elementlariga o’z index(position) raqamini qo’shib yangi array hosil qiling.
// Natija: [1, 3, 5, 7, 9] bo’lsin.

// const number = [1, 2, 3, 4, 5]

// let result = []

// number.forEach((num, i) => {
//   result.push(num + i)
// })

// console.log(result)

/* -------------------- 11 MASHQ🚩 -------------------- */
// Berilgan sonning “tarkibidagi” sonlar yig’indisini toping.
// Misol uchun:
/*
   1 + 2 + 3 = 6
   1 + 2 + 3 + ... + 10 = 55
   1 + 2 + 3 + ... + 7 = 28
*/
// let counter = 0
// for (let i = 1; i <= 10; i++) {
//   counter += i
// }

// console.log(counter)

/* -------------------- 12 MASHQ🚩 -------------------- */
// Berilgan sonni n ga ko’paytirib 1 ni qo’shadigan cod yozing. Birinchi 10 ta holat qaytarilsin.
// n=2 misolidida:
/*
   7 - "8,15,22,29,36,43,50,57,64,71"
   1 - "2,3,4,5,6,7,8,9,10,11"
   3 - "4,7,10,13,16,19,22,25,28,31"
*/
// let number = 9

// for (let i = 1; i <= 10; i++) {
//   let reusult = number * i + 1
//   console.log(reusult)
// }

/* -------------------- 13 MASHQ🚩 -------------------- */
// functionga array kiritsak u array ichidagi raqamlarni teskari ishorasiga aylanitirib berisin.
// [1, 2, 3, 4, 5] => [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] => [-1, 2, -3, 4, -5]
// [] => []

// let numbers = [1, 2, 3, 4, 5]
// let result = []

// const reverseFunc = (arr) => {
//   arr.forEach((num) => {
//     result.push(num * -1)
//   })
// }
// reverseFunc(numbers)
// console.log(result)

/* -------------------- 14 MASHQ🚩 -------------------- */
// functionga berilgan raqamni 0 dan o'sha raqamlargarcha bo'lgan sonlarni 3,5 va 15 ga bo'linish holatlarini tekshiring.
// agar 3 ga bo'linadigan sonlar - 'fizz'
// agar 5 ga bo'linadigan sonlar - 'buzz'
// agar 15 ga bo'linadigan sonlar - 'fizzbuzz' -  deb ataladi.

// kirilgan 25
// kutilgan javob - [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz' ]

// const result = []

// const fizzBuzzFunc = function (number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       result.push('FizzBuzz')
//     } else if (i % 5 == 0) {
//       result.push('Buzz')
//     } else if (i % 3 == 0) {
//       result.push('Fizz')
//     } else {
//       result.push(i)
//     }
//   }
// }

// fizzBuzzFunc(100)
// console.log(result)
/* -------------------- 15 MASHQ🚩 -------------------- */
// o'zingiz haqingizda object yarating va unga haqida mehtodni qo'shing. U methodan fidalaninlsa objectdagi ma'lumotlardan foidalanib o'zingiz haqingizda gapirib beradi.

// const ahrorObj = {
//   name: 'Ahror',
//   lastName: 'Soliev',
//   age: 24,
//   region: 'Fergana',
//   isMerried: false,
//   job: 'Programmer',
//   haqida: function () {
//     return `
//       Assalomu Alaykum, Mening ismim ${this.name}, Familyam ${
//       this.lastName
//     }. Yoshim ${this.age}da. ${this.region}da yashayaman. ${
//       this.job
//     } bo'lib faoliyat olib boraman. ${
//       this.isMerried ? 'Uylanganman' : 'Hali uylganmaganman'
//     }
//     `
//   },
// }

// const result = ahrorObj.haqida()
// console.log(result)
