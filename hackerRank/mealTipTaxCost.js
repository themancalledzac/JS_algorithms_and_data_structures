function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  if (meal_cost === null) return 0;

  let tip = meal_cost * tip_percent * 0.01;
  let tax = meal_cost * tax_percent * 0.01;
  let total = Math.round(meal_cost + tip + tax);

  return total;
}

console.log(solve(100, 15, 8)); // A tip of 15% * 100 = 15, and the taxes are 8% * 100 = 8. Print the value  and return from the function.
console.log(solve(12, 20, 8));
