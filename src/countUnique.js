function countUnique(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let unq = [];
  for (let val of arr) {
    if (!unq.includes(val)) {
      unq.push(val);
    }
  }
  return unq.length;
}
console.log(countUnique([1, 3, 1, 2]));
