const isTypeNumber = (input) => {
  return typeof input === "number";
};

const isArrayValid = (nums) => {
  for (const num of nums) {
    if (isTypeNumber(num) === false) return false;
  }
  return true;
};

const getPairKeys = (nums, target) => {
  if (!isArrayValid(nums)) return "array is not valid!";
  if (!isTypeNumber(target)) return "target is not valid!";

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
console.log(getPairKeys([3, 3, "h"], 6));
console.log(getPairKeys([3, 3], "6"));
