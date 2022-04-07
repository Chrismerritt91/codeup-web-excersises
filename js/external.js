
console.log('Hello from external Javascript.')
alert('Welcome to my website!')
var favoriteColor = prompt('What is your favorite color?')
    alert('My favorite color is also ' + favoriteColor)

var daysRentedLittleMermaid = parseFloat(prompt('How many days did you rent the little mermaid?'))
var daysRentedBrotherBear = parseFloat(prompt('How many days did you rent Brother Bear?'))
var daysRentedHercules = parseFloat(prompt('How many days did you rent Hercules?'))
var totalcost = ((daysRentedBrotherBear + daysRentedLittleMermaid + daysRentedHercules) * 3)
 alert('For total days rented you will be charged ' + totalcost + ' dollars.')

var dollarsPerHourGoogle = parseFloat(prompt( 'How many hours have you worked at google?') * 400)
var dollarsPerHourAmazon = parseFloat(prompt('How many hours have you worked at amazon?') * 380)
var dollarsPerHourFacebook = parseFloat(prompt('How many hours have you worked at Facebook') * 350)
var weeklyContractWages = (dollarsPerHourGoogle + dollarsPerHourFacebook + dollarsPerHourAmazon)
alert('Your accumulated wages for the week are ' + weeklyContractWages + ' dollars.')

var isClassFull = confirm('Is the classroom full?')
var isThereScheduleConflict = confirm('Does the class time conflict with your schedule?')
var canEnroll = !isClassFull && !isThereScheduleConflict
if(canEnroll) {
    alert('You can enroll in class.')
} else(false)


