/*--------------- lesson-45 ------------*/
const link = document.querySelector('a')
console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://www.yandex.ru')
link.textContent = 'Go To Yandex Main Page'

const text = document.querySelector('p')
console.log(text.getAttribute('class'))
text.setAttribute('class', 'success')

text.setAttribute('style', 'color: red')
