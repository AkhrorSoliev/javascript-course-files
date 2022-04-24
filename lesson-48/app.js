/*--------------- lesson-48 ------------*/
// const article = document.querySelector('article')

// console.log(article.children)

// Array.from(article.children).forEach((child) => {
//   child.classList.add('artilce-child')
// })

const title = document.querySelector('h2')

console.log(title.parentElement)
console.log(title.parentElement.parentElement)
console.log(title.nextElementSibling)
console.log(title.previousElementSibling)

// chaining
console.log(title.nextElementSibling.parentElement.children)
