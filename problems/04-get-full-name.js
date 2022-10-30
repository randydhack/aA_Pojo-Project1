/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {
  firstName: 'John',
  lastName: 'Doe'
};
getFullName(p1); // => 'John Doe'

let p2 = {
  firstName: 'Charlie',
  lastName: 'Brown',
  age: 9
};
getFullName(p2); // => 'Charlie Brown'

***********************************************************************/

/* Ty
1. create a new obj, that returns a string
2. accessing the key firstName and lastName
3. returning it into a string
*/

/* Randy
1. access the object key's value
2. returning first and last name into a string
*/

function getFullName(person) {

  return person.firstName + " " + person.lastName;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
