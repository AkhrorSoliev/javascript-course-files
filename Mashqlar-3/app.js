// JavaScript Masalalari:

// Loop / Array / String / Function

/* --------------------  1 MASHQ🚩 -------------------- */
// ushbu arraydagi stringni inxednini toping.

const myArray = [[false, true], [1, 2], 99, 'yaxshi']

// forEach

// myArray.forEach((item, i) => {
//   if (typeof item == 'string') {
//     console.log(i)
//   }
// })

// for (let i = 0; i < myArray.length; i++) {
//   if (typeof myArray[i] == 'string') {
//     console.log(i)
//   }
// }

/* --------------------  2 MASHQ🚩 -------------------- */
// Array ichidagi faqat arraylarni elementlarini ajratib oling.
// Kutilyotgan natija: [1, 2, 3, 4, 5, 6]
const data = [[1, 2, 3], 'qizil', [4, 5, 6], true, false]

const newData = []

data.forEach((item) => {
  const res = Array.isArray(item)
  console.log(res)
})

/* --------------------  3 MASHQ🚩 -------------------- */
// Array ichidagi
// [null, 0, "", false, undefined, NaN]
//qiymatlarini ajratib oladigan cod yozing.
const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0']

/* --------------------  4 MASHQ🚩 -------------------- */
// Berilgan qiymat: 'samarqand'
// Kutilyotgan qiymat : 'dnaqramas' => elementlarni teskari qilib beradigan cod yozing.

/* --------------------  5 MASHQ🚩 -------------------- */
// Propmpdan kiritilgan istalgan so’zlarni, misol uchun.
// Kiritiladi: “AsSSalamu AlAyKUM YaxShimisiz” so’zi kiritilgan bo’lsa. Uni:
// Javob: “aSSALOMU aLAYKUM yAXSHIMISIZ” ko’rinishida qaytaring.

/* --------------------  6 MASHQ🚩 -------------------- */
// 7) Arraydagi Natural raqamlarni yig’indisini topadigan cod yozing.

/* --------------------  7 MASHQ🚩 -------------------- */
// 8) Prompt’dan kiritilgan stringlar ichidagi “a” harfi necha marta ishtirok etganini aniqlaydigan cod yozing.
// “Qalesiz yaxshimisiz ? Yaxshimi ishlar ?” - nechta “a” harifi qatnashganini toping.

/* --------------------  8 MASHQ🚩 -------------------- */
// Berilgan: [21.1, "Roziya", "array", ["I am array"], null, true, 214]
// array berilgan Uni:
// Natija: ["number", "string", "string", "object", "object", "boolean", "number"]
// ko’rinishida qaytaring.

/* --------------------  9 MASHQ🚩 -------------------- */
// Kiritilgan text'ni nechta elementdan iboratligini aniqlovchi cod yozing.lendth dan "FOIDALANMANG".

/* -------------------- 10 MASHQ🚩 -------------------- */
// Arrayning berilgan: [1, 2, 3, 4, 5] uning ichidagi elementlariga o’z index(position) raqamini qo’shib yangi array hosil qiling.
// Natija: [1, 3, 5, 7, 9] bo’lsin.

/* -------------------- 11 MASHQ🚩 -------------------- */
// Berilgan sonning “tarkibidagi” sonlar yig’indisini toping.
// Misol uchun:
/*
   1 + 2 + 3 = 6
   1 + 2 + 3 + ... + 10 = 55
   1 + 2 + 3 + ... + 7 = 28
*/

/* -------------------- 12 MASHQ🚩 -------------------- */
// Berilgan sonni n ga ko’paytirib 1 ni qo’shadigan cod yozing. Birinchi 10 ta holat qaytarilsin.
// n=2 misolidida:
/*
   7 - "8,15,22,29,36,43,50,57,64,71"
   1 - "2,3,4,5,6,7,8,9,10,11"
   3 - "4,7,10,13,16,19,22,25,28,31"
*/

/* -------------------- 13 MASHQ🚩 -------------------- */
// functionga array kiritsak u array ichidagi raqamlarni teskari ishorasiga aylanitirib berisin.
// [1, 2, 3, 4, 5] => [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] => [-1, 2, -3, 4, -5]
// [] => []
