// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// copied from steps and adapted for pyrimd
function pyramid(n, row = 0, stair = '') {
  const mid = Math.floor((2 * n - 1) / 2)
  // exit the recrusion once row equals n, or is less than for edge cases
  if (n <= row) {
    return
  }
  // log the row result after it's construction is completed
  if (2 * n - 1 === stair.length) {
    console.log(stair);
    pyramid(n, row + 1)
    return
    // or "return pyramid(n, row + 1)"... you aren't returning the function call, you're just making the function call as you exit (return)
  }
  // build the row string to be console logged
  if (mid - row <= stair.length && mid + row >= stair.length) {
    stair += '#'
  }else{
    stair += ' '
  }
  // recursively call the function itself
  pyramid(n, row, stair)
}

// // double nested loops iterative solution
// function pyramid(n) {
//   // find midpoint to know where the # goes
//   const mid = Math.floor((2 * n - 1)/2)
//   for (let row = 0; row < n; row++) {
//     let str = ''
//     for (let column = 0; column < 2 * n - 1; column++) {
//       // put a hash at midpoint for the first row, and +1 -1non either side of the midpoint for each additional row
//       if (mid - row <= column && mid + row >= column) {
//         str += '#'
//       }else{
//         str += ' '
//       }
//     }
//     console.log(str);
//   }
// }

module.exports = pyramid;
