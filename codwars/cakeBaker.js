// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
  // TODO: insert code
  let count = 1;
  let check = 0;
  let missing = {};

  // check that each key in recipe exists in available
  for (key in recipe) {
    // if (key(from our key in recipe)is not in available) return 0;
    if (!available.hasOwnProperty(key)) {
      return 0;
    }
  }
  // For the value of each key in recipe
  // if available's key value is less, return 0
  for (key in recipe) {
    // console.log(recipe[key]);
    // console.log(available[key]);
    if (recipe[key] > available[key]) {
      missing[key] = recipe[key] - available[key];
      // TODO: for own reference, returns 0 here FOR NOW....
      //   return 0;
      count = 0;
    } else if (recipe[key] < available[key]) {
      check = Math.floor(available[key] / recipe[key]);
      //   console.log(check);
      if (count === 1) {
        count = check;
      } else if (count > check) {
        count = check;
      }
    }
  }
  //   return count;
  // check if object (missing) is empty or not.
  if (Object.keys(missing).length === 0) {
    return count;
  } else {
    console.log(`Missing the following: {missing}`);
    return missing;
  }
  // for each key:value pair, check that value in available is greater than the recipe value
  // for each available value, divide by recipe value. create a variable that contains the lowest division of each. return that division
}

// must return 2
console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
console.log(
  cakes(
    { flour: 200, sugar: 400, eggs: 6 },
    { sugar: 1200, flour: 100, eggs: 1, milk: 200 }
  )
);
// must return 0
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
console.log(
  cakes(
    { cream: 1, flour: 3, sugar: 1, milk: 1, oil: 1, eggs: 1 },
    { sugar: 1, eggs: 1, flour: 3, cream: 1, oil: 1, milk: 1 }
  )
);

// ------------------------------------------------------------------------------------------//
//                                                                                           //
//                                        OTHER ANSWERS                                      //
//                                                                                           //
// ------------------------------------------------------------------------------------------//

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function (val, ingredient) {
    return Math.min(
      Math.floor(available[ingredient] / recipe[ingredient] || 0),
      val
    );
  }, Infinity);
}

// ------------------------------------------------------------------------------------------//

const cakes = (needs, has) =>
  Math.min(
    ...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0))
  );

// ------------------------------------------------------------------------------------------//

function cakes(recipe, available) {
  return Math.min(
    ...Object.keys(recipe).map((e) => (available[e] / recipe[e]) >> 0)
  );
}
