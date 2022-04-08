"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(string){
//     if(string === 'red'){
//         console.log('Red like an apple')
//     } else if(string === 'blue'){
//         console.log('blue like the sea')
//     } else if(string === 'yellow'){
//         console.log('yellow like a lemon')
//     } else if(string === 'green'){
//         console.log('green like the forest')
//     } else {
//         console.log( string + ' I dont like that color.')
//     }
// }
// console.log(analyzeColor('pink'))
// console.log(analyzeColor('red'))
// console.log(analyzeColor('green'))
// console.log(analyzeColor('blue'))
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// function analyzeColor(str) {
//     switch (str) {
//         case('red'):
//             console.log('Red like an apple')
//             break;
//         case('blue'):
//             console.log('blue like the sea')
//             break;
//         case('green'):
//             console.log('green like the forest')
//             break;
//         case('orange'):
//             console.log('orange like the sunset')
//             break;
//         case('yellow'):
//             console.log('yellow like a lemon')
//             break;
//         default:
//             console.log(str + ' i dont like this color')
//             break;
//     }
// }
// console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userColor = prompt('What is your favorite color?')
// console.log(analyzeColor(userColor))
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNum, totalCost){
//     var findPercentage = totalCost / 100
//     if(luckyNum == 0){
//         console.log('Your new total is: ' + (findPercentage * 100) + ' dollars')
//     } else if(luckyNum == 1) {
//         console.log('Your new total is: ' + (findPercentage * 90) + ' dollars')
//     } else if(luckyNum == 2) {
//         console.log('Your new total is: ' + (findPercentage * 75) + ' dollars')
//     } else if(luckyNum == 3) {
//         console.log('Your new total is: ' + (findPercentage * 65) + ' dollars')
//     } else if(luckyNum == 4) {
//         console.log('Your new total is: ' + (findPercentage * 50) + ' dollars')
//     } else if(luckyNum == 5) {
//         console.log('Your items are free.')
//     } else {}
//
// }
// calculateTotal(0, 100) // returns 100
// calculateTotal(4, 100) // returns 50
// calculateTotal(5, 100) // returns 0
// calculateTotal(1, 100) // returns 90
// calculateTotal(2, 100) // returns 75
// calculateTotal(3, 100) // returns 65
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// generate random number 0 through 6
var luckyNumber = Math.floor(Math.random() * 6);

function calculateTotal(luckyNum, totalCost){
    var findPercentage = totalCost / 100
    if(luckyNum === 0){
        alert('Your new total is: ' + (findPercentage * 100) + ' dollars')
    } else if(luckyNum === 1) {
        alert('Your new total is: ' + (findPercentage * 90) + ' dollars')
    } else if(luckyNum === 2) {
        alert('Your new total is: ' + (findPercentage * 75) + ' dollars')
    } else if(luckyNum === 3) {
        alert('Your new total is: ' + (findPercentage * 65) + ' dollars')
    } else if(luckyNum === 4) {
        alert('Your new total is: ' + (findPercentage * 50) + ' dollars')
    } else if(luckyNum === 5) {
       alert('Your items are free.')
    } else {}
}
var billTotalDollars = prompt('What was the total of your bill?')
alert('your lucky number was: ' + luckyNumber)
alert('Your price before discount was: ' + billTotalDollars)
calculateTotal(luckyNumber, billTotalDollars)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */