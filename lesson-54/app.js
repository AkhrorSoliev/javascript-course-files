const signupForm = document.querySelector('#signup-form')
// const username = document.querySelector('#username')

signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(signupForm.username.value)
})

const ism = 'Ahrorbek12399'
const regEX = /^[a-zA-Z0-9]{6,}$/

const result = regEX.test(ism)
console.log(result)
