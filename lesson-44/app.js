/*--------------- lesson-44 ------------*/

// textContent
// const title = document.getElementById('title')
// title.textContent += ' New Text'

// const listItem = document.querySelectorAll('.list-item')

// listItem.forEach((item) => {
//   item.textContent += ' darslari'
// })

// innerHTML
const names = ['Ahror', 'Sardor', 'Doniyor']

const ol = document.querySelector('ol')

names.forEach((name) => {
  ol.innerHTML += `<li>${name}</li>`
})
