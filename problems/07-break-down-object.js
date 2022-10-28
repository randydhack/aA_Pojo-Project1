/***********************************************************************
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!

Examples:
let object1 = {
  name: 'Rupert',
  age: 5,
  speak: 'Meow'};
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {
  location: 'NY',
  borough: 'Brooklyn'
};

breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]

1. create an empty arr variable
2. write a for in loop key in obj
3. pushing the key into the arr
4. return ...arr1, ...arr2

***********************************************************************/

function breakDownObj(obj) {

  let arr = [];
  let value = [];

  for (let key in obj) {

    arr.push(key);
    value.push(obj[key]);
  }

  return [...arr, ...value];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = breakDownObj;
