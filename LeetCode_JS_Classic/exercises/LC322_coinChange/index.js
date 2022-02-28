function coinChange(coins, amount) {
  let dpMinCoins = new Array(amount + 1).fill(Infinity)
  dpMinCoins[0] = 0

  for (let i = 0; i < dpMinCoins.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coinVal = coins[j]
      if (coinVal <= i) {
        dpMinCoins[i] = Math.min(dpMinCoins[i - coinVal] + 1, dpMinCoins[i] )
      }
    }
  }
  const answer = dpMinCoins[dpMinCoins.length - 1]
  return answer === Infinity ? -1 : answer
}

module.exports = coinChange;
