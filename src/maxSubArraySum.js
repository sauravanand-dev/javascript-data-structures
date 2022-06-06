function maxSum(arr, count) {
  if (!arr || arr.length === 0 || count === 0 || arr.length < count) {
    return undefined;
  }
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < count; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let j = count; j < arr.length; j++) {
    tempSum = tempSum - arr[j - count] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log(maxSum([1, 9, 4, 3, 6, 9, 3], 3));
