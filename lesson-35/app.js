/*------- lesson-35 -----*/

/* callback function */

const myFunc = (callbackFunc) => {
  let number = 50
  callbackFunc(number)
}

myFunc((value) => {
  console.log(value)
})
