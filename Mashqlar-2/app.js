/* 1) promptdan ism va yosh kiritilsa kiritilgan yosh orqali ushbu ma'lumotlar hioblanib berilishi kerak:
 tug'ilgan yil (1998), yashagan oy, hafta, kun, soat, daqiqa, sekund */

// const ism = prompt('Ismingizni kiriting:')
// const yosh = +prompt('Yoshingizni kiriting:')

// let tugilganYil = 2022 - yosh
// let oy = yosh * 12
// let hafta = ((yosh * 365) / 7).toFixed(0)
// let kun = yosh * 365
// let soat = kun * 24
// let daqiqa = soat * 60
// let soniya = daqiqa * 60

// const result = `Qadirli ${ism}. Siz ${tugilganYil} yilda tug'ilgansiz. Va siz ${oy} oy, ${hafta} hafta, ${kun} kun, ${soat} soat, ${daqiqa} daqiqa, ${daqiqa} soniya yashagansiz. 😊`

// alert(result)

/* 2) - ismlar array'i ichidan promptdan so'ralyotgan ism bo'lsa unda ha bunday ism bor agar bo'lmasa afsus bunday ism yo'q degan yozuv chiqarilishi kerak. */
// const kimKerak = prompt('Kim kerak:')

// const ism = prompt('Ism kiriting:')

// // includes
// const ismlar = ['Ahror', 'Sardor', 'Doniyor']

// if (ismlar.includes(ism)) {
//   alert(`Ha ${ism} bor`)
// } else {
//   alert(`Afsus ${ism} yo'q`)
// }

/* 3) array ichidagi ismlarning oxiriga bek qo'shimchasini qo'shing. Va console ga chiqaring */
const ismlar = ['Ahror', 'Sardor', 'Doniyor']

// for / while => loop

// for
// for (let i = 0; i < ismlar.length; i++) {
//   let result = ismlar[i] + 'bek'
//   console.log(result)
// }

// while

// let i = 0

// while (i < ismlar.length) {
//   let result = ismlar[i] + 'bek'
//   console.log(result)
//   i++
// }

// 4) promptdan kiritilan viloyat nomi oqarli o'sha viloyatda qancha aholi borlini chiqaring */

// const viloyatNomi = prompt('Qaysi viloyat kerak ?')

// switch (viloyatNomi) {
//   case "Farg'ona":
//     alert("Farg'ona viloyatida 2 mln aholi bar")
//     break
//   case 'Andijon':
//     alert('Andijon viloyatida 1.5 mln aholi bar')
//     break
//   case 'Namangan':
//     alert('Namangan viloyatida 1 mln aholi bar')
//     break
//   default:
//     alert(`Hozircha ba'zada ${viloyatNomi} viloyat mavjuda emas`)
// }

/* 5) promptga kiritilgan belgilar soni meyoridan oshsa qancha oshgani va qancha yozgani, agar meyoridan kam yozilgan bo'lsa qancha yozgani va qancha yana belgi kiritilishi kerakligini yatishi kerak. */

// const belgilar = prompt('Nimadirlar yozing...😊')

// let meyor = 20

// if (belgilar.length > meyor) {
//   alert(
//     `Siz ${meyor}ta belgi kiritishingiz mumkin, lekin hozirda siz ${
//       belgilar.length
//     }ta belgi kiritdiz. Bu meyoridan ${belgilar.length - meyor}ta ko'p.`,
//   )
// } else {
//   alert(
//     `Siz ${meyor}ta belgi kiritishingiz mumkin, va hozirda siz ${
//       belgilar.length
//     }ta belgi kiritdiz. Yana ${
//       meyor - belgilar.length
//     }ta belgi kiritishiz mumkin.`,
//   )
// }
