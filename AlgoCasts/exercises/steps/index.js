// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// recursive method
function steps(n, row = 0, stair = '') {
  // exit the recrusion once n equals row, or is less than for edge cases
  if (n <= row) {
    return
  }
  // log the row result after it's construction is completed
  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1)
    return
    // or "return steps(n, row + 1)"... you aren't returning the function call, you're just making the function call as you exit (return)
  }
  // build the row string to be console logged
  if (stair.length <= row) {
    stair += '#'
  }else{
    stair += ' '
  }
  // recursively call the function itself
  steps(n, row, stair)
}

//nested for loops building numbered rows and columns, and comparing the column number to the row number and then make the coordinates either # or ' '
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let str = ''
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         str += '#'
//       }else{
//         str += ' '
//       }
//     }
//     console.log(str);
//   }
// }

module.exports = steps;
