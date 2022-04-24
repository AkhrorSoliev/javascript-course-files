/*--------------- lesson-47 ------------*/
// const content = document.querySelector('p')

// console.log(content.classList)
// content.classList.add('success')
// content.classList.remove('success')
// content.classList.add('error')

const para = document.querySelectorAll('p')

para.forEach((text) => {
  if (text.textContent.includes('success')) {
    text.classList.add('success')
  }

  if (text.textContent.includes('error')) {
    text.classList.add('error')
  }
})

// toggle
const heading = document.querySelector('h1')

heading.classList.toggle('success')
heading.classList.toggle('success')
