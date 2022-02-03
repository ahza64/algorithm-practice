// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// look at previous position method
function capitalize(str) {
  // automatically capitalize the first position of the whole sentence string
  let result = str[0].toUpperCase()

  for (var i = 1; i < str.length; i++) {
    // look at previous position, and if it's a space, then capitalize
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  return result
}

// split method
// function capitalize(str) {
//   let words = []
//   // pull word(s) out of str.split array
//   for (let word of str.split(' ')) {
//     // capitalize the first letter and push into new wrods array
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }
//   // return the array after joining it back together in a string with spaces
//   return words.join(' ')
// }

module.exports = capitalize;
