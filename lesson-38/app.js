/*------- lesson-37 -----*/

// objects

const user = {
  name: 'Ahror',
  age: 24,
  email: 'akhrorteacher@gmail.com',
  location: "Farg'ona",
  lang: ['uzbek', 'russian', 'english'],
  login: function () {
    console.log('Siz saytdagi sahifangizga kirdingiz.')
  },
  logout: function () {
    console.log('Siz saytdagi sahifangizni tark etdingiz.')
  },
  lang: function () {
    console.log(user.lang)
  },
}

user.login()
user.logout()
user.lang()

// const myName = 'ahror'
// myName.toUpperCase()
