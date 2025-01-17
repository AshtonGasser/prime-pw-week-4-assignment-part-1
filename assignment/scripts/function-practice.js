console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName( name ) {
  return `hello ${name}`;
}
// Remember to call the function to test
console.log(helloName('Ashton'))

// 3. Function to add two numbers together & return the result
function addNumbers( a, b ) {
  return a+b;
}

console.log(addNumbers(3, 5))

// 4. Function to multiply three numbers & return the result


function multiplyThree( a, b, c ){
  return (a * b * c);
}

console.log(multiplyThree(3, 4, 5))


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length - 1]
}

console.log(getLast([1,2,3,4]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find( value, array ){
 let isItHere = false;
 for(let i=0; i < array.length; i++){
   if (array[i] === value){
     isItHere = true;
   }
 }
 return isItHere;
}

let array = [1,2,3,4,5]
let secondArray = ["hello", "goodbye", "yes"]

console.log(find("hello", secondArray));
console.log(find(3, array));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]){
    return true
  } else return false
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  for(let i=0; i < array.length; i++) {
    sum += array[i]
  }
  return sum;
}

console.log(sumAll([1,2,3,4,5,6,7,8,9]))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveArray(array) {
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if (array[i] > 0 ){
      newArray.push(array[i])
    }
  }
  return newArray;
}

console.log(positiveArray([-44, 66, 9, -8, -99999, 5, 90]))

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// return the area of a triangle
function triArea(base, height) {
  return base * height;
}
console.log(triArea(3, 5))
