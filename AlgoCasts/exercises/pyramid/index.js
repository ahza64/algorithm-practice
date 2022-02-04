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


// double nested loops iterative solution
function pyramid(n) {
  // find midpoint to know where the # goes
  const mid = Math.floor((2 * n - 1)/2)
  for (let row = 0; row < n; row++) {
    let str = ''
    for (let column = 0; column < 2 * n - 1; column++) {
      // put a hash at midpoint for the first row, and +1 -1non either side of the midpoint for each additional row
      if (mid - row <= column && mid + row >= column) {
        str += '#'
      }else{
        str += ' '
      }
    }
    console.log(str);
  }
}

module.exports = pyramid;
