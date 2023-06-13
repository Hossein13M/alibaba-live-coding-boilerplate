const isTargetNumber = (input) => {
  return typeof input === "number";
};

const isArrayValid = (nums) => {
  return nums.every((currentNum) => isTargetNumber(currentNum));
};

const getPairKeys = (nums, target) => {
  if (!isArrayValid(nums)) return "array is not valid!";
  if (!isTargetNumber(target)) return "target is not valid!";

  const result = [];
  nums.forEach((num, index) => {
    for (let j = index + 1; j < nums.length; j++) {
      if (num + nums[j] === target) {
        result.push(index, j);
      }
    }
  });
  return result;
};

console.log(getPairKeys([2, 7, 11, 15], 9));
console.log(getPairKeys([3, 2, 4], 6));
console.log(getPairKeys([3, 3], 6));
console.log(getPairKeys([3, 3, "h"], 6));
console.log(getPairKeys([3, 3], "6"));
