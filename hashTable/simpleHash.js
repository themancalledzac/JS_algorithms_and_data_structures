// Initial simple hash function
// only hashes strings
// not constant time = linear in key length
// could be a little more random

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

// the prime number in the hash is helpful in spreading out the keys more uniformly.

// it's also helpful if the array that you're putting values into has a prime length.

function hashRevisited(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

console.log(hash("pink", 13));
console.log(hashRevisited("pink", 13));
