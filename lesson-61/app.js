// localStorage

const names = JSON.parse(localStorage.getItem('names'))
  ? JSON.parse(localStorage.getItem('names'))
  : []

if (names.length > 0) {
  names.forEach((name) => {
    console.log(name)
  })
} else {
  console.log("Hechqanday ism yo'q")
}
