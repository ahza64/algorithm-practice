const climbStairs = n => {
  // if (n <= 3) return n
  //
  // let ways = [0, 1, 2, 3]
  // for (let i = 4; i <= n; i++) {
  //   ways.push(ways[i - 1] + ways[i - 2])
  // }
  // return ways.pop()
  // better space complexity
  if (n === 1) {
    return n
  }

  let first = 1
  let second = 2

  for (let i = 3; i <= n; i++) {
    const third = first +  second
    first = second
    second = third
  }
  return second
};

module.exports = climbStairs;
