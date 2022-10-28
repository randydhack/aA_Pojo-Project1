/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
***********************************************************************/

// a = 1
// e = 1

// apple: 2

function arrayConverter(array) {
  // Your code here

  let count = {};

  for (let i = 0; i < array.length; i++) {
    let word = array[i]

    if (count[word] !== undefined) { // if word is contained in count, increment count, else add word into count;

      count[word]++; // apple: 2
    } else {

      count[word] = 1; // apple: 1
    }
  }
  return count;
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
