
function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

function sumWhile(nums) {
  let sum = 0;
  let count = 0;
  while (count < nums.length) {
    sum += nums[count];
    count++;
  }
  return sum;
}

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

const testArray = [1, 2, 3, 4, 5];

console.log(sumFor(testArray));
console.log(sumWhile(testArray));
console.log(sumRecursion(testArray));
console.log((sumTheSimpleWay(testArray)));

