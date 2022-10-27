/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

/*

0. make a conditional
1. check if the obj key is not undefined
2. return true if it's not undefined

*/

function doesKeyExist(obj, key) {
  if (obj[key] === undefined) {
    return false;
  } else {
    return true;
  }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;
