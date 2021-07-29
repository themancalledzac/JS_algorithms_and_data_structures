function miniMaxSum(arr) {
  // Write your code here

  const reducer = (a, i) => {
    return a + i;
  };
  const full_sum = arr.reduce(reducer, 0);
  let min_num = arr[0];
  let max_num = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (full_sum - arr[i] < full_sum - max_num) {
      max_num = arr[i];
    }
    if (full_sum + arr[i] < full_sum + min_num) {
      min_num = arr[i];
    }
  }
  let max_final = full_sum - min_num;
  let min_final = full_sum - max_num;
  console.log(min_final + " " + max_final);
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));
console.log(miniMaxSum([5, 2, 3, 4, 1]));
console.log(miniMaxSum([2, 3, 3, 6, 20]));
