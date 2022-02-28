// logical operators - OR || and AND &&

const parol = 'pass@'

if (parol.length >= 12 && parol.includes('@')) {
  console.log('Sizning parolingiz juda uzun !')
} else if (parol.length >= 8 || (parol.includes('@') && parol.length >= 5)) {
  console.log('Sizning parolingiz yetarlicha kuchli !')
} else {
  console.log('Sizning parolingiz yetarlicha kuchli emas !')
}
