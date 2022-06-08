function avgPair(arr, num) {
  if (!arr) {
    return false;
  }
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (num === avg) {
      return true;
    }
    if (num < avg) {
      end--;
    } else {
      start++;
    }
  }
  return false;
}
//console.log(avgPair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(avgPair([1, 2, 3], 2.5));
//avgPair([1,2,6],2.5)
//console.log(avgPair([-1, 0, 3, 4, 5, 6], 4.1));
