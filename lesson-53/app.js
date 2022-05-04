const signupForm = document.querySelector('#signup-form')
// const username = document.querySelector('#username')

signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(signupForm.username.value)
})
