/*------- lesson-37 -----*/

// objects

const user = {
  name: 'Ahror',
  age: 24,
  email: 'akhrorteacher@gmail.com',
  location: "Farg'ona",
  lang: ['uzbek', 'russian', 'english'],
}

console.log(user)
console.log(user.email)

user.age = 25
console.log(user.age)

console.log(user['location'])
user['name'] = 'Doniyor'
console.log(user['name'])

console.log(typeof user)
