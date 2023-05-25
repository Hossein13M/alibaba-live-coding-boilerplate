const getPairKeys = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
};

console.log(getPairKeys([2, 7, 11, 15], 9));
console.log(getPairKeys([3, 2, 4], 6));
console.log(getPairKeys([3, 3], 6));
