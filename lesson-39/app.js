/*------- lesson-38 -----*/

// onjeclarga mehtod qo'shish

const user = {
  name: 'Ahror',
  age: 24,
  email: 'akhrorteacher@gmail.com',
  location: "Farg'ona",
  langs: ['uzbek', 'russian', 'english'],
  login: function () {
    console.log('Siz bu saytdagi sahifangiznga kirdingiz.')
  },
  logout: function () {
    console.log('Siz bu saytdagi sahifangizni tark etdingiz.')
  },
  speak: function () {
    console.log(this)
    console.log('I can speak:')
    this.langs.forEach((lang) => {
      console.log(lang)
    })
  },
}

user.speak()
