function lengthOfLIS(nums) {
  if (nums.length === 0) return 0

  let dpSubsecuence = new Array(nums.length).fill(1)
  let maxSoFar = 1

  for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[j] > nums[i]) {
        dpSubsecuence[j] = Math.max(dpSubsecuence[i] + 1, dpSubsecuence[j])
      }
    }
    maxSoFar = Math.max(maxSoFar, dpSubsecuence[j])
  }
  return maxSoFar
}

module.exports = lengthOfLIS;
