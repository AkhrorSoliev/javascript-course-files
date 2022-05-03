const showBtn = document.getElementById('show-btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const overlay = document.getElementById('overlay')

// add classList hidden
const addHidden = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

// remove classList hidden
const removeHidden = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

showBtn.addEventListener('click', removeHidden)

closeBtn.addEventListener('click', addHidden)

overlay.addEventListener('click', addHidden)

document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') {
    addHidden()
  }
})
