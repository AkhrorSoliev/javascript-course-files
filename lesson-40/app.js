/*------- lesson-38 -----*/

// objectlar arrayda

// { name: 'Harry Potter', likes: 484 },
// { name: 'Titanic', likes: 987 },
// { name: 'Sitve Jobs', likes: 156 },
// { name: 'Sherlock', likes: 574 },

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
  movies: [
    { name: 'Avatar', likes: 456 },
    { name: 'Harry Potter', likes: 484 },
    { name: 'Titanic', likes: 987 },
    { name: 'Sitve Jobs', likes: 156 },
    { name: 'Sherlock', likes: 574 },
  ],
}

// objectlar arrayda

const movies = [
  { name: 'Avatar', likes: 456 },
  { name: 'Harry Potter', likes: 484 },
  { name: 'Titanic', likes: 987 },
  { name: 'Sitve Jobs', likes: 156 },
  { name: 'Sherlock', likes: 574 },
]

movies.forEach((movie) => {
  // console.log(movie.name)
  // console.log(movie.likes)
  const result = `Kino nomi: ${movie.name}🎥, Likes: ${movie.likes}💖`
  console.log(result)
})

user.moviesWatch()
