function queueTime(customers, n) {
  //TODO
  // n.length === number of threads
  // create empty object with an array for each n.length
  let arr = new Array(n).fill(0);
//   console.log(arr);
  if (customers.length <= n) return customers.pop();
  for (let i = 0; i < customers.length; i++) {
    // for every n number of customers, add shortest, replace with next in line
    // n = initial customers.length in our initial run
  }
}

console.log(queueTime([1, 2, 3, 4], 1)); // 10
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); // 9
console.log(queueTime([1, 2, 3, 4, 5], 20)); // 5
