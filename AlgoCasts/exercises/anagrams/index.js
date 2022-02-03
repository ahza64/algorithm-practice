// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// simpler with sort method, but bad time complexity
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}
// use sort method to order the stings with bad time complexity, then simply compare the two strings.
function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

// // comparing string count using the Map method
// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA)
//   const charMapB = buildCharMap(stringB)
//   // compare the lengths of the maps in case MapB is longer
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false
//   }
//
//   for (let char in charMapA) {
//     // check that each key has the same value
//     if (charMapA[char] !== charMapB[char]) {
//       return false
//     }
//   }
//   return true
// }
//
// function buildCharMap(str) {
//   const charMap = {}
//   // use regex to remove punctuation and spaces
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap
// }

module.exports = anagrams;
