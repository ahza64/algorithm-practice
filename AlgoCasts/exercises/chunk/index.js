// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunks = []

  for (var element of array) {
    // look at the previous embedded array in the chunks array
    const lastChunkedArray = chunks[chunks.length - 1]
    // if there is no embedded array, or the length of the last array equals the chunk size, create a new array with the element in it
    if (!lastChunkedArray || lastChunkedArray.length === size) {
      chunks.push([element])
    } else {
      // if there is an array, and it's length is less than the chunk size, then just add the element to the previous embedded array
      lastChunkedArray.push(element)
    }
  }
  return chunks
}

module.exports = chunk;
