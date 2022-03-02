// Block Scope
const age = 24

if (true) {
  const age = 25
  const ism = 'ahror'
  console.log('If elsening ichidagi age:', age, ism)

  if (true) {
    const age = 30
    console.log('Ikkinchi if ichi:', age)
    var test = 'Hello'
  }
}

console.log('Tashqi tomonda chaqirilgan age:', age, test)
