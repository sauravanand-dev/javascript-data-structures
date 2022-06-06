function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let fc1 = {};
  let fc2 = {};
  for (let val of arr1) {
    fc1[val] = (fc1[val] || 0) + 1;
  }
  for (let val of arr2) {
    fc2[val] = (fc2[val] || 0) + 1;
  }
  for (let key in fc1) {
    if (!(key in fc2) || fc1[key] !== fc2[key]) {
      return false;
    }
  }

  return true;
}

console.log(anagram("texttwisttime", "timetwisttext"));
