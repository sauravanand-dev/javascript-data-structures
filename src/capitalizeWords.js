function capitalizedWords(arr, ind = 0) {
  const helper = (str = "") => {
    return str.toUpperCase();
  };
  if (ind < arr.length) {
    arr[ind] = helper(arr[ind]);
    return capitalizedWords(arr, ind + 1);
  }
  return arr;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
