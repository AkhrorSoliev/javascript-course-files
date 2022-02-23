// template string
const title = 'Rastamojka qachon ochiladi ?! yohud Monopoliya Respublikasi !'
const author = "Lag'mon makazi"
const likes = 35000000

// concatentation way
// let result = 'Bu post nomi ' + title + ' ' + author + ' tomonidan yozilgan. ' + 'va bu postda ' + likes + ' ta like bor'

// console.log(result)

// template string way
// let result = `Bu post nomi ${title}, ${author} tomonidan yozilgan. Va bu postda ${likes} ta like bor`

let result = `
    <h2>${title}</h2>
    <p>${author} tomonidan yozilgan</p>
    <span>${title}</span>
`
console.log(result)
