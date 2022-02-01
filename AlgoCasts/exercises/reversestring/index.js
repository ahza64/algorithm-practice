// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// with advanced reduce helper
function reverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '')
}
reverse('asdf')
// without reverse(), using forin
// function reverse(str) {
//   let reversed = ''
//   for (let char of str) {
//     reversed = char + reversed
//     debugger 
//   }
//   return reversed
// }

// brute force
// function reverse(str) {
//   return str.split('').reverse().join('')
// }

module.exports = reverse;
