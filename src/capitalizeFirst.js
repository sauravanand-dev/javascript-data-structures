function capitalizeFirst(arr, ind = 0) {
  const helper = (str = "") => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  };
  if (ind < arr.length) {
    arr[ind] = helper(arr[ind]);
    return capitalizeFirst(arr, ind + 1);
  }
  return arr;
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
