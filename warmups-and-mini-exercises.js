
// var a = 1
// var b = a++
// var c = ++a
// undefined
// a
// 3
// b
// 1
// c
// 3
// var d = 'hello'
// undefined
// var e = false
// undefined
// d++
// NaN
// e++
// 0
// var perplexed
// undefined
// perplexed +2
// NaN
// var price = 2.7
// undefined
// price.tofixed(2.7)
//
// price.toFixed(2.7)
// '2.70'
// var price = '2.7'
// undefined
// price.toFixed(20)
// price.toFixed(2)
// price.toFixed(2)
// isNaN(0)
// false
// isNan(1)
// isNaN(1)
// false
// isNaN('0')
// false
// isNaN("")
// false
// isNaN('string')
// true
// isNaN('1')
// false
// isNaN('3.145')
// false
// isNaN(Number.MAX_VALUE)
// false
// isNaN(Infinity)
// false
// isNaN('true')
// true
// isNaN(true)
// false
// isNaN('false')
// true
// isNaN(false)
// false
// NaN === NaN
// false
// !true
// false
// !false
// true
// !!true
// true
// !!false
// false
// !!0
// false
// !!-0
// false
// !!1
// true
// !!-1
// true
// !!0.1
// true
// !!'hello'
// true
// !!""
// false
// !!''
// false
// !!'false'
// true
// !!'0'
// true
// var sample = 'Hello Codeup';
// undefined
// sample.length
// 12
// sample.toUpperCase()
// 'HELLO CODEUP'
// sample= sample.toUpperCase()
// 'HELLO CODEUP'
// sample
// 'HELLO CODEUP'
// sample = sample + ' Students'
// 'HELLO CODEUP Students'
// sample = sample.replace('Students','CLASS')
// 'HELLO CODEUP CLASS'
// sample.indexOf('C')
// 6
// sample.substring(6,12)
// 'CODEUP'
// var mermaid = 3
// undefined
// var bear = 5
// undefined
// var herc = 1
// undefined
// var money = (mermaid + bear + herc) * 3
// undefined
// money
// 27
// var payPerHourGoogle = 400, payPerHourAmazon = 380, payPerHourFacebook = 350, workHoursGoogle = 6, workHourAmazon = 4, workHoursFacebook = 10
// undefined
// var payForWorkWeek = (payPerHourGoogle * workHoursGoogle) + (payPerHourAmazon * workHourAmazon) + (payPerHourFacebook * workHoursFacebook)
// undefined
// payForWorkWeek
// 7420
// var isClassFull = true, isConflict= false
// undefined
// var canEnroll= isClassFull && isConflict
// undefined
// canEnroll
// false
// var isNumberOfItemsTwo = true, offerHasNotExpired = true, isPremiumMember = false
// undefined
// var canRecieveOffer = (isNumberOfItemsTwo || isPremiumMember) && offerHasNotExpired
// undefined
// canRecieveOffer
// true
// var passwordLength = true, isNotUsername = true, usernameLength = true, noSpaces = true
// undefined
// var validSignIn = passwordLength && isNotUsername && usernameLength && noSpaces
// undefined
// validSignIn
// true
// // redo code to function look at justin's code


// ================ !! Mini-exercises !!

// Write a function, returnFive, that returns the number five. No inputs should be defined.
//  function returnFive() {
//      return 5;
//  }
// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
// function isFive(input){
//     return input == 5;
// }
// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
// function isShortWord(string){
//     return string.length < 5;
// }
// console.log(isShortWord('password'), false)
// console.log(isShortWord('heff'), true)
// console.log(isShortWord(''), true)
// console.log(isShortWord('fives'), false)
// format to test work
// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
// function isSameLength(inOne, inTwo){
//     var wordsEqual = inOne.length == inTwo.length
//     return wordsEqual
// }
// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.
// function getSmallerSegment(str, segmentLength){
//     return str.substring(0, segmentLength).toLowerCase()
// }
//
// getSmallerSegment("Codeup", 3)

// // Define a function named `isAString` that takes in a value and returns true if the input is a string, or false if the input is not a string.
// function isAString( input){
//  return typeof input === 'string';
// }
//
//     // Define a function named `isNotANumber` that takes in a value and returns true if the input is not a number, or false if the input is a number. This function should consider that numeric strings are not numbers.
// function isNotANumber(input){
//  return typeof input !== 'number'
// }
//     // Define a function named `canBeANumber` that takes in a value and returns true if the input is a number or a numeric string, or false if the input is not a string or if it cannot be parsed to a number.
// function canBeANumber(input) {
//  return !isNaN(parseFloat(input))
// }
//     // Define a function named `multiplyByTen` that takes in a value, multiplies it by ten, and returns the result. If the input is not a number and is not a numeric string, it returns false.
// function multiplyByTen(input){
//  return typeof (input * 10) === 'number';
// }
//     // Write a function named `randomNumber` that takes in an input and returns a random number between zero and the value of the input.
// function randomNumber(input){
//  return (Math.random() + input)
// }
//     // Write a function that takes in a string and returns the length of the string. If the input is not a string, it should be converted to a string and still return the length of the string.
// function stringLength(input){
//  return input.toString().length;
// }
//
//     // Write a function that takes in two strings. The second string should be a single character. The function should return the index of the second input in the first input. If the second input is more than one character or is not in the first input at all, it should return false.
// function indexOfCharacter(in1,in2){
//  if(in2.length > 1 || in1.indexOf(in2) === -1){
//   return false
//  }
//  return in1.indexOf(in2);
// }

// ============================= ARRAYS AND FUNCTIONS

// !! Write a function, logNums, that takes in a array and logs each number in the array !!

// !! Write a function, returnLongString, that takes in an array of strings and returns all strings concatenated together !!

// !! Write a function, returnArrSum, that takes in an array of values and returns the sum of all number elements !!

/* !! Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
        'input num in input array' if the second argument is an element in the first argument array
        otherwise, the function should return the string 'input num NOT in input array'
   !!

   // !! Write a function, returnLongString, that takes in an array of strings and returns all strings concatenated together !!

// !! Write a function, returnArrSum, that takes in an array of values and returns the sum of all number elements !!

/* !! Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
        'input num in input array' if the second argument is an element in the first argument array
        otherwise, the function should return the string 'input num NOT in input array'
   !!
 */