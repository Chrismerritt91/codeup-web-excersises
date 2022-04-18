
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

//  !! Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
//         'input num in input array' if the second argument is an element in the first argument array
//         otherwise, the function should return the string 'input num NOT in input array'
//    !!
//
//  !! Write a function, returnLongString, that takes in an array of strings and returns all strings concatenated together !!
//
// !! Write a function, returnArrSum, that takes in an array of values and returns the sum of all number elements !!
//
//  !! Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
//         'input num in input array' if the second argument is an element in the first argument array
//         otherwise, the function should return the string 'input num NOT in input array'
//

// var numbers = [4,13,10,7,5]
// //solve with while loop
// function numInArrayWhile(numbers, num){
//     var flag = false;
//     var i = numbers.length - 1;
//     while(i >=0){
//         if(numbers[i] === num) {
//             flag = true;
//         }
//         i--
//     }
//     return flag === true ? 'input num in input array' : 'input num not in input array';
// }


// // in class example for manipulating arrays
// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb"
// ];
// console.log(pies)
// // not flexible
// // function bakedPies(pies){
// //     return pies.slice(2)
// // }
// // flexible
// function bakedPies(pies) {
//     return pies.slice(pies.length - 3)
// }
// console.log(bakedPies(pies))

// // ** create a function that takes in an array of pies baked and return the 3 most recently baked pies
//
// ============== BONUS 1
//
// // ** Create a function that will take in a formatted string of numbers and return an array of phone numbers without any symbols. Console.log the output of the returned array.
//
// /* EXAMPLE...
//
//     var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
//
//     cleanPhoneNumbers(phoneNumbers);
//
//     the above code should output the following...
//
//        2105552020
//        2305552020
//        5125553030
//
//
// */
//
// // var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
//
// ============== BONUS 2
//
// Write a program to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.

//     Example input: "aBc12#"
// Example output: "AbC12#"
//
// function swapCase(str){
//     var output = '';
//     str.split('').forEach(function(character){
//         if(character === character.toUpperCase()){
//             output += character.toLowerCase();
//         } else {
//             output += character.toUpperCase();
//         }
//     });
//     return output;
// }
// console.log(swapCase("aBc12#"))
// console.log( "AbC12#")
// ============== BONUS 3
//
// Write a program that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".
//
//     Example Input: "geek5"
// Example Output: "Yes"
//
// Example Input: "codingchallenge25"


// What is a JS object?
// An object is a grouping of data and functionality. Data items contained in an object are referred to as properties, and functions on an object are referred to as methods.
// - What is the practical difference between these two statements?
// someObject.someProperty = 4; - the period is the common way to assign a property
// someObject[‘someProperty’] = 4; - the brackets are a way to assign a property if you dont know the name
// - Are JS objects mutable?
// - Given the following code, what will be logged and why?
// var objA = {a: 1, b: 2};
// var objB = objA;
// objA.a = 7;
// console.log(objB.a); = 7
// - Is it possible to nest another object inside of an object? yes
//     - Is it possible to nest an array in an object? yes
//     - What does ‘this’ refer to within an object method in JS? the object you are currently in

// mini exercise 1!!!!!!

// Create a few beverage objects and assign values to each object for the following properties:
//
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
// - isOpen
//
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.

//
// var beverage1 = {
//     brandName: 'pepsi',
//     type: 'soda',
//     volumeInLiters: 2,
//     priceInCents: 250,
//     expirationDate: 'apr 25',
//     datesOfPreviousSips: ['apr 5', 'apr 7', 'apr 11', 'apr 15'],
//     isOpen: true
// }
//      var beverage2 ={
//         brandName: 'coke',
//         type: 'soda',
//         volumeInLiters: 2,
//         priceInCents: 250,
//         expirationDate:'apr 11',
//         datesOfPreviousSips: ['mar 25', 'mar 27', 'mar 30', 'apr 2'],
//         isOpen: true
//     }
// var beverage3 ={
//     brandName: 'dr pepper',
//     type: 'soda',
//     volumeInLiters: 2,
//     priceInCents: 300,
//     expirationDate:'may 1',
//     datesOfPreviousSips: [],
//     isOpen: false
// }
// var beverage4 ={
//     brandName: 'red diamond',
//     type: 'sweet tea',
//     volumeInLiters: 2.5,
//     priceInCents: 200,
//     expirationDate:'may 12',
//     datesOfPreviousSips: ['may 2', 'may 6'],
//     isOpen: true
// }
// var beverages = [beverage1, beverage2, beverage3, beverage4]
// console.log(beverages)
// console.log(beverages[0].brandName)
// beverage4.expirationDate = 'may 7'
// console.log(beverage4.expirationDate)
// beverages.forEach(function(beverage){
//     console.log(beverage.brandName)
// })

// -- Mini Exercise 2
//
// var users = [
//     {
//         givenName: 'Sam',
//         age: 21
//     },
//     {
//         givenName: 'Cathy',
//         age: 34
//     },
//     {
//         givenName: 'Karen',
//         age: 43
//     }
// ];
//
// 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
// var name1 = users[0].givenName
// var name2 = users[1].givenName
// var name3 = users[2].givenName
// console.log(name1 +' ' + name2 +' '+ name3)
//
// var output = '';
// users.forEach(function(user){
//     output += user.givenName + " ";
// })
// console.log(output.trim());




// 2. Change the names of all users to "John Doe"
// users[0].givenName = 'John Doe'
// users[1].givenName = 'John Doe'
// users[2].givenName = 'John Doe'
users.forEach(function(user){
    user.givenName = 'John Doe'
})
console.log(users)




// 3. Increase the current age of all users by 1
// users.forEach(function(user){
//     user.age += 1
// })
// users.forEach(function(user){
//     console.log(user.age)})

// for(var i = 0;i < users.length; i++){
//     users[i].age += 1
// }
// users.forEach(function(user){
//     console.log(user.age)})

// users[0].age += 1
// users[1].age += 1
// users[2].age += 1
// users.forEach(function(user){
//     console.log(user.age)})
// //
// Can you accomplish each step using iteration?