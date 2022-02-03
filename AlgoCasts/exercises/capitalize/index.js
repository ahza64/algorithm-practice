// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let words = []
  // pull word(s) out of str.split array
  for (let word of str.split(' ')) {
    // capitalize the first letter and push into new wrods array
    words.push(word[0].toUpperCase() + word.slice(1))
  }
  // return the array after joining it back together in a string with spaces
  return words.join(' ')
}

module.exports = capitalize;
